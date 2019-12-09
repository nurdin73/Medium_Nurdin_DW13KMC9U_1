import React, { Component } from "react";
import {
  Menu,
  Search,
  AccountCircle,
  NotificationsNone,
  MoreVert,
  Inbox,
  Mail,
  SearchOutlined
} from "@material-ui/icons";
import {
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  MenuItem,
  Container,
  Button,
  Avatar,
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
  Divider,
  Paper,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from "@material-ui/core";
import Menus from "@material-ui/core/Menu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";
import "../App.css";
import Header from "../Component/Header"
import Banner from "../Component/Banner"
import Article from "../Component/Article"
import Category from "../Component/Category"

class Main extends Component {
	render() {
		return(
			<div style={{backgroundColor:"#ffffff"}}>
				<Header/>
				<Banner/>
				<Container style={{marginTop:50}}>
          <Grid container spacing={2}>
            <Article/>
            <Category/>
          </Grid>
        </Container>
			</div>
		)
	}
}
export default Main;
