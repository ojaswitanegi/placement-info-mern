import React from 'react';
import Home from "./components/screens/Home";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Category from "./components/Category";
import NotFound from "./components/screens/NotFound";
import Adminlogin from "./components/Adminlogin";
import PostMessages from './components/PostMessages';
import Header from "./components/parts/Header";

//Second mern app
import './App.css'
import {Provider} from "react-redux"
import { store } from "./actions/store";
import { Container, AppBar, Typography } from "@material-ui/core";
import ButterToast,{ POS_RIGHT,POS_TOP } from "butter-toast";

//Login-Formik
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return( <BrowserRouter>

      <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path="/category">
        <Category/>
      </Route>
      <Route path="/adminlogin">
        <Header/>
        <Adminlogin/>
      </Route>
   
      <Route path="/changeroutelater"> 
      <Header/>
           <Provider store={store}>
              <Container maxWidth="lg">
                <AppBar position="static" color="inherit">
                  <Typography
                      variant="h4"
                      align="center">
                      Placement Information Dashboard
                  </Typography>
                </AppBar>
                      <PostMessages />
                      <ButterToast position={{vertical:POS_TOP,horizontal:POS_RIGHT}}/>
                </Container>
            </Provider>       
      </Route>

      <Route path="*">
        <NotFound/>
      </Route>
      </Switch>

      

  </BrowserRouter>
  );
}

export default App;
