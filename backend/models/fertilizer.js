import mongoose from 'mongoose';

const fertilizerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        enum: ['Organic', 'Inorganic', 'Bio-fertilizer']
    },
    composition: {
        type: String,
        required: true
    },
    applicationMethod: {
        type: String,
        required: true
    },
    dosage: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    benefits: [{
        type: String,
        required: true
    }],
    precautions: [{
        type: String,
        required: true
    }],
    recommendedCrops: [{
        type: String,
        required: true
    }]
}, {
    timestamps: true
});

const Fertilizer = mongoose.model('Fertilizer', fertilizerSchema);

export default Fertilizer; 