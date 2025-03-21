import { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Grid,
  Slider,
} from '@mui/material'

const Recommendation = () => {
  const [formData, setFormData] = useState({
    nitrogen: 0,
    phosphorus: 0,
    potassium: 0,
    temperature: 0,
    humidity: 0,
    ph: 0,
    rainfall: 0,
  })

  const [recommendation, setRecommendation] = useState(null)

  const handleSliderChange = (name) => (event, newValue) => {
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Here you would typically make an API call to your backend
    // For now, we'll simulate a recommendation
    const crops = [
      'Rice',
      'Wheat',
      'Maize',
      'Chickpea',
      'Kidney Beans',
      'Pigeon Peas',
      'Moth Beans',
      'Mung Bean',
      'Black Gram',
      'Lentil',
      'Pomegranate',
      'Banana',
      'Mango',
      'Grapes',
      'Watermelon',
      'Muskmelon',
      'Apple',
      'Orange',
      'Papaya',
      'Coconut',
      'Cotton',
      'Jute',
      'Coffee',
    ]
    
    const randomCrop = crops[Math.floor(Math.random() * crops.length)]
    setRecommendation(randomCrop)
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Get Your Crop Recommendation
      </Typography>
      
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography gutterBottom>Nitrogen (N)</Typography>
              <Slider
                name="nitrogen"
                value={formData.nitrogen}
                onChange={handleSliderChange('nitrogen')}
                min={0}
                max={140}
                marks
                valueLabelDisplay="auto"
              />
              <Typography variant="caption" display="block" textAlign="center">
                {formData.nitrogen} mg/kg
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography gutterBottom>Phosphorus (P)</Typography>
              <Slider
                name="phosphorus"
                value={formData.phosphorus}
                onChange={handleSliderChange('phosphorus')}
                min={0}
                max={145}
                marks
                valueLabelDisplay="auto"
              />
              <Typography variant="caption" display="block" textAlign="center">
                {formData.phosphorus} mg/kg
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography gutterBottom>Potassium (K)</Typography>
              <Slider
                name="potassium"
                value={formData.potassium}
                onChange={handleSliderChange('potassium')}
                min={0}
                max={205}
                marks
                valueLabelDisplay="auto"
              />
              <Typography variant="caption" display="block" textAlign="center">
                {formData.potassium} mg/kg
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography gutterBottom>Temperature (°C)</Typography>
              <Slider
                name="temperature"
                value={formData.temperature}
                onChange={handleSliderChange('temperature')}
                min={8}
                max={44}
                marks
                valueLabelDisplay="auto"
              />
              <Typography variant="caption" display="block" textAlign="center">
                {formData.temperature}°C
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography gutterBottom>Humidity (%)</Typography>
              <Slider
                name="humidity"
                value={formData.humidity}
                onChange={handleSliderChange('humidity')}
                min={14}
                max={100}
                marks
                valueLabelDisplay="auto"
              />
              <Typography variant="caption" display="block" textAlign="center">
                {formData.humidity}%
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography gutterBottom>pH</Typography>
              <Slider
                name="ph"
                value={formData.ph}
                onChange={handleSliderChange('ph')}
                min={3.5}
                max={10}
                step={0.1}
                marks
                valueLabelDisplay="auto"
              />
              <Typography variant="caption" display="block" textAlign="center">
                {formData.ph}
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography gutterBottom>Rainfall (mm)</Typography>
              <Slider
                name="rainfall"
                value={formData.rainfall}
                onChange={handleSliderChange('rainfall')}
                min={20}
                max={300}
                marks
                valueLabelDisplay="auto"
              />
              <Typography variant="caption" display="block" textAlign="center">
                {formData.rainfall} mm
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Get Recommendation
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>

        {recommendation && (
          <Paper
            elevation={2}
            sx={{
              p: 3,
              mt: 4,
              bgcolor: 'success.light',
              color: 'white',
              textAlign: 'center',
            }}
          >
            <Typography variant="h5" gutterBottom>
              Recommended Crop
            </Typography>
            <Typography variant="h3">
              {recommendation}
            </Typography>
          </Paper>
        )}
      </Paper>
    </Container>
  )
}

export default Recommendation 