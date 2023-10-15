import Carousel from "./Carousel";
import { carouselData } from "../data/data";
function Hero() {
  return (
    <div className="hero">
      <Carousel data={carouselData} />
    </div>
  );
}

export default Hero;
