import React from "react";

const Footer = () => {
  return (
    <footer
      data-scroll
      data-scroll-speed="-.5"
      className="w-full bg-[#070707] text-[#E0CCBB] overflow-hidden relative z-0"
    >
      <div className="relative w-full max-w-screen-2xl min-h-[80vh] lg:min-h-screen mx-auto flex items-center justify-center">
        <div className="absolute w-[80vw] -top-10 -right-10 aspect-square overflow-hidden lg:top-[-60%] lg:right-[-10%]">
          <video
            src="https://www.exoape.com/video/video-6.mp4"
            className="w-full h-full object-contain"
            autoPlay
            muted
            loop
          ></video>
        </div>
        <div className="relative mx-[8vw] w-full h-full grid grid-cols-10">
          <h2 className="text-6xl lg:text-[10rem] font-light col-start-1 col-end-11">
            <div>Our</div>
            <div>Story</div>
          </h2>
          <p className="text-lg lg:text-[2rem] my-5 lg:my-10 font-light leading-1 leading-[1.3] col-start-1 col-end-11 lg:col-end-5">
            The story behind Exo Ape is one of exploration, creativity and
            curiosity.
          </p>
          <hr className=" col-start-1 col-end-11 my-5" />
          <ul className=" hidden lg:block text-lg lg:text-xl lg:col-start-1 lg:col-end-4">
            {[
              "Willem II Singel 8",
              "6041 HS, Roermond",
              "The Netherlands",
              "hello@exoape.com",
            ].map((item, i) => (
              <li key={i} className="capitalize">
                {item}
              </li>
            ))}
          </ul>
          <ul className=" font-light text-lg lg:text-xl col-start-1 lg:col-start-4 col-end-5 lg:col-end-5">
            {["work", "studio", "news", "contact"].map((item, i) => (
              <li key={i} className="capitalize">
                {item}
              </li>
            ))}
          </ul>
          <ul className=" font-light text-lg lg:text-xl col-start-6 lg:col-start-6 col-end-11 lg:col-end-9">
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
