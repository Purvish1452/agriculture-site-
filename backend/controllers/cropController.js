// Crop data with their optimal conditions
const cropData = {
  rice: {
    name: 'Rice',
    conditions: {
      nitrogen: { min: 20, max: 140 },
      phosphorus: { min: 10, max: 145 },
      potassium: { min: 10, max: 205 },
      temperature: { min: 20, max: 35 },
      humidity: { min: 60, max: 100 },
      ph: { min: 5.5, max: 7.5 },
      rainfall: { min: 100, max: 300 }
    }
  },
  wheat: {
    name: 'Wheat',
    conditions: {
      nitrogen: { min: 30, max: 120 },
      phosphorus: { min: 20, max: 130 },
      potassium: { min: 20, max: 180 },
      temperature: { min: 15, max: 30 },
      humidity: { min: 40, max: 80 },
      ph: { min: 6.0, max: 7.5 },
      rainfall: { min: 50, max: 200 }
    }
  },
  maize: {
    name: 'Maize',
    conditions: {
      nitrogen: { min: 40, max: 130 },
      phosphorus: { min: 30, max: 140 },
      potassium: { min: 30, max: 190 },
      temperature: { min: 20, max: 35 },
      humidity: { min: 50, max: 90 },
      ph: { min: 5.5, max: 7.5 },
      rainfall: { min: 60, max: 250 }
    }
  },
  chickpea: {
    name: 'Chickpea',
    conditions: {
      nitrogen: { min: 20, max: 100 },
      phosphorus: { min: 15, max: 120 },
      potassium: { min: 15, max: 150 },
      temperature: { min: 15, max: 30 },
      humidity: { min: 40, max: 70 },
      ph: { min: 6.0, max: 7.5 },
      rainfall: { min: 40, max: 180 }
    }
  },
  kidneyBeans: {
    name: 'Kidney Beans',
    conditions: {
      nitrogen: { min: 25, max: 110 },
      phosphorus: { min: 20, max: 130 },
      potassium: { min: 20, max: 160 },
      temperature: { min: 18, max: 32 },
      humidity: { min: 45, max: 75 },
      ph: { min: 6.0, max: 7.5 },
      rainfall: { min: 45, max: 200 }
    }
  }
};

// Helper function to calculate how well a crop matches the given conditions
const calculateMatchScore = (crop, conditions) => {
  let score = 0;
  const parameters = ['nitrogen', 'phosphorus', 'potassium', 'temperature', 'humidity', 'ph', 'rainfall'];

  parameters.forEach(param => {
    const value = conditions[param];
    const cropRange = crop.conditions[param];
    
    if (value >= cropRange.min && value <= cropRange.max) {
      score += 1;
    } else {
      // Calculate how far the value is from the optimal range
      const distance = Math.min(
        Math.abs(value - cropRange.min),
        Math.abs(value - cropRange.max)
      );
      const range = cropRange.max - cropRange.min;
      score += 1 - (distance / range);
    }
  });

  return score / parameters.length;
};

export const getCropRecommendation = (req, res) => {
  try {
    const conditions = req.body;

    // Validate input
    const requiredParams = ['nitrogen', 'phosphorus', 'potassium', 'temperature', 'humidity', 'ph', 'rainfall'];
    const missingParams = requiredParams.filter(param => !(param in conditions));

    if (missingParams.length > 0) {
      return res.status(400).json({
        error: 'Missing required parameters',
        missing: missingParams
      });
    }

    // Calculate match scores for all crops
    const recommendations = Object.values(cropData).map(crop => ({
      crop: crop.name,
      score: calculateMatchScore(crop, conditions)
    }));

    // Sort by score in descending order
    recommendations.sort((a, b) => b.score - a.score);

    // Get top 3 recommendations
    const topRecommendations = recommendations.slice(0, 3);

    res.json({
      recommendations: topRecommendations,
      inputConditions: conditions
    });

  } catch (error) {
    console.error('Error in crop recommendation:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}; 