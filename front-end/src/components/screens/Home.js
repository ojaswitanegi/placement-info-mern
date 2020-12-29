import React from 'react';
import Header from "../parts/Header";
import Slider from "../parts/Slider";
import TrendingPosts from "../parts/TrendingPosts";
import Footer from "../parts/Footer";

const Home=()=>{
    return ( 
    <>
        <Header/>
       <Slider/>
       <TrendingPosts/>
        <Footer/>    
    </>
    );
};

export default Home;
