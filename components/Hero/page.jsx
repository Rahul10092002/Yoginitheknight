import React from "react";
// import { Button } from "@/components/ui/button";
import { Component } from "../Carousel";
import { Button } from "flowbite-react";

function Hero() {
  return (
    <section>
      {/* <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-12">
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
      </div> */}
      <section className="relative h-screen">
        {/* Background image with blur effect */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/drmzpmevv/image/upload/v1721496352/kxcu4vx77pgvixriztfm.jpg')",
            filter: "blur(8px)",
          }}
        ></div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center text-white">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Welcome to Yogini
            </h1>
            <strong className="font-extrabold text-3xl m-2 sm:block bg-gradient-to-tr from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              A Joyful Life is Our Right
            </strong>
            <p className="mt-4 sm:text-xl sm:leading-relaxed">
              Namaskar, I welcome you to join me on this journey. I’m a
              “Yogacharyaa”, “Asana, Props and Alignment Specialist” and an
              internationally certified “Sujok Practitioner”
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="block w-full rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring active:bg-indigo-500 sm:w-auto">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Hero;
