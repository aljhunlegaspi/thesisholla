import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            Navigation Panel
        </ListSubheader>

        <Link to="/"
         style={{ textDecoration: 'none' }}
         > 
         <ListItemButton>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItemButton>
        </Link>
        <Divider/>
        <ListSubheader component="div" inset>
            Guests
        </ListSubheader>
        <Link to="/tasks"  style={{ textDecoration: 'none' }}
        >
            <ListItemButton>
                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Assignments" />
            </ListItemButton>
        </Link>

        <Link to="/guests"  style={{ textDecoration: 'none' }}
        >
            <ListItemButton>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Guests" />
            </ListItemButton>
        </Link>

        <Divider/>

        <ListSubheader component="div" inset>
            Property
        </ListSubheader>

        <Link to="/rooms"  style={{ textDecoration: 'none' }}
        >
            <ListItemButton>
                <ListItemIcon>
                    <MeetingRoomIcon />
                </ListItemIcon>
                <ListItemText primary="Rooms" />
            </ListItemButton>
        </Link>
        <Divider/>
        <ListSubheader component="div" inset>
            Employees & Staff
        </ListSubheader>
        <Link to="/employees"  style={{ textDecoration: 'none' }}
        >
            <ListItemButton>
                <ListItemIcon>
                    <AssignmentIndIcon />
                </ListItemIcon>
                <ListItemText primary="Employees" />
            </ListItemButton>
        </Link>

        <Link to="/employees"  style={{ textDecoration: 'none' }}
        >
            <ListItemButton>
                <ListItemIcon>
                    <SummarizeIcon />
                </ListItemIcon>
                <ListItemText primary="Reports" />
            </ListItemButton>
        </Link>

    </React.Fragment>
);