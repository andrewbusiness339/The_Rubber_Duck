import React, { Component } from 'react'
import AwesomeSwiper from 'react-awesome-swiper';
import './index.css'
const config = {
    loop : true,
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
    // Disable preloading of all images
    preloadImages: false,
    // Enable lazy loading
    lazy: true,
    slidesPerView: 6,
    spaceBetween: 30
  };

class Introduction extends Component {
    render() {
        return (
            <div className="introduction pt-40 pb-5" >
               <div className="w-container">
                   <h1 id="aboutSection" className="section-heading">Welcome Hooman</h1>
                   <p className="paragraph-5 text-white">The KittyButts are a collection of 10,000 sassy cats living on the Ethereum Blockchain.<br />This is the first generation. They will give birth to the next...</p>
                </div>
                <AwesomeSwiper config={config} className="mt-12">
                    <div className="swiper-wrapper">
                        {
                            [0, 1, 2, 3, 4, 5, 6].map(i => (
                                <div key={i} className="swiper-slide">
                                    <img src={`/images/cat${i + 1}.jpeg`}/>
                                </div>
                            ))
                        }
                       
                    </div>
                </AwesomeSwiper>
                <div className="d-block mt-10">
                    <hr />
                </div>
               
            </div>
        )
    }
}

export default Introduction