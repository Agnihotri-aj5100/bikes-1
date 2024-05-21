import React from "react";
import "./dealSection.css";
import SvgWrapper from "../component/global/svg-wrapper";
import dealimg from "../assest/deal.png";
import glub from "../assest/glub.png";
import torch from '../assest/light.png'
import  bottle  from '../assest/bottle.png'


const DealSection = () => {
  return (
    <div className="container">
      <div className="grid-container1">
        <div className="grid-item">
          <div className="content">
            <div className="title">
              <h1>
                BEST DEALS FOR YOU <SvgWrapper src="vector-red" />
              </h1>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>

            <button className="btn-onimage">
              SHOW MORE <SvgWrapper src="arr" />
            </button>

            <div>

            </div>
          </div>
        </div>
        <div className="grid-item cycle-image">
          <div className="image-section">
            <img src={dealimg} alt="Deal Cycle" />
          </div>
          <div className="detail">
            <h1>Arcadia X1 GT</h1>
            <p>&#8377;24,999</p>
          </div>
        </div>
      </div>

      <div className="grid-container2">
        <div className="grid-item">
          <div className="img1">
            <img src={glub} alt={"Glub Glub"} />
          </div>
          <div className="price-title">
            <h1>Carbonite - Ebike <SvgWrapper src={'Share'}  /></h1>
            <p>&#8377;24,999</p>
          </div>
        </div>
        <div className="grid-item">
          <div className="img1">
            <img src={torch} alt="torch" />
          </div>
          <div className="price-title">
            <h1>Carbonite - Ebike <SvgWrapper src='Share' /> </h1>
            <p>&#8377;24,999</p>
          </div>
        </div>
        <div className="grid-item">
          <div className="img1">
            <img src={bottle} alt="bottle" />
          </div>
          <div className="price-title">
            <h1>Carbonite - Ebike <SvgWrapper src={"Share"} /></h1>
            <p>&#8377;24,999</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealSection;
