import React, {Component} from 'react';
import {
  Container,
  Button,
  Typography,
  TextField,
  Card,
  CardHeader,
  Grid,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';
import Logo from '../blogging.svg';
import Login from './Login';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
class Register extends Component {
  render () {
    return (
      <div>
        <Container
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <Grid item xs={12} sm={9} lg={6}>
            <div
              style={{margin: 'auto', textAlign: 'center', marginBottom: 30}}
            >
              <Typography
                variant="h4"
                component="h6"
                style={{
                  fontWeight: 500,
                  marginBottom: 10,
                  color: '#fff',
                  fontFamily: 'Poppins',
                }}
              >
                NgeBlog App
              </Typography>
              <img
                src={Logo}
                style={{display: 'block', width: 100, margin: 'auto'}}
              />
            </div>
            <Card
              style={{
                margin: 'auto',
                textAlign: 'center',
                padding: 20,
                marginBottom: 20,
              }}
            >
              <form autoComplete="off" action="./Home">
                <Typography
                  variant="subtitle1"
                  component="h6"
                  color="primary"
                  style={{fontFamily: 'Poppins'}}
                >
                  Sign Up to have an account
                </Typography>
                <FormControl fullWidth={true} style={{marginBottom: 10}}>
                  <InputLabel
                    htmlFor="my-fullname"
                    style={{fontFamily: 'Poppins'}}
                  >
                    Fullname
                  </InputLabel>
                  <Input
										name="fullname"
                    id="my-fullname"
                    type="text"
                    aria-describedby="my-helper-text"
                    style={{fontFamily: 'Poppins'}}
                  />
                  <FormHelperText
                    id="my-helper-text"
                    style={{fontFamily: 'Poppins'}}
                  >
                    Message Error.
                  </FormHelperText>
                </FormControl>
                <FormControl fullWidth={true} style={{marginBottom: 10}}>
                  <InputLabel
                    htmlFor="my-username"
                    style={{fontFamily: 'Poppins'}}
                  >
                    Username
                  </InputLabel>
                  <Input
										name="username"
                    id="my-username"
                    type="text"
                    aria-describedby="my-helper-text1"
                    style={{fontFamily: 'Poppins'}}
                  />
                  <FormHelperText
                    id="my-helper-text1"
                    style={{fontFamily: 'Poppins'}}
                  >
                    Message Error.
                  </FormHelperText>
                </FormControl>
                <FormControl fullWidth={true} style={{marginBottom: 20}}>
                  <InputLabel
                    htmlFor="my-password"
                    style={{fontFamily: 'Poppins'}}
                  >
                    Password
                  </InputLabel>
                  <Input
										name="password"	
                    id="my-password"
                    type="password"
                    aria-describedby="my-helper-text2"
                    style={{fontFamily: 'Poppins'}}
                  />
                  <FormHelperText
                    id="my-helper-text2"
                    style={{fontFamily: 'Poppins'}}
                  >
                    Message Error.
                  </FormHelperText>
                </FormControl>
                <Button
                  size="large"
                  variant="contained"
                  type="submit"
                  fullWidth={true}
                  color="primary"
                >
                  Sign In
                </Button>
              </form>
              <Button color="primary" size="large" variant="text">
								You have a account?
                <Link to="/" style={{ textDecoration: "none" }}>
                  Signin Now!
                </Link>
              </Button>
            </Card>
            <Typography
              variant="subtitle2"
              align="center"
              color="primary"
              style={{fontFamily: 'Poppins', margin: 'auto', fontWeight: 500}}
            >
              Copyright &copy; 2019
            </Typography>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Register;
