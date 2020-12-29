import React from "react";

const Slider=()=>
{
    return (
        
    <section className="top-slider-section fullscreen-slider">
        <div className="top-slider-box text-center">
            <div className="owl-wrapper">
                <div className="owl-carousel" data-num="1">
    
                    <div className="item">
                        <div className="news-post image-post">
                            <img src="upload/blog/home5/sl1.jpg" alt=""/>
                            <div className="hover-post">
                                <h2><a href="single-post.html"></a></h2>
                                <ul className="post-tags">
                                </ul>
                            </div>
                        </div>
                    </div>
    
                    <div className="item">
                        <div className="news-post image-post">
                            <img src="upload/blog/home5/sl2.jpg" alt=""/>
                            <div className="hover-post">
                                <h2><a href="single-post.html"></a></h2>
                                <ul className="post-tags">
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    </section>
    
    );
};

export default Slider;