import React from "react";
import BannerImage from "../Banner Image /image-banner";
import desktopImage from "../../src/assest/desktopImage.gif";
import mobileImge from "../../src/assest/mb-cycle.gif";
import "./Banner.css";
import { useState, useEffect } from "react";
import SvgWrapper from "../component/global/svg-wrapper";

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="banner-container">
      <BannerImage
        src={isMobile ? mobileImge : desktopImage}
        aspectRatio={{ mobile: "360:736", desktop: "1920:800" }}
        isMobile={isMobile}
      />

      <div className="text-on-image">
        <div className="text">
          <p> BUILT FOR URBAN ADVENTURES & BEYOND</p>
        </div>
        <div className="btn-container">
          <button className="btn-onimage">
            EXPLORE <SvgWrapper src="arr" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
