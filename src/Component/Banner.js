import React, { Component } from 'react';
import {  } from '@material-ui/icons'
import { Typography, Button } from '@material-ui/core'
import "../App.css"
class Banner extends Component {
  render() {
    return (
      <div className="banner-app">
        <div style={{textAlign:"center"}}>
					<Typography variant="h3" component="h4" style={{fontFamily:"Rubik", textTransform:"uppercase", color:"white"}}>
						This Is Tagline
					</Typography>
					<Typography variant="caption" component="h4" style={{fontFamily:"Poppins", color:"white"}}>
						This Is Caption For This Website
					</Typography>
				</div>
      </div>
    );
  }
}

export default Banner;