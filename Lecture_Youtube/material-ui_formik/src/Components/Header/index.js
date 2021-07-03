import React from "react";
import { Toolbar, AppBar, Typography } from "@material-ui/core";

const Header = ({}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Submit App with Material-UI, Formik and Yup
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
