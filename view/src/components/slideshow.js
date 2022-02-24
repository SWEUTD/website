// slideshow.js

// creates slideshow component used in the homepage

// code from here: https://reactjsexample.com/a-nice-cities-slider-with-react/

import React from "react";
import classNames from "classnames";

// custom styles for slideshow
import "../styles/slideshow.scss";
import "../styles/slideshow.css";

// photos displayed
import WePhoto from "../assets/SlideshowImages/WE.jpg";
import OfficersPhoto from "../assets/SlideshowImages/Officers.jpg";
import EventPhoto from "../assets/SlideshowImages/Events.jpg";
import EventPhoto2 from "../assets/SlideshowImages/Events2.jpg";
import event1 from "../assets/SlideshowImages/event1.jpg";
import iospic from "../assets/SlideshowImages/iospic.jpg";
import social1 from "../assets/SlideshowImages/social1.jpg";
import social2 from "../assets/SlideshowImages/social2.JPG";
import wee from "../assets/SlideshowImages/wee.jpg";
import we1 from "../assets/SlideshowImages/we1.jpg";
import we2 from "../assets/SlideshowImages/we2.jpg";
import we3 from "../assets/SlideshowImages/we3.jpg";
import we4 from "../assets/SlideshowImages/we4.jpg";
import we5 from "../assets/SlideshowImages/we5.jpg";

// photos and their titles/links
// can add more photos by adding to this array
const slides = [
  {
    title: "Who WE Are",
    img: WePhoto,
    link: "/about",
  },
  {
    title: "Get Involved",
    img: EventPhoto,
    link: "/join",
  },
  {
    title: "Get Involved",
    img: iospic,
    link: "/join",
  },
  {
    title: "Get Involved",
    img: social1,
    link: "/join",
  },
  {
    title: "Get Involved",
    img: social2,
    link: "/join",
  },
  
  {
    title: "Our Events",
    img: EventPhoto2,
    link: "/events",
  },
  {
    title: "Our Events",
    img: event1,
    link: "/events",
  },
  {
    title: "Our Events",
    img: wee,
    link: "/events",
  },
  {
    title: "Our Events",
    img: we1,
    link: "/events",
  },
  {
    title: "Our Events",
    img: we2,
    link: "/events",
  },
  {
    title: "Our Events",
    img: we3,
    link: "/events",
  },
  {
    title: "Our Events",
    img: we4,
    link: "/events",
  },
  {
    title: "Our Events",
    img: we5,
    link: "/events",
  },

  {
    title: "Meet Our Officers",
    img: OfficersPhoto,
    link: "/officers",
  },
];

class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.IMAGE_PARTS = 4;
    this.changeTO = null;
    this.AUTOCHANGE_TIME = 4000;
    this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
  }

  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }

  componentDidMount() {
    this.runAutochangeTO();
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  }

  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
  }

  changeSlides(change) {
    window.clearTimeout(this.changeTO);
    const { length } = slides;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }

  render() {
    const { activeSlide, prevSlide, sliderReady } = this.state;
    return (
      <div className={classNames("slider", { "s--ready": sliderReady })}>
        <p className="slider__top-heading">
          Society of Women Engineers UT-Dallas
        </p>
        <div className="slider__slides">
          {slides.map((slide, index) => (
            <div
              className={classNames("slider__slide", {
                "s--active": activeSlide === index,
                "s--prev": prevSlide === index,
              })}
              key={slide.title}
            >
              <div className="slider__slide-content">
                <h2 className="slider__slide-subheading">
                  <a href={slide.link}>
                    {slide.title.split("").map((l) => (
                      <span>{l}</span>
                    ))}
                  </a>
                </h2>
              </div>
              <div className="slider__slide-parts">
                {[...Array(this.IMAGE_PARTS).fill()].map((x, i) => (
                  <div className="slider__slide-part" key={i}>
                    <div
                      className="slider__slide-part-inner"
                      style={{ backgroundImage: `url(${slide.img})` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          className="slider__control"
          onClick={() => this.changeSlides(-1)}
        />
        <div
          className="slider__control slider__control--right"
          onClick={() => this.changeSlides(1)}
        />
      </div>
    );
  }
}
export default Slideshow;
