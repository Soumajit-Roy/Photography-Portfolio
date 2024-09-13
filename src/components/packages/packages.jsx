import React from 'react'
import Carousel from '../carousel/carousel'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import packagesData from '../../package-data';
import './packages.css'
import {createTheme, ThemeProvider} from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import CollectionsIcon from '@mui/icons-material/Collections';
import { Link,useNavigate, useLocation } from "react-router-dom";
import Contact from '../contact/contactus';

const theme = createTheme({
  typography: {
    h5: {
      fontWeight: 'bold',
      fontFamily: '"Sorts Mill Goudy", serif',
    },
    h4: {
      fontWeight: 'bold',
      fontFamily: '"Sorts Mill Goudy", serif',
    },
    body2: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: 'bold'
    },
    button: {
      fontFamily: '"Lora", serif'
    }
  },
});




const Packages = () => {

  const navigate = useNavigate();
  const location = useLocation();
  
  const handleScrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/'); // Navigate to the homepage
    }
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Delay to allow DOM to re-render after navigation
  };

  return (
    <>
    <Navbar />
    <Carousel />

    <div className='headings'>
    <h2>Packages</h2>
    </div>

    <div className='package-card-wrapper'>

    <ThemeProvider theme={theme}> 
    {packagesData.packages.map((pkg, index) => (
    <Card key={index} 
    sx={{ 
      maxWidth: 345,
      bgcolor: '#ffb368'  }} >
        <CardMedia
          component="img"
          height="140"
          image="https://picsum.photos/345/300"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {pkg.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {pkg.package_name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', padding: '0 20px'}}>
          <ul>
            {pkg.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: 'space-around' }}>
          <Button
          sx={{
            color: 'black',
            backgroundColor: '#FFD700'
          }} size="small" variant="contained" startIcon={<CollectionsIcon />}>View Photos</Button>
          <Button
          sx={{
            color: 'black',
            backgroundColor: '#FFD700'
          }} size="small" variant="contained" onClick={() => handleScrollToSection('contact-tag')} startIcon={<CallIcon />}>Contact Us</Button>
      </CardActions>
    </Card>
    ))}
    </ThemeProvider> 
    </div>

    <Footer />
    </>
  )
}

export default Packages