import React, { Component } from 'react';
import Slider from "react-slick";
import pic1 from './swiperImg/pic1.jpg';
import pic2 from './swiperImg/pic2.jpg';
import pic3 from './swiperImg/pic3.jpg';
import pic4 from './swiperImg/pic4.jpg';
import pic5 from './swiperImg/pic5.jpg';
import pic6 from './swiperImg/pic6.jpg';
import pic7 from './swiperImg/pic7.jpg';
import Banner from '../component/Banner';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBanner: true,
    }
  }

  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    let { isBanner } = this.state
    return (
      <div>
        { isBanner ? <Banner /> : '' }
        <Slider className="swiper max-width-1440 margin-top-20" {...settings}>
          <div>
            <img className="swiper-item" src={pic1} alt="boomPicture" />
          </div>
          <div>
            <img className="swiper-item" src={pic2} alt="boomPicture" />
          </div>
          <div>
            <img className="swiper-item" src={pic3} alt="boomPicture" />
          </div>
          <div>
            <img className="swiper-item" src={pic4} alt="boomPicture" />
          </div>
          <div>
            <img className="swiper-item" src={pic5} alt="boomPicture" />
          </div>
          <div>
            <img className="swiper-item" src={pic6} alt="boomPicture" />
          </div>
          <div>
            <img className="swiper-item" src={pic7} alt="boomPicture" />
          </div>
        </Slider>
      </div>
    );
  }
}

export default Home;
