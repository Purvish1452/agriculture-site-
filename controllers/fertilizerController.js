import Fertilizer from '../models/fertilizer.js';

// Get all fertilizers
export const getAllFertilizers = async (req, res) => {
    try {
        const fertilizers = await Fertilizer.find();
        res.status(200).json(fertilizers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get fertilizer by ID
export const getFertilizerById = async (req, res) => {
    try {
        const fertilizer = await Fertilizer.findById(req.params.id);
        if (!fertilizer) {
            return res.status(404).json({ message: 'Fertilizer not found' });
        }
        res.status(200).json(fertilizer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create new fertilizer
export const createFertilizer = async (req, res) => {
    try {
        const fertilizer = new Fertilizer(req.body);
        const newFertilizer = await fertilizer.save();
        res.status(201).json(newFertilizer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update fertilizer
export const updateFertilizer = async (req, res) => {
    try {
        const fertilizer = await Fertilizer.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!fertilizer) {
            return res.status(404).json({ message: 'Fertilizer not found' });
        }
        res.status(200).json(fertilizer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete fertilizer
export const deleteFertilizer = async (req, res) => {
    try {
        const fertilizer = await Fertilizer.findByIdAndDelete(req.params.id);
        if (!fertilizer) {
            return res.status(404).json({ message: 'Fertilizer not found' });
        }
        res.status(200).json({ message: 'Fertilizer deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get fertilizer suggestions based on crop
export const getFertilizerSuggestions = async (req, res) => {
    try {
        const { crop } = req.query;
        const fertilizers = await Fertilizer.find({
            recommendedCrops: { $regex: crop, $options: 'i' }
        });
        res.status(200).json(fertilizers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; 