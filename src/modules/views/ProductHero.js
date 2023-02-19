import * as React from 'react';
import Button from '../components/Button';
import TextField from '../components/TextField';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundColor: 'white', // Average color of the background image.
        backgroundPosition: 'center'
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <Typography 
        color="black" 
        align="center" 
        variant="h2" 
        marked="center"
      >
        find some mf freelancers
      </Typography>
      <TextField variant='filled' placeholder='~~~placeholder~~~' inputProps={{style: {width: 1000, height: 50, fontSize: 30} }}/>
      <Typography
        color="black"
        align="center"
        variant="h5"
        sx={{ mb: 2, mt: { xs: 2, sm: 2 } }}
      >
        I cooked it up and then i went global
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/premium-themes/onepirate/sign-up/"
        sx={{ minWidth: 200 }}
      >
        Register
      </Button>
      <Typography variant="body2" color="black" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}
