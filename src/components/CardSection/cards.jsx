import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InventoryIcon from '@mui/icons-material/Inventory';
import CollectionsIcon from '@mui/icons-material/Collections';
import WorkIcon from '@mui/icons-material/Work';

export default function ImgMediaCard() {
  return (
    <>
    <div className='headings'>
    <h2>Works</h2>
    </div>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Wedding Photography"
        height="300"
        image="https://images.unsplash.com/photo-1725429928697-447cfcf70434"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lorem
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" startIcon={<CollectionsIcon />}>View Photos</Button>
        <Button size="small" variant="contained" startIcon={<InventoryIcon />}>Packages</Button>
      </CardActions>
    </Card>
    </>
  );
}