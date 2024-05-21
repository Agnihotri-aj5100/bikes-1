import BAnnerImageSection from "./banner-image-section.jsx";
import FeaturedCollection from "./featured-Collection.jsx";
import CategorySection from "./category-section.jsx";
import DealSection from "./Deal-section.jsx";
import riderSlider from './rider-Slider.jsx'
import LightBanner from "./lightBanner.jsx";

export default {
  "banner-image": { ...BAnnerImageSection },
  "FeauterdCollection": { ...FeaturedCollection },
  'Category-section':{...CategorySection},
  'dealSection':{...DealSection},
  'riderSlider' :{...riderSlider},
  'LightBanner':{...LightBanner}

};
