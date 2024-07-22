import Image from "next/image";
import React from "react";

function About() {
  return (
    <div>
      {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

      <section className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center">
        <Image
          width={400}
          height={300}
          alt=""
          src="https://res.cloudinary.com/drmzpmevv/image/upload/v1721496352/kxcu4vx77pgvixriztfm.jpg"
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px] p-4 shadow-[0px_20px_207px_10px_rgba(249,_40,_249,_0.2)]"
        />
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-black md:text-3xl">
              ABOUT US
            </h2>

            <p className=" text-gray-950 md:mt-4 md:block">
              <span className="block text-xl font-bold mb-2">
                Take Your Yoga to the Next Level
              </span>
              Namaskar! My name is{" "}
              <span className="font-semibold">Sheetal</span>, and this is{" "}
              <span className="font-semibold">YoginiTheKnight</span>, our
              website dedicated to{" "}
              <span className="font-medium">yoga, health, wellness</span>,
              featuring{" "}
              <span className="font-medium">yoga classes and courses</span>.
              <br />
              <br />
              I like to talk about life and am deeply passionate about it.
              <br />
              <br />I am a{" "}
              <span className="font-semibold">certified yoga teacher</span> and
              an{" "}
              <span className="font-semibold">
                internationally certified sujok practitioner
              </span>
              . Additionally, I am a{" "}
              <span className="italic">photographer</span> &{" "}
              <span className="italic">occasional writer</span>.
              <br />
              <br />
              You can find me online in the links below or just send me a
              message to say{" "}
              <span className="font-bold">Namaskar YoginiTheKnight!</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
