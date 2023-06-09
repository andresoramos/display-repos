import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import userPic from '../../Assets/userPic.jpg'

export default function SettingsCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={userPic}
          alt="User profile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Tim D'Employee
          </Typography>
          <Typography variant="body2" color="text.secondary">
            tim.demp@gmail.com
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
