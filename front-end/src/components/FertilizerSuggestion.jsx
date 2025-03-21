import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  CircularProgress,
  Alert,
} from '@mui/material';

const FertilizerSuggestion = () => {
  const [crop, setCrop] = useState('');
  const [fertilizers, setFertilizers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`http://localhost:5000/api/fertilizers/suggestions?crop=${encodeURIComponent(crop)}`);
      console.log('API Response:', response.data); // Debug log
      setFertilizers(response.data);
    } catch (err) {
      console.error('API Error:', err); // Debug log
      setError(err.response?.data?.message || 'Failed to fetch fertilizer suggestions. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Fertilizer Suggestions
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
        <TextField
          fullWidth
          label="Enter Crop Name"
          value={crop}
          onChange={(e) => setCrop(e.target.value)}
          margin="normal"
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading}
          sx={{ mt: 2 }}
        >
          {loading ? <CircularProgress size={24} /> : 'Get Suggestions'}
        </Button>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      <Grid container spacing={3}>
        {fertilizers.map((fertilizer) => (
          <Grid item xs={12} md={6} lg={4} key={fertilizer._id}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {fertilizer.name}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  Type: {fertilizer.type}
                </Typography>
                <Typography variant="body2" paragraph>
                  Composition: {fertilizer.composition}
                </Typography>
                <Typography variant="body2" paragraph>
                  Application Method: {fertilizer.applicationMethod}
                </Typography>
                <Typography variant="body2" paragraph>
                  Dosage: {fertilizer.dosage}
                </Typography>
                <Typography variant="body2" paragraph>
                  Price: ₹{fertilizer.price}
                </Typography>
                <Typography variant="subtitle2" color="primary">
                  Benefits:
                </Typography>
                <ul>
                  {fertilizer.benefits.map((benefit, index) => (
                    <li key={index}>
                      <Typography variant="body2">{benefit}</Typography>
                    </li>
                  ))}
                </ul>
                <Typography variant="subtitle2" color="error">
                  Precautions:
                </Typography>
                <ul>
                  {fertilizer.precautions.map((precaution, index) => (
                    <li key={index}>
                      <Typography variant="body2">{precaution}</Typography>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FertilizerSuggestion; 