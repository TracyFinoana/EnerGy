import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { makeStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';
import logo from '../Assets/Images/logoSwis.png';
const useStyles = makeStyles((theme) => ({
  map: {
    width: '98%',
    height: '400px', // Adjust the height as needed
    // [theme.breakpoints.down('sm')]: {
    //   height: '300px', // Adjust the height for smaller screens
    // }, 
    marginBottom: '20px',
    margin:'0 auto',
  },
}));

const Map = () => {
  const classes = useStyles();

  const position = [46.714261, 6.383269]; // Coordinates for "Rue du Mont-d'Or 16, 1337 VALLORBE"

  const markerIcon = new L.Icon({
    iconUrl: markerIconPng,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <div className={classes.map}>
      <MapContainer center={position} zoom={15} style={{ width: '100%', height: '100%'}}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={markerIcon} >
          <Popup>
            <Grid container spacing={2} style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
              <Typography variant="subtitle1" fontFamily="Markot-Book">
                Nous Somme ici.
              </Typography> 
              <img src={logo} style={{width:'85px',backgroundColor:'#333', borderRadius:'10%'}} alt='logo'/>
              <Typography variant="subtitle2" fontFamily="Markot-Book">
               Rue du Mont-d'Or 16, 1337 VALLORBE
              </Typography>              
            </Grid>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
