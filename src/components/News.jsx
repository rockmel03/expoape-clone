import React from "react";

const News = () => {
  return (
    <section>
      <div className="w-full max-w-screen-2xl mx-auto min-h-screen pb-20 sm:pt-10 bg-white text-black">
        <div className="relative w-full min-h-[65vh] flex items-center justify-center">
          <div className="w-[35%] aspect-[9/16] bg-red-500 "></div>
          <div className="w-[35%] aspect-video bg-red-400 absolute z-[2] top-[40%] left-[3%] "></div>
          <div className="w-[20%] aspect-[4/5] bg-red-300 absolute z-[2] top-[30%] right-[15%] "></div>
          <div className="w-[30%] aspect-[7/6] bg-red-200 absolute z-[2] bottom-[10%] left-0 "></div>
          <div className="w-[30%] aspect-[4/5] bg-red-600 absolute z-[2] bottom-[5%] right-0 "></div>
        </div>
        <div className="__text text-center px-10 ">
          <h2 className="text-sm flex gap-2 items-center justify-center mt-5">
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
          <h1 className="text-6xl font-light my-10">
            <div>Spread</div>
            <div>the News</div>
          </h1>
          <p className="leading-1 text-base font-light opacity-80 my-5 ">
            Highlights of cases that we passionately built with forward-thinking
            clients and friends over the years.
          </p>
          <div className=" text-sm border-b border-black w-fit mx-auto opacity-80">
            Browse all news
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
