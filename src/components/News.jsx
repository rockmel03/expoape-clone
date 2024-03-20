import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap, { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const News = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#news",
        top: "0 0",
        // markers: true,
        scrub: 1,
      },
    });

    tl.to(
      "#news__img--top-left",
      {
        x: "-100",
        ease: Power4.easeInOut,
      },
      "a"
    );
    tl.to(
      "#news__img--top-right",
      {
        x: "100",
        ease: Power4.easeInOut,
      },
      "a"
    );
    tl.to(
      "#news__img--bottom-left",
      {
        x: "-100",
        ease: Power4.easeInOut,
      },
      "a"
    );
    tl.to(
      "#news__img--bottom-right",
      {
        x: "100",
        ease: Power4.easeInOut,
      },
      "a"
    );
  });
  return (
    <section id="news" className="overflow-hidden  relative z-10">
      <div className="w-full max-w-screen-2xl mx-auto min-h-screen pb-20 sm:pt-10 bg-white text-black ">
        <div className="relative w-full min-h-[65vh] lg:min-h-screen   flex items-center justify-center">
          <div
            id="news__img--center"
            className=" w-[35%] lg:w-[25%] aspect-[9/16] bg-red-500 overflow-hidden"
          >
            <img
              className="w-full h-full object-cover scale-110"
              src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/550x940/filters:format(webp):quality(70)"
              alt=""
            />
          </div>
          <div
            id="news__img--top-left"
            className=" w-[35%] lg:w-[25%] aspect-video bg-red-400 absolute z-[2] top-[40%] left-[3%] lg:top-[20%] lg:left-[15%] overflow-hidden"
          >
            <video
              className="w-full h-full object-cover scale-110"
              src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
              autoPlay
              loop
              muted
            ></video>
          </div>
          <div
            id="news__img--top-right"
            className=" w-[20%] lg:w-[10%] aspect-[4/5] bg-red-300 absolute z-[2] top-[30%] right-[15%]  lg:top-[15%] lg:right-[30%] overflow-hidden"
          >
            <img
              className="w-full h-full object-cover scale-110"
              src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/550x781/filters:format(webp):quality(70)"
              alt=""
            />
          </div>
          <div
            id="news__img--bottom-left"
            className=" w-[30%] lg:w-[25%] aspect-[7/6] bg-red-200 absolute z-[2] bottom-[10%] left-0 lg:bottom-[-15%] lg:left-[8%] overflow-hidden"
          >
            <img
              className="w-full h-full object-cover scale-110"
              src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/550x369/filters:format(webp):quality(70)"
              alt=""
            />
          </div>
          <div
            id="news__img--bottom-right"
            className=" w-[30%] lg:w-[20%] aspect-[4/5] bg-red-600 absolute z-[2] bottom-[5%] right-0  lg:bottom-[-15%] lg:right-[8%] overflow-hidden"
          >
            <video
              className="w-full h-full object-cover scale-110"
              src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>
        <div className="__text text-center px-10 ">
          <h2 className="text-sm lg:text-xl flex gap-2 items-center justify-center mt-5">
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
          <h1 className="text-6xl lg:text-[8rem] font-light my-10">
            {["Spread", "the News"].map((item, idx) => {
              return (
                <div key={idx} className="h-fit text-center overflow-hidden">
                  <motion.span
                    className="inline-block h-fit w-fit"
                    initial={{ y: "100%", opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.65,
                      ease: [1, 0, 0, 1],
                      delay: idx * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.span>
                </div>
              );
            })}
          </h1>
          <p className="leading-1 text-base lg:text-xl lg:w-[40%] mx-auto font-light opacity-80 my-5 ">
            Highlights of cases that we passionately built with forward-thinking
            clients and friends over the years.
          </p>
          <div className=" text-sm sm:text-lg w-fit sm:w-full mx-auto flex items-center justify-center gap-2 sm:justify-end ">
            <div className="w-[1em] h-[1em] border border-zinc-500 rounded-full"></div>
            <div className="border-b border-zinc-500 "> Browse all work</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
