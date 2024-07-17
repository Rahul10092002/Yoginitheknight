"use client";

import { Carousel } from "flowbite-react";

export function Component() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel
        onSlideChange={(index) => console.log("onSlideChange()", index)}
      >
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            alt=""
            src="https://yoginitheknight.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-27-at-19.57.13_59e1af74.jpg"
            className="absolute inset-0 h-full w-full object-cover rounded-xl "
          />
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img
            alt=""
            src="https://yoginitheknight.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-27-at-19.57.11_619b8c42.jpg"
            className="absolute inset-0 h-full w-full object-cover rounded-xl "
          />
        </div>
       
      </Carousel>
    </div>
  );
}
