import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BannerImageSection from './sections/banner-image-section';
import Slider from './sections/featured-Collection';
import CategorySection from './sections/category-section';
import DealSection from './sections/Deal-section';
import RiderSlider from './sections/rider-Slider';
import LightBanner from './sections/lightBanner';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App >
      <BannerImageSection />
      <Slider/>
      <CategorySection/>
      <DealSection/>
      <RiderSlider/>      
      <LightBanner />
      

    </App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
