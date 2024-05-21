import React from "react";
import SvgWrapper from "../component/global/svg-wrapper";
import "./lightBanner.css";

const LightBanner = () => {
  return (
    <div className="lightBanner">
      <div className="gif-section">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <div className="details">
          <div className="top-detail">
            <div className="top">
            <p> BECOME AN</p>
            <h1>INSEDER <SvgWrapper src="vector-red" />
            </h1>
            </div>
            <h3>
              Get the latest updates on our new collections and offers at one
              click
            </h3>
            <button>ENTER EMAIL  <SvgWrapper src="arr" /></button>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default LightBanner;
