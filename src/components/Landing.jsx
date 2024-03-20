import { motion } from "framer-motion";
import React from "react";

const Landing = () => {
  return (
    <section className="relative max-w-screen-2xl mx-auto w-full h-[150vh] md:h-[250vh]">
      <div className="w-full h-full overflow-hidden">
        <img
          data-scroll
          data-scroll-speed="-1"
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/1920x2716/filters:format(webp):quality(70)"
          alt=""
        />
      </div>
      <div className="absolute top-0 w-full h-full px-5 md:px-[7vw]">
        <div className="h-[50vh] md:pb-20 md:h-[100vh] flex flex-col justify-end">
          {[
            "Global digital design studio partnering",
            "with brands and businesses that create",
            "exceptional experiences where people",
            "live, work, and unwind.",
          ].map((item, idx) => (
            <p
              key={idx}
              className="font-light text-md leading-[1.3] md:leading-[1.2] md:text-[1.8vw] overflow-hidden"
            >
              <motion.span
                className="inline-block h-fit w-fit origin-left"
                initial={{ rotate: 45, y: "100%", opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                transition={{
                  duration: 0.65,
                  ease: [1, 0, 0, 1],
                  delay: idx * 0.1,
                }}
              >
                {item}
              </motion.span>
            </p>
          ))}
        </div>
        <div className="heading my-10 sm:mt-[5vw] ">
          {["digital", "design", "experience"].map((item, idx) => (
            <div
              key={idx}
              className="w-fit overflow-hidden -my-[2em] sm:-my-[10vw] "
            >
              <h1 className="text-[3.5rem] tracking-tighter font-light capitalize sm:text-[17vw] sm:tracking-tight ">
                <motion.span
                  className="inline-block h-fit w-fit origin-left"
                  initial={{ rotate: 45, y: "100%", opacity: 0 }}
                  animate={{ rotate: 0, y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.65,
                    ease: [1, 0, 0, 1],
                    delay: 1 + idx * 0.1,
                  }}
                >
                  {item}
                </motion.span>
              </h1>
            </div>
          ))}
        </div>
        <div className="mb-5">
          <p className="font-light text-md leading-[1.3] md:leading-[1.2] md:text-[1.8vw]  sm:w-[45%] sm:mt-[10vw]">
            We help experience-driven companies thrive by making their audience
            feel the refined intricacies of their brand and product in the
            digital space. Unforgettable journeys start with a click.
          </p>
        </div>
        {/* <div className="flex justify-between mt-10">
          <h5 className="text-md font-medium underline">The Studio</h5>
          <div className="flex  gap-20">
            <ul id="nav__links" className="hidden md:flex md:flex-col gap-7">
              {["work", "studio", "news", "contact"].map((item, idx) => (
                <li key={idx} className=" text-base font-medium capitalize">
                  <a href="/">{item}</a>
                </li>
              ))}
            </ul>
            <div>
              <h4 className=" text-base font-medium">hello@expo.com</h4>
              <h4 className=" text-base font-medium">+91 0009099009</h4>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Landing;
