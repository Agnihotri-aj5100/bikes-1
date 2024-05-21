import React from "react";
import SvgWrapper from "../component/global/svg-wrapper";
import "./CategorySection.css";
const BannerImagesSection = () => {
  // Dummy data for images
  const images = [
    // Replace these URLs with your actual image URLs
    require("../assest/1im.jpg"),
    require("../assest/2im.jpg"),
    require("../assest/3im.jpg"),
    require("../assest/4im.jpg"),
    require("../assest/5im.jpg"),
    require("../assest/6im.jpg"),
    require("../assest/7im.jpg"),
    require("../assest/8im.jpg"),
    require("../assest/9im.jpg"),
    require("../assest/10im.jpg"),
  ];

  return (
    <div className="banner-images-section">
      <h2>ASTRA TRIBE <SvgWrapper src={"vector-red"} /></h2>
      <div className="image-row">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Item ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default BannerImagesSection;
