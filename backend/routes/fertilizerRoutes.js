import express from 'express';
import { auth } from '../middleware/auth.js';
import * as fertilizerController from '../controllers/fertilizerController.js';

const router = express.Router();

// Public routes
router.get('/suggestions', fertilizerController.getFertilizerSuggestions);
router.get('/', fertilizerController.getAllFertilizers);
router.get('/:id', fertilizerController.getFertilizerById);

// Protected routes (require authentication)
router.post('/', auth, fertilizerController.createFertilizer);
router.put('/:id', auth, fertilizerController.updateFertilizer);
router.delete('/:id', auth, fertilizerController.deleteFertilizer);

export default router; 