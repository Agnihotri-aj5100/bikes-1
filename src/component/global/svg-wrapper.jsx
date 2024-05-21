import React from "react";

const SvgWrapper = ({ src, onClick,className }) => {
  const svgPath = require(`../../assest/${src}.svg`);
  const handleClick = () => {
    // Call the onClick function if it exists
    if (onClick) {
      onClick();
    }
  };
  return <img src={svgPath}  alt="" onClick={handleClick} className={className}/>;
};

export default SvgWrapper;
