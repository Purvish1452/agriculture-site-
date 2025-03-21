import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Avatar,
} from '@mui/material'
import AgricultureIcon from '@mui/icons-material/Agriculture'
import ScienceIcon from '@mui/icons-material/Science'
import CodeIcon from '@mui/icons-material/Code'

const About = () => {
  const features = [
    {
      icon: <AgricultureIcon sx={{ fontSize: 40 }} />,
      title: 'Agricultural Expertise',
      description: 'Our system is designed with deep understanding of agricultural practices and crop requirements.',
    },
    {
      icon: <ScienceIcon sx={{ fontSize: 40 }} />,
      title: 'Scientific Approach',
      description: 'We use machine learning algorithms and data analysis to provide accurate recommendations.',
    },
    {
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      title: 'Modern Technology',
      description: 'Built with cutting-edge web technologies for a seamless user experience.',
    },
  ]

  const team = [
    {
      name: 'John Doe',
      role: 'Agricultural Expert',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      name: 'Jane Smith',
      role: 'Data Scientist',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      name: 'Mike Johnson',
      role: 'Software Engineer',
      avatar: 'https://via.placeholder.com/150',
    },
  ]

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          About Our Project
        </Typography>
        
        <Typography variant="body1" paragraph align="center" sx={{ mb: 6 }}>
          The Crop Recommendation System is an innovative solution that helps farmers
          make informed decisions about which crops to plant based on various
          environmental and soil conditions. Our system uses advanced machine
          learning algorithms to analyze multiple parameters and provide accurate
          recommendations.
        </Typography>

        {/* Features Section */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Team Section */}
        <Typography variant="h5" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
          Our Team
        </Typography>
        
        <Grid container spacing={4} justifyContent="center">
          {team.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Avatar
                  src={member.avatar}
                  sx={{ width: 120, height: 120, mb: 2 }}
                />
                <Typography variant="h6" gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.role}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Contact Section */}
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Email: contact@croprecommender.com
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Phone: +1 (555) 123-4567
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}

export default About 