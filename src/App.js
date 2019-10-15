import React from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid, Col, Row } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

import './App.css';

const cities = [
  'Buenos Aires,ar',
  'Barcelona,es',
  'Lugano,ch',
  'Tortuguitas,ar'
];

function App() {
  return (
    <Grid>
      <Row>
        <AppBar position='sticky'>
          <Toolbar>
            <Typography  color='inherit'>
              Weather App
            </Typography>
          </Toolbar>
        </AppBar>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <LocationList cities={cities}></LocationList>
        </Col>
      
      <Col xs={12} md={6}>
        <Paper elevation={4}>
          <div className="details">
            <ForecastExtended></ForecastExtended>
          </div>
        </Paper>
        
      </Col>
      </Row>
    </Grid>

  );
}


export default App;
