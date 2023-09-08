import React from "react";
import bannerVideo from "../Assets/videos/banner-video.mp4";
import "./Styles/MainBanner.css";
import downArrow from "../Assets/images/down-arrow.png"

function MainBanner() {
  return (
    <>
      <div className="main-banner-container">
        <video
          className="main-banner-video"
          src={bannerVideo}
          autoPlay
          loop
          muted
        ></video>
        <div className="banner-text-container">
          <h1>Unleash your creative muse</h1>
          <h2>Powerful Wireless Headphone</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            repellendus, non iure sed pariatur aliquam delectus, dolorum
            exercitationem recusandae praesentium amet sunt alias accusamus
            ullam incidunt, culpa aperiam? Tempore, cumque.
          </p>
          <button>Learn More</button>
        </div>
        <div className="s-b-c">
          <button>
            <img src={downArrow} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}

export default MainBanner;
