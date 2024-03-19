import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#070707] text-white overflow-hidden">
      <div className="relative w-full max-w-screen-2xl min-h-[80vh] mx-auto flex items-center justify-center">
        <div className="absolute w-[80vw] -top-10 -right-10 aspect-square overflow-hidden">
          <video
            src="https://www.exoape.com/video/video-6.mp4"
            className="w-full h-full object-contain"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className="relative mx-[8vw] w-full h-full grid grid-cols-10">
          <h2 className="text-6xl font-light col-start-1 col-end-11">
            <div>Our</div>
            <div>Story</div>
          </h2>
          <p className="text-lg my-5 font-light leading-1 col-start-1 col-end-11">
            The story behind Exo Ape is one of exploration, creativity and
            curiosity.
          </p>
          <hr className=" col-start-1 col-end-11 my-5" />
          <ul className=" font-light text-lg col-start-1 col-end-5">
            {["work", "studio", "news", "contact"].map((item, i) => (
              <li key={i} className="capitalize">
                {item}
              </li>
            ))}
          </ul>
          <ul className=" font-light text-lg col-start-6 col-end-11">
            {["behance", "dribble", "twitter", "instagram"].map((item, i) => (
              <li key={i} className="capitalize">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
