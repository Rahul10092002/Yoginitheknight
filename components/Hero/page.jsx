import React from "react";
// import { Button } from "@/components/ui/button";
import { Component } from "../Carousel";
import { Button } from "flowbite-react";

function Hero() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-12">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-col justify-center text-center ">
            <p className=" text-slate-100 text-xl sm:text-left">
              A Joyful Life is Our Right
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl tracking-wide sm:text-left">
              Start Healing Your <br /> Mind, Body & Be <br /> Real
            </h2>

            <p className="mt-4 text-slate-100 sm:text-left">
              Namaskar, I welcome you to join me on this journey. I’m a
              “Yogacharyaa”, “Asana, Props and Alignment Specialist” and an
              internationally certified “Sujok Practitioner”
            </p>

            <Button className="mt-10 w-fit mx-auto sm:mx-0">Get Started</Button>
          </div>
          <div className="relative h-64 overflow-hidden  sm:h-80 lg:order-last lg:h-full">
            <Component />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
