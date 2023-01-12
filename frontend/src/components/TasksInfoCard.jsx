import * as React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Title from './Title';


export default function TasksInfoActive() {
  return (
    <React.Fragment>
      <div className="d-flex flex-column gap-2">
      <Title>Active Tasks</Title>
      <Typography component="p" variant="h4">
        19
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        Total Tasks: 25
      </Typography>
      <div className="mt-4">
        <Link to="/tasks" color="primary">
          <Button variant="contained"> Manage Tasks </Button>
        </Link>
      </div>
      </div>
    </React.Fragment>
  );
}