import React, { Component } from "react";
import {
  Menu,
  Search,
  AccountCircle,
  NotificationsNone,
  MoreVert
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
  Paper
} from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";
class Home extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#fff" }}>
        <AppBar position="static" color="inherit">
          <Container>
            <Toolbar
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography variant="h6" style={{ textTransform: "uppercase" }}>
                Ngeblog App
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <IconButton color="inherit">
                  <NotificationsNone />
                </IconButton>
                <Avatar
                  alt="Remy Sharp"
                  src="/broken-image.jpg"
                  style={{ backgroundColor: "#2e7d32" }}
                >
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
        <Divider />
        <div style={{ width: "90%", margin: "auto", marginTop: 20 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} lg={4}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image="https://placeimg.com/640/480/any"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      style={{ fontFamily: "Poppins" }}
                    >
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      style={{ fontFamily: "Poppins" }}
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Share
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4} lg={4}>
              <Paper style={{ padding: 6, display: "flex", marginBottom: 10 }}>
                <div style={{ flex: 1, marginRight: 10 }}>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="80"
                    image="https://placeimg.com/640/480/any"
                    title="Contemplative Reptile"
                  />
                </div>
                <div style={{ flex: 3 }}>
                  <Typography
                    variant="subtitle1"
                    component="h3"
                    style={{ fontFamily: "Poppins" }}
                  >
                    <Link
                      to="/article:id"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      This is a sheet of paper.
                    </Link>
                  </Typography>
                  <Typography
                    variant="caption"
                    component="h3"
                    style={{ fontFamily: "Poppins", marginTop: 20 }}
                  >
                    john Doe
                  </Typography>
                </div>
              </Paper>
              <Paper style={{ padding: 6, display: "flex", marginBottom: 10 }}>
                <div style={{ flex: 1, marginRight: 10 }}>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="80"
                    image="https://placeimg.com/640/480/any"
                    title="Contemplative Reptile"
                  />
                </div>
                <div style={{ flex: 3 }}>
                  <Typography
                    variant="subtitle1"
                    component="h3"
                    style={{ fontFamily: "Poppins" }}
                  >
                    <Link
                      to="/article:id"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      This is a sheet of paper.
                    </Link>
                  </Typography>
                  <Typography
                    variant="caption"
                    component="h3"
                    style={{ fontFamily: "Poppins", marginTop: 20 }}
                  >
                    john Doe
                  </Typography>
                </div>
              </Paper>
              <Paper style={{ padding: 6, display: "flex", marginBottom: 10 }}>
                <div style={{ flex: 1, marginRight: 10 }}>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="80"
                    image="https://placeimg.com/640/480/any"
                    title="Contemplative Reptile"
                  />
                </div>
                <div style={{ flex: 3 }}>
                  <Typography
                    variant="subtitle1"
                    component="h3"
                    style={{ fontFamily: "Poppins" }}
                  >
                    <Link
                      to="/article:id"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      This is a sheet of paper.
                    </Link>
                  </Typography>
                  <Typography
                    variant="caption"
                    component="h3"
                    style={{ fontFamily: "Poppins", marginTop: 20 }}
                  >
                    john Doe
                  </Typography>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image="https://placeimg.com/640/480/any"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      style={{ fontFamily: "Poppins" }}
                    >
                      Lizard
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      style={{ fontFamily: "Poppins" }}
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Share
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    style={{ fontFamily: "Poppins" }}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 20
            }}
          >
            <Link
              to="/article:id"
              style={{
                textDecoration: "none",
                color: "#000",
                fontFamily: "Poppins",
                fontWeight: "bold",
                color: "#1976d2",
                textTransform: "uppercase",
                fontSize: 14
              }}
            >
              See all featured >>
            </Link>
          </div>
          <Divider style={{ marginTop: 10, marginBottom: 30 }} />
					<Grid container spacing={2}>
						<Grid item xs={12} sm={9}>
							<Card style={{marginBottom:20}}>
								<CardActionArea>
									<CardMedia
										component="img"
										alt="Contemplative Reptile"
										height="350"
										image="https://placeimg.com/640/480/any"
										title="Contemplative Reptile"
									/>
									<CardContent>
										<Typography
											gutterBottom
											variant="h5"
											component="h2"
											style={{ fontFamily: "Poppins" }}
										>
											Lizard
										</Typography>
										<ul className="listTag">
											<li>
												<Link to="/tag">Mental</Link>
											</li>
											<li>
												<Link to="/tag">Mental</Link>
											</li>
											<li>
												<Link to="/tag">Mental</Link>
											</li>
										</ul>
										<Typography
											variant="body2"
											color="textSecondary"
											component="p"
											style={{ fontFamily: "Poppins" }}
										>
											Lizards are a widespread group of squamate reptiles, with
											over 6,000 species, ranging across all continents except
											Antarctica
										</Typography>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button
										size="small"
										color="primary"
										style={{ fontFamily: "Poppins" }}
									>
										Share
									</Button>
									<Button
										size="small"
										color="primary"
										style={{ fontFamily: "Poppins" }}
									>
										Learn More
									</Button>
								</CardActions>
							</Card>
						</Grid>
					</Grid>
        </div>
      </div>
    );
  }
}

export default Home;
