import React from "react";

const PlayReel = () => {
  return (
    <section className="bg-black text-white w-full">
      <div className="relative w-full max-w-screen-2xl h-screen mx-auto flex flex-col items-center justify-between py-[10vh]">
        <h2 className="text-sm flex gap-2 items-center">
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
        <div className=" w-32 aspect-video absolute z-[10] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-zinc-500/20">
          <img
            src=""
            alt=""
            className="w-full h-full object-cover origin-center"
          />
        </div>
        <h1 className="relative z-20 text-5xl flex gap-1 items-center justify-center">
          <div>Play</div>
          <div className="w-[1.5em]">
            <svg
              viewBox="0 0 86 86"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              classNane="icon"
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
          <div>Reel</div>
        </h1>
        <p className="text-center leading-none text-sm">
          Our work is best experienced in motion. Don’t forget to put on your
          headphones.
        </p>
      </div>
    </section>
  );
};

export default PlayReel;
