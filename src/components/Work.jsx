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
    <section className="bg-white text-black min-h-screen py-20 px-6">
      <div className=" max-w-screen-2xl mx-auto ">
        <div className="Work__text">
          <h2 className="text-sm flex gap-2 items-center capitalize">
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
          <h1 className="capitalize font-light text-[3.5rem] leading-none my-5">
            Work
          </h1>
          <p className="leading-1 text-base font-light opacity-80">
            Highlights of cases that we passionately built with forward-thinking
            clients and friends over the years.
          </p>
        </div>

        {/* projects */}
        <div className="my-5 flex flex-col gap-5">
          {projects.map((item, idx) => (
            <a key={idx} href="/">
              <div>
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-zinc-100">
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
                    className="absolute top-0 left-0 w-full h-full object-cover object-center hidden sm:block sm:hover:hidden duration-300"
                    loading="lazy"
                  />
                </div>
                <p className="flex flex-col py-2 leading-none text-sm">
                  <strong>{item.heading}</strong>
                  <span className="opacity-80">{item.subheading}</span>
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className=" text-sm border-b border-black w-fit mx-auto">
          Browse all work
        </div>
      </div>
    </section>
  );
};

export default Work;
