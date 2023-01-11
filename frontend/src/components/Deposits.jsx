import * as React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Title from './Title';


export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Clean Rooms</Title>
      <Typography component="p" variant="h4">
        12
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Total Rooms: 25
      </Typography>
      <div>
        <Link to="/rooms" color="primary">
          Manage Rooms
        </Link>
      </div>
    </React.Fragment>
  );
}