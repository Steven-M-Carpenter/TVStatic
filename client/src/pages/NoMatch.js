import React from "react";
// import { spacing } from '@material-ui/system';
// import { Box, Grid, Link, Typography } from '@material-ui/core';
import { Container, Divider, Grid } from 'semantic-ui-react'


function NoMatch() {
  return (
    <Grid centered columns={2} verticalAlign="middle" padded="vertically">
      <Grid.Column verticalAlign="middle" stretched>
        <Container textAlign="center">
          <h2>404 Page Not Found</h2>
          <Divider />
          <a href="/">Return to the home page</a>
        </Container>
      </Grid.Column>
    </Grid>
    // <div>
    //   <Grid container>

    //     <Grid item xs={12}>
    //       <Box mt={2} mb={2} ml={2}>
    //         <Typography variant="h3" align='left'>
    //           404 Page Not Found
    //         </Typography>
    //       </Box>
    //     </Grid>

    //     <Grid item justify='center'>
    //       <Box mt={2} ml={2}>
    //           <Link href="/" align="center">
    //             Return to the home page.
    //           </Link>
    //       </Box>
    //     </Grid>

    //   </Grid>
    // </div >
  );
}

export default NoMatch;
