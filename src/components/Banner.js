import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            src="https://m.media-amazon.com/images/I/81YSWfTFDbL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/61EmOCMKRxL._SX3000_.jpg"
            alt=""
          />
        </div>

        <div>
          <img
            src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
