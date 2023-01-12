import * as React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Title from './Title';


export default function RoomInfoCardClean() {
  return (
    <React.Fragment>
      <div className="d-flex flex-column gap-2">
      <Title>Clean Rooms</Title>
      <Typography component="p" variant="h4">
        19
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Total Rooms: 25
      </Typography>
      <div className="mt-4">
        <Link to="/rooms" color="primary">
          <Button variant="contained"> Manage Rooms </Button>
        </Link>
      </div>
      </div>
    </React.Fragment>
  );
}