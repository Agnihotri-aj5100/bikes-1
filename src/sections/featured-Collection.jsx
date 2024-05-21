import React from "react";
import SweeperSlider from "../component/global/sweeper-slider";
import "./feature.css";
import SvgWrapper from "../component/global/svg-wrapper";

// Define your new component
const FeaturedCollection = () => {
  // Prepare slide content

  const slides = [
    {
      image: require("../assest/cycle1.jpg"),
      title: "Product 1",
      description: "Description for Product 1",
    },
    {
      image: require("../assest/cycle2.jpg"),
      title: "Product 2",
      description: "Description for Product 2",
    },
    {
      image: require("../assest/cycle3.jpg"),
      title: "Product 3",
      description: "Description for Product 3",
    },
    {
      image: require("../assest/cycle4.jpg"),
      title: "Product 1",
      description: "Description for Product 1",
    },
    {
      image: require("../assest/cycle5.jpg"),
      title: "Product 2",
      description: "Description for Product 2",
    },
    {
      image: require("../assest/cycle3.jpg"),
      title: "Product 3",
      description: "Description for Product 3",
    },
    {
      image: require("../assest/cycle4.jpg"),
      title: "Product 1",
      description: "Description for Product 1",
    },
    {
      image: require("../assest/cycle5.jpg"),
      title: "Product 2",
      description: "Description for Product 2",
    },

    // Add more slides as needed
  ];

  // Render the component
  return (
    <>
      <div className="collection">
        <h2>
          CATEGORIES <SvgWrapper src="vector-red" />
        </h2>
        <div className="sweeper-slider-container">
          <SweeperSlider slides={slides} className="custom-slider" />
        </div>
      </div>
    </>
  );
};

export default FeaturedCollection;
