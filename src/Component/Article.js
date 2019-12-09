import React, { Component } from 'react';
import { Grid, Card, CardMedia, CardContent, CardActionArea, IconButton, Typography, CardActions, Button, Divider } from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { ThumbUpAlt, Share } from '@material-ui/icons'
import { makeStyles, useTheme } from '@material-ui/styles'
import "../App.css"
class Article extends Component {
  render() {
    return (
      <Grid item xs={12} sm={8}>
        <Typography variant="h5" color="inherit" component="h1" style={{fontFamily:"Poppins", fontWeight:600,textTransform:"uppercase",marginBottom:10}}>
          >> Most Popular Article
        </Typography>
        <Divider style={{marginBottom:20}}/>
				<MediaCards/> {/* Function Get Article Card */}
				<MediaCards/> {/* Function Get Article Card */}
				<MediaCards/> {/* Function Get Article Card */}
				<MediaCards/> {/* Function Get Article Card */}
			</Grid>
    );
  }
}

function MediaCards() {
  return (
    <Card style={{marginBottom:10}}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className="card-img"
          image="https://placeimg.com/1000/480/any"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <Link to="/article" style={{textDecoration:"none", color:"#000", fontFamily:"Poppins"}}>Lizard</Link>
          </Typography>
          <div style={{display:"flex", width:170,justifyContent:"space-between"}}>
            <Typography gutterBottom variant="caption" component="p" style={{fontFamily:"Poppins", color:"#ccd",fontWeight:400, textTransform:"uppercase"}}>
              Animal
            </Typography>
            <Typography gutterBottom variant="caption" component="p" style={{fontFamily:"Poppins", color:"#ccd",fontWeight:400, textTransform:"uppercase"}}>
              Education
            </Typography>
            <Typography gutterBottom variant="caption" component="p" style={{fontFamily:"Poppins", color:"#ccd",fontWeight:400, textTransform:"uppercase"}}>
              Reptile
            </Typography>
          </div>
          <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily:"Poppins"}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
          <div style={{marginTop:20, display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <div>
              <Link to="/profile" style={{fontFamily:"Roboto Condensed", color:"#000", textDecoration:"none", fontSize:16}}>
                John Doe
              </Link>
              <Typography gutterBottom variant="caption" component="p" style={{fontFamily:"Roboto", color:"#424242",fontWeight:400, textTransform:"uppercase",marginTop:5}}>
                26 Nov 2019 | 12:00
              </Typography>
            </div>
            <div>
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              style={{margin:10}}
            >
              Follow
            </Button>
            <Button
              size="small"
              variant="contained"
              color="inherit"
              style={{margin:10}}
              startIcon={<Share />}
            >
              Share
            </Button>
            <Button
              size="small" 
              variant="contained"
              color="primary"
              style={{margin:10}}
              startIcon={<ThumbUpAlt />}
            >
              Like
            </Button>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


export default Article;