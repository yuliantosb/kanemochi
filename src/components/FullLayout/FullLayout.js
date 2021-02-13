import React, { useState } from "react";
import "../FullLayout/FullLayout.css";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
export default function FullLayout({ children }) {
  const [value, setValue] = useState(0);
  const images = [
    require("../../assets/images/p1.jpg"),
    require("../../assets/images/p2.jpg"),
    require("../../assets/images/p3.jpg"),
    require("../../assets/images/p4.jpg"),
    require("../../assets/images/p5.jpg"),
    require("../../assets/images/p6.jpg"),
  ];
  const onChange = (value) => {
    setValue(value);
  };

  return (
    <div className="full-layout">
      <div className="left-content">{children}</div>
      <div className="right-content">
        <div className="content">
          <h2>
            Browse our pre-defined <br /> small shopify tasks
          </h2>
        </div>
        <div className="carousel">
          <div>
            <Carousel value={value} onChange={onChange}>
              {images.map((image, index) => {
                console.log(image);
                return (
                  <img
                    key={index}
                    className="img-carousel"
                    src={image.default}
                  />
                );
              })}
            </Carousel>
            <Dots
              value={value}
              onChange={onChange}
              thumbnails={images.map((image, index) => {
                return (
                  <img
                    key={index}
                    className="img-carousel-thumbnail"
                    src={image.default}
                  />
                );
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
