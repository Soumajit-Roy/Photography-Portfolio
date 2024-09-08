import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CollectionsIcon from '@mui/icons-material/Collections';
import WorkIcon from '@mui/icons-material/Work';

import './cards.css'



export default function ImgMediaCard() {
  return (
    <>
    <div className='headings'>
    <h2>Works</h2>
    </div>
    <div className='cards-pack'>
    <Card sx={{ 
      maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Wedding Photography"
        height="300"
        image="https://images.unsplash.com/photo-1725554643280-12c743372ba4"
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
        <Button size="small" variant="contained" startIcon={<WorkIcon />}>Packages</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Wedding Photography"
        height="300"
        image="https://images.unsplash.com/photo-1658688976224-5d5c04d1423c"
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
        <Button size="small" variant="contained" startIcon={<WorkIcon />}>Packages</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Wedding Photography"
        height="300"
        image="https://plus.unsplash.com/premium_photo-1683817397904-d4465651a071"
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
        <Button size="small" variant="contained" startIcon={<WorkIcon />}>Packages</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Wedding Photography"
        height="300"
        image="https://plus.unsplash.com/premium_photo-1661868941940-167ef5be4885"
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
        <Button size="small" variant="contained" startIcon={<WorkIcon />}>Packages</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="Wedding Photography"
        height="300"
        image="https://images.unsplash.com/photo-1515626553181-0f218cb03f14"
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
        <Button size="small" variant="contained" startIcon={<WorkIcon />}>Packages</Button>
      </CardActions>
    </Card>
    </div>
    </>
  );
}