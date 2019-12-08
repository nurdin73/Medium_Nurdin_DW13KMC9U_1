import React, { Component } from 'react';
import { Menu, Search, AccountCircle, NotificationsNone, MoreVert } from '@material-ui/icons'
import { Grid, AppBar, Toolbar, IconButton, Typography, InputBase, Badge, MenuItem, Container, Button, Avatar } from '@material-ui/core'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import "../App.css";
class Home extends Component {
  render() {
    return (
      <div style={{backgroundColor:"#fff"}}>
        <AppBar position="static" color="inherit">
					<Container>
						<Toolbar style={{display:"flex", justifyContent:"space-between"}}>
							<Typography variant="h6" style={{textTransform:"uppercase"}}>
								Ngeblog App
							</Typography>
							<div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
								<IconButton color="inherit">
									<NotificationsNone />
								</IconButton>
								<Avatar alt="Remy Sharp" src="/broken-image.jpg" style={{backgroundColor:"#2e7d32"}}>
									B
								</Avatar>
							</div>
						</Toolbar>
					</Container>
        </AppBar>
				<Container>
					<ul className="listMenu">
						<li>
							<Link to="/home">Home</Link>
						</li>
						<li>
							<Link to="/home">About</Link>
						</li>
						<li>
							<Link to="/home">Contact Us</Link>
						</li>
					</ul>
				</Container>
      </div>
    );
  }
}

export default Home;