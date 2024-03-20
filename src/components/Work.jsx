import { motion } from "framer-motion";
import React, { useState } from "react";

const Work = () => {
  const [projects, setProjects] = useState([
    {
      heading: "Studio D",
      subheading: "Urban and Landscape Design",
      image:
        "https://a.storyblok.com/f/133769/2409x3000/b5ccf4619b/studio-d-hero.jpg/m/1300x1619/filters:format(webp):quality(70)",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914798702/rendition/720p/file.mp4?loc=external&log_user=0&signature=b76cb0994de6beca7f6ba29e7eb52db1750d34600352dab2566c6ca16fcd817f",
    },
    {
      heading: "Reno & Pelle",
      subheading: "Effortless chic lifestyle",
      image:
        "https://a.storyblok.com/f/133769/2500x3113/78edf86efd/rino-pelle-hero.jpg/m/1300x1619/filters:format(webp):quality(70)",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b",
    },
    {
      heading: " Aebele Interiors",
      subheading: "Luxurious design experience",
      image:
        "https://a.storyblok.com/f/133769/1606x2000/09a30057bd/aebele-interiors-hero.jpg/m/1300x1619/filters:format(webp):quality(70)",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914796979/rendition/540p/file.mp4?loc=external&log_user=0&signature=57ac30ff6fc3b29802f7414617e808395306f0b0fa5c9c6e3ef483a532f49c15",
    },
    {
      heading: " Pixelflakes",
      subheading: "Architectural marketing agency",
      image:
        "https://a.storyblok.com/f/133769/2880x3588/5c50befb8e/pixel-flakes-hero.jpg/m/1300x1620/filters:format(webp):quality(70)",
      video:
        "https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076",
    },
  ]);

  return (
    <section className="bg-white text-black min-h-screen py-20 px-6 md:px-[10vw]">
      <div className=" max-w-screen-2xl mx-auto ">
        <div className="Work__text sm:flex w-full gap-1">
          <div className="basis-4/5 hidden sm:block  my-5 mx-[5vw] overflow-hidden">
            <h1 className="capitalize leading-none font-light sm:text-[8rem] md:text-[10rem] lg:text-[12rem] 2xl:text-[16rem]">
              <motion.span
                className="inline-block h-fit w-fit"
                initial={{ y: "100%", rotate: 20, opacity: 0 }}
                whileInView={{ y: 0, rotate: 0, opacity: 1 }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1,
                }}
                viewport={{ once: true }}
              >
                work
              </motion.span>
            </h1>
          </div>
          <div className="basis-2/5 sm:flex sm:flex-col gap-3 justify-center sm:translate-y-[70%]">
            <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl flex gap-2 items-center capitalize">
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
              <span className="opacity-80">featured project</span>
            </h2>
            <h2 className="capitalize font-light text-[3.5rem] sm:hidden leading-none my-5">
              Work
            </h2>
            <p className="leading-1 text-base sm:text-md lg:text-2xl font-light opacity-80">
              Highlights of cases that we passionately built with
              forward-thinking clients and friends over the years.
            </p>
          </div>
        </div>

        {/* projects */}
        <div className="my-5 flex flex-col gap-5 sm:grid sm:grid-cols-12 sm:gap-y-[11vw]">
          {projects.map((item, idx) => (
            <div
              data-scroll
              data-scroll-speed={
                window.innerWidth > 786 && idx % 2 == 0 ? "-.1" : "0"
              }
              key={idx}
              className={`group sm:self-end 
              ${idx === 0 && "col-start-2 col-end-8"} 
              ${idx === 1 && "col-start-9 col-end-13"} 
              ${idx === 2 && "col-start-2 col-end-5"} 
              ${idx === 3 && "col-start-6 col-end-11"}`}
            >
              <a href="/">
                <div className="relative w-full aspect-[3/4] sm:aspect-[8/9] overflow-hidden bg-zinc-100 ">
                  <video
                    src={item.video}
                    className="absolute top-0 left-0 w-full h-full object-cover object-center"
                    loading="lazy"
                    autoPlay
                    loop
                    muted
                  ></video>
                  <img
                    src={item.image}
                    alt=""
                    className="absolute top-0 left-0 w-full h-full object-cover object-center group-hover:opacity-1 hidden sm:block group-hover:opacity-0 duration-300"
                    loading="lazy"
                  />
                </div>
                <p className="flex flex-col py-2 leading-none text-sm sm:text-[1vw] sm:opacity-0 group-hover:opacity-100 duration-300">
                  <strong>{item.heading}</strong>
                  <span className="opacity-80">{item.subheading}</span>
                </p>
              </a>
            </div>
          ))}
        </div>

        <div className=" text-sm sm:text-lg w-fit sm:w-full mx-auto flex items-center justify-center gap-2 sm:justify-end ">
          <div className="w-[1em] h-[1em] border border-zinc-500 rounded-full"></div>
          <div className="border-b border-zinc-500 "> Browse all work</div>
        </div>
      </div>
    </section>
  );
};

export default Work;
