import React, { Component } from "react";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import TwitterLogin from 'react-twitter-auth';
// import { Box, Grid, Link, Typography, Paper } from '@material-ui/core';
import { Container, Divider, Grid, Segment, Image, GridRow } from 'semantic-ui-react'

// import logo from "./logo.svg";
import "./style.css";


const responseGoogle = (response) => {
  console.log(response);
}


class Authenticate extends Component {
  render() {
    return (
      <div className="divAll">
      <Container>
      <Grid centered columns={3} verticalAlign="middle" padded="vertically" >
        {/* <Image className="backStatic" src='..\..\assets\BackStatic.png' size='large' fluid inline /> */}
        <Grid.Column className="mainWindow" verticalAlign="middle">
          <Segment>
            <Image className="appLogo" src='..\..\assets\Static.png' size='large' fluid centered />
            {/* <h1>Static</h1> */}
            <p id="screenName">Admin Console</p>
            <Divider />
            {/* <h3>Login with</h3> */}
            <GridRow className="GRBoss">
            <GoogleLogin
              clientId="620022849430-fbdir66jbe797nvsus66igbffpo9dgfi.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
            </GridRow>
            <GridRow className="GRBoss">
            <TwitterLogin
              loginUrl="http://localhost:4000/api/v1/auth/twitter"
              // onFailure={this.onFailed}
              // onSuccess={this.onSuccess}
              requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
            />
            </GridRow>
            <GridRow className="GRBoss">
            <FacebookLogin
              appId="1088597931155576"
              autoLoad={true}
              fields="name,email,picture"
              size="small"
              // onClick={componentClicked}
              // callback={responseFacebook} 
            />
            </GridRow>

          </Segment>


        </Grid.Column>
      </Grid>
      </Container>
      </div>

      // <Grid container alignItems="center" justify="center">
      //   <Grid item xs={3}>
      //     <Paper>
      //       <GoogleLogin
      //         clientId="620022849430-fbdir66jbe797nvsus66igbffpo9dgfi.apps.googleusercontent.com"
      //         buttonText="Login"
      //         onSuccess={responseGoogle}
      //         onFailure={responseGoogle}
      //         cookiePolicy={'single_host_origin'}
      //       />
      //     </Paper>
      //   </Grid>
      // </Grid>
    );
  }
}

export default Authenticate;