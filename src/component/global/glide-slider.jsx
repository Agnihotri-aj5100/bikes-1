import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import star from "../../assest/star.png";
import SvgWrapper from "./svg-wrapper";

const Slider = ({ slides }) => {
  useEffect(() => {
    const glide = new Glide(".glide", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      gap: 0,
      hoverpause: true,
    });

    glide.mount();

    return () => glide.destroy();
  }, []);

  return (
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {slides.map((slide, index) => (
            <li className="glide__slide" key={index}>
              <div className="img-box">
                <img src={slide.image} alt={`Slide ${index + 1}`} />
              </div>
              <div className="detail-box">
                <div className="detail-content">
                  <div className="str-head">
                    <div className="stars">
                      {[...Array(slide.star)].map((item, itemIndex) => {
                        return <img src={star} alt="star" key={itemIndex} />;
                      })}
                    </div>
                    <h2>{slide.heading}</h2>
                  </div>
                  <p>{slide.paragraph}</p>
                </div>
                <div className="horizontal-row"></div>
                <div className="image-circle">
                  <img src={slide.circleImage} alt={`Circle  ${index + 1}`} />
                  <div className="bio">
                    <h2>{slide.name}</h2>
                    <p>{slide.circleText}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--prev" data-glide-dir="<">
          <SvgWrapper src="left" />
        </button>
        <button className="glide__arrow glide__arrow--next" data-glide-dir=">">
          <SvgWrapper src="right" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
