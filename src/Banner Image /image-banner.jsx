import React from "react";

const BannerImage = ({ src, alt, style, aspectRatio, isMobile }) => {
  const containerStyle = {
    position: 'relative',
    overflow: 'hidden',
    ...style
  };

  const imageStyle = {
    width: '100%',
    height: '100vh',
    maxHeight: '1089px',
    objectFit: 'cover',
    display: 'block',
  };

  // Default aspect ratios
  const defaultAspectRatio = {
    desktop: '16:9',
    mobile: '4:3'
  };

  let aspectRatioText = "";

  if (aspectRatio && isMobile !== undefined) {
    const { desktop = defaultAspectRatio.desktop, mobile = defaultAspectRatio.mobile } = aspectRatio;


    const setAspect = (ratio) => {
      const [width, height] = ratio.split(':').map(parseFloat);
      if (!isNaN(width) && !isNaN(height)) {
        aspectRatioText = `${width}:${height}`;
      }
    };

    if (isMobile) {
      setAspect(mobile);
    } else {
      setAspect(desktop);
    }
  }

  return (
    <div style={containerStyle}>
      <img src={src} alt={alt} style={imageStyle} />
      <p style={{ position: "absolute", bottom: "5px", right: "5px", color: "white", background: "rgba(0, 0, 0, 0.5)", padding: "5px", borderRadius: "5px" }}>{aspectRatioText}</p>
    </div>
  );
};

export default BannerImage;
