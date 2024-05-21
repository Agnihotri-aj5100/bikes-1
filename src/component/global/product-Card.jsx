import React from 'react';

const ProductCard = ({ image, title, description }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;