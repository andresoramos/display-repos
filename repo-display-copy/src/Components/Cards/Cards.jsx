import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const cardFunc = (mainText, secondaryText, explanation)=>{
    
    const card = (
      <React.Fragment>
        <CardContent>
          <Typography variant="h5" component="div">
            {mainText}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {secondaryText}
          </Typography>
          <Typography  variant="body2">
            {explanation}
            <br />
          </Typography>
        </CardContent>
      </React.Fragment>
    );
    return card
}

export default function OutlinedCard({name, fullName, description}) {
  return (
    <Box sx={{ width: 275, margin:'0.5em' }}>
      <Card sx={{height: "14em", overflow: 'auto', overflowX: "hidden"}} variant="outlined">{cardFunc(name, fullName, description)}</Card>
    </Box>
  );
}