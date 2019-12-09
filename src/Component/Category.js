import React, { Component } from "react";
import { Grid, Card, List, ListItem, ListItemIcon, ListSubheader,ListItemText, Collapse, Typography, Divider } from '@material-ui/core';
import { Inbox, Drafts, Send, ExpandLess, ExpandMore, StarBorder } from "@material-ui/icons"
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
class Category extends Component {
  render() {
    return(
      <Grid item xs={12} sm={4}>
        <Typography variant="h5" color="inherit" component="h1" style={{fontFamily:"Poppins", fontWeight:600,textTransform:"uppercase",marginBottom:10}}>
          >> Category
        </Typography>
        <Divider style={{marginBottom:20}}/>
				<NestedList/>
			</Grid>
    );
  }
}

function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List component="nav" aria-label="secondary mailbox folders">
      <ListItemLink href="/category">
        <ListItemText primary="Education" />
      </ListItemLink>
      <ListItemLink href="/category">
        <ListItemText primary="Animals" />
      </ListItemLink>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Sport" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemLink href="/subcategory" className={classes.nested}>
            <ListItemText primary="Football" />
          </ListItemLink>
        </List>
      </Collapse>
    </List>
  );
}


export default Category;
