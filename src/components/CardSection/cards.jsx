import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CollectionsIcon from '@mui/icons-material/Collections';
import WorkIcon from '@mui/icons-material/Work';
import {createTheme, ThemeProvider} from '@mui/material';


import './cards.css'
import Data from '../../Data.json'

const theme = createTheme({
  typography: {
    h5: {
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


export default function ImgMediaCard() {
  return (
    <>
    <div className='headings'>
    <h2>Works</h2>
    </div>
    <div className='cards-pack'>

    <ThemeProvider theme={theme}>
    {Data.map((item)=>(
    <Card key={item.id} 
    sx={{ 
      maxWidth: 345 ,
      bgcolor: '#E5D6C2'
      }}>
      <CardMedia
        component="img"
        alt={item.heading}
        height="300"
        image={item.image_path}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.heading}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.description}
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
          }} size="small" variant="contained" startIcon={<WorkIcon />}>Packages</Button>
      </CardActions>
    </Card>
    ))}
    </ThemeProvider>

    </div>
    </>
  );
}