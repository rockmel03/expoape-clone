import { useGSAP } from "@gsap/react";
import gsap, { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const PlayReel = () => {
  const videoDiv = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        top: "0 0",
        trigger: "#pin__play-reel",
        pin: true,
        scrub: 1,
        // markers: true,
      },
    });

    tl.to(
      "#play-reel__video-center",
      {
        scale: 5.5,
        ease: "linear",
      },
      "a"
    );
    tl.from(
      "#play-reel__play",
      {
        x: "-100%",
        ease: "linear",
      },
      "a"
    );
    tl.from(
      "#play-reel__reel",
      {
        x: "100%",
        ease: "linear",
      },
      "a"
    );
    tl.from(
      "#play-reel__playBtn",
      {
        opacity: 0,
        ease: "linear",
      },
      "a"
    );
  });

  return (
    <section
      id="pin__play-reel"
      className="bg-black text-white w-full relative overflow-hidden"
    >
      {/* video here ---- */}
      <div
        id="play-reel__video-center"
        className=" w-32 lg:w-80 aspect-video sm:aspect-[10/16] md:aspect-video absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-zinc-500/20"
      >
        <video
          src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"
          className="w-full h-full object-cover origin-center"
          autoPlay
          muted
          loop
        ></video>
      </div>

      <div className="relative w-full max-w-screen-2xl h-screen mx-auto flex flex-col items-center justify-between py-[10vh] lg:py-10 bg-zinc-900/30">
        <h2 className="text-sm lg:text-lg flex gap-2 items-center">
          <div className="w-[1em]">
            <svg
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
            >
              <path
                d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <span className="opacity-80">Work in motion</span>
        </h2>

        <h1 className="relative z-20 font-light text-5xl lg:text-[10rem] flex gap-3 sm:gap-5 lg:gap-10 items-center justify-center">
          <div id="play-reel__play">Play</div>
          <div
            id="play-reel__playBtn"
            className="w-[1.5em] lg:w-[.8em] sm:hidden"
          >
            <svg
              viewBox="0 0 86 86"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
            >
              <circle
                opacity="0.4"
                cx="43"
                cy="43"
                r="41"
                stroke="currentColor"
              ></circle>
              <path d="M41 38V48L49.1818 43L41 38Z" fill="currentColor"></path>
            </svg>
          </div>
          <div id="play-reel__reel">Reel</div>
        </h1>
        <p className="text-center leading-none text-sm lg:text-lg lg:w-[25%]">
          Our work is best experienced in motion. Don’t forget to put on your
          headphones.
        </p>
      </div>
    </section>
  );
};

export default PlayReel;
