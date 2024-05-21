import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from './product-Card';
import SvgWrapper from './svg-wrapper';

const GlideSlider = ({ slides }) => {
  const customPrevArrow = (
      <SvgWrapper src='left' className='leftArrow' />
  );

  const customNextArrow = ( 
      <SvgWrapper src='right' className='rightArrow' />
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5, // Show one slide and half of another slide
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1, // Show one slide and half of another slide
        }
      }
    ],
    prevArrow: customPrevArrow,
    nextArrow: customNextArrow,
    slideWidth: 300, // Set the width of each slide to 300px
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <ProductCard
            image={slide.image}
            title={slide.title}
            description={slide.description}
          />
        </div>
      ))}
    </Slider>
  );
};

export default GlideSlider;
