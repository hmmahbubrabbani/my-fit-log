"use client";
import Image from "next/image";

export default function Banner() {
  const scrollToLibrary = () => {
    const librarySection = document.getElementById("library");
    if (librarySection) {
      librarySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero bg-slate-800 py-16 px-6 lg:px-16 rounded-3xl my-6 container mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between gap-10 w-full">
        {/* Right Side: Banner Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full h-[320px] lg:h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/assets/banner.png"
              alt="Gym Workout Banner"
              fill
              className="object-contain"
            
            />
          </div>
        </div>

        
        <div className="w-full lg:w-1/2 space-y-6">
          <span className="text-sm font-bold tracking-widest text-[#ccff00] uppercase bg-primary/10 py-1 rounded-full">
            WORKOUT LIBRARY
          </span>

          <h1 className="text-3xl lg:text-5xl font-black uppercase tracking-tight leading-none">
            Train with intent. Log<br />
             every set.
          </h1>

          <p className="text-base lg:text-lg text-base-content/80 font-normal">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it<br /> into
            today's plan, and watch the week's work add up.
          </p>

          <div>
            <button
              onClick={scrollToLibrary}
              className="btn bg-[#ccff00] btn-lg rounded-[10px] px-8 text-black font-bold flex items-center gap-2 shadow-lg hover:scale-105 transition-transform">
              <span>BROWSE WORKOUTS</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}