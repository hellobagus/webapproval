import React, { useEffect } from "react";
import { Router, Route, Switch, Redirect, Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset
} from '@chakra-ui/core';
import  ThemeToggler  from '../theme/ThemeToggler';


import { history } from "../helpers";
import { alertActions } from "../actions";
import { PrivateRoute} from "../components";
import { HomePage } from "../HomePage";
import { LoginPage } from "../LoginPage";
import { ApprovalPage } from "../ApprovalPage"

import "./App.css"
import { DetailPage } from "../Detail";
import { ViewDetail } from "../viewDetail";

function App(props) {
  const user = useSelector((state) => state.authentication.user);
  const menu = useSelector((state) => state.menuApprove);
  const users = useSelector((state) => state.empList);



  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
      <CSSReset />
        <ThemeToggler />
        
        <Router history={history}>
          <Switch>
            <PrivateRoute exact path="/" component={HomePage} user={user} />
            <Route  path="/menu" component={ApprovalPage}  user={user} />
            <Route  path="/detail" component={DetailPage}  user={user}/>
            <Route  path="/viewdetail" component={ViewDetail}  user={user}/>
            <Route path="/login" component={LoginPage} />
          

            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export { App };
