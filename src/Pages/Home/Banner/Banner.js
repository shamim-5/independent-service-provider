import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner/banner (1).jpg";
import banner2 from "../../../images/banner/banner (2).jpg";
import banner3 from "../../../images/banner/banner (3).jpg";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h3>
              <span>PRESERVE NATURE CONSERVE</span>
              <br />
              <span>WILDLIFE!</span>
            </h3>
            <p>
              Wild Photography intends to spread the love for Wildlife and Nature. See and download amazing wildlife
              pictures, learn wildlife photography and tons of tips to enjoy your wildlife vacation at right cost.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3>
              <span>PRESERVE NATURE CONSERVE</span>
              <br />
              <span>WILDLIFE!</span>
            </h3>
            <p>
              Wild Photography intends to spread the love for Wildlife and Nature. See and download amazing wildlife
              pictures, learn wildlife photography and tons of tips to enjoy your wildlife vacation at right cost.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <h3>
              <span>PRESERVE NATURE CONSERVE</span>
              <br />
              <span>WILDLIFE!</span>
            </h3>
            <p>
              Wild Photography intends to spread the love for Wildlife and Nature. See and download amazing wildlife
              pictures, learn wildlife photography and tons of tips to enjoy your wildlife vacation at right cost.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
