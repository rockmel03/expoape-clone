import React from "react";

const Landing = () => {
  return (
    <section className="relative max-w-screen-2xl mx-auto w-full h-[200vh] md:h-[250vh]">
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/1280x1811/filters:format(jpeg):quality(70)"
          alt=""
        />
      </div>
      <div className="absolute top-0 w-full h-full px-5 md:px-[7vw]">
        <div className="mt-64 md:mt-[70vh]">
          <p className="font-base text-md leading-[1.3] md:leading-[1] md:text-3xl md:font-medium">
            Global digital design studio partnering
          </p>
          <p className="font-base text-md leading-[1.3] md:leading-[1] md:text-3xl md:font-medium">
            with brands and businesses that create
          </p>
          <p className="font-base text-md leading-[1.3] md:leading-[1] md:text-3xl md:font-medium">
            exceptional experiences where people
          </p>
          <p className="font-base text-md leading-[1.3] md:leading-[1] md:text-3xl md:font-medium">
            {" "}
            live, work, and unwind.{" "}
          </p>
        </div>
        <div className="heading mt-5  mb-20  md:my-20">
          <div>
            <h1 className="text-5xl tracking-tighter leading-[1] font-medium capitalize md:text-[16vw] md:font-light">
              digital
            </h1>
          </div>
          <div>
            <h1 className="text-5xl tracking-tighter leading-[1] font-medium capitalize md:text-[16vw] md:font-light">
              design
            </h1>
          </div>
          <div>
            <h1 className="text-5xl tracking-tighter leading-[1] font-medium capitalize md:text-[16vw] md:font-light">
              experience
            </h1>
          </div>
        </div>
        <div className="mb-5">
          <p className="font-base text-md leading-[1.3] md:leading-[1] md:text-3xl md:font-medium md:w-[40%]">
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
