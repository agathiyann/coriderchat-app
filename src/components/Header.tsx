import React from 'react';
import { Box, Grid, Typography, IconButton, Menu, MenuItem, Avatar, ImageListItem } from '@mui/material';
import { FaArrowLeft, FaEllipsisV,  FaFlag } from 'react-icons/fa';
import { GoPeople,GoReport } from "react-icons/go";
import { LiaPhoneSolid } from "react-icons/lia";


export type TripDetailsType = {
  className?: string;
};

const TripDetails: React.FC<TripDetailsType> = ({ className = "" }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={`trip-details ${className}`} sx={{ backgroundColor: "#faf9f4", padding: 2 }}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Grid container alignItems="center">
            <IconButton aria-label="Back">
              <FaArrowLeft />
            </IconButton>
            <Typography variant="h6" component="h2" ml={1}>
              Trip 1
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <IconButton aria-label="Options" onClick={handleClick}>
            <FaEllipsisV />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <GoPeople style={{ marginRight: 8 }} />
              Members
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <LiaPhoneSolid style={{ marginRight: 8 }} />
              Share Number
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <GoReport  style={{ marginRight: 8 }} />
              Report
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
      <Grid container alignItems="center" mt={2}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            width: 80,
            height: 80,
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '50%',
            marginRight: 2,
          }}
        >
          <ImageListItem sx={{ width: '50%', height: '50%' }}>
            <img src="/rectangle-12@2x.png" alt="Profile 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </ImageListItem>
          <ImageListItem sx={{ width: '50%', height: '50%' }}>
            <img src="/rectangle-14@2x.png" alt="Profile 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </ImageListItem>
          <ImageListItem sx={{ width: '50%', height: '50%' }}>
            <img src="/rectangle-13@2x.png" alt="Profile 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </ImageListItem>
          <ImageListItem sx={{ width: '50%', height: '50%' }}>
            <img src="/rectangle-15@2x.png" alt="Profile 4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </ImageListItem>
        </Box>
        <Box>
          <Typography>
            <span>From </span>
            <strong>IGI Airport, T3</strong>
          </Typography>
          <Typography>
            <span>To </span>
            <strong>Sector 28</strong>
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};

export default TripDetails;
