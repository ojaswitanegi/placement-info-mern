import React from 'react';
import Header from "./parts/Header";
import Footer from "./parts/Footer";
import PostList from "./PostList";
import Breadcrumb from "./parts/Breadcrumb";

import '../App.css'
import {Provider} from "react-redux"
import { store } from "../actions/store";
import { Container, AppBar } from "@material-ui/core";
import ButterToast,{ POS_RIGHT,POS_TOP } from "butter-toast";


const Category=()=>{
    return ( 
        <>
        <Header/>
        <Breadcrumb/>
        <section className="blog-section">
			<div className="container">
				<div className="row">
                <Provider store={store}>
              <Container maxWidth="lg">
                <AppBar position="static" color="inherit">
                </AppBar>
                      <PostList/>
                      <ButterToast position={{vertical:POS_TOP,horizontal:POS_RIGHT}}/>
                </Container>
            </Provider>    
			    </div>
            </div>
        </section>
        <Footer/>
        </>
    
    );
};

export default Category;

