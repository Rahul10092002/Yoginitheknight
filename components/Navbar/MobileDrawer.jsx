import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const MobileDrawer = ({ isOpen, onClose, menu }) => {
  return (
    <div
      className={`fixed flex flex-col justify-center items-center mt-10 mr-9 p-5 z-10 top-0 right-0  text-black transition-transform duration-300 transform roundedxl bg-stone-500 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100 ${
        isOpen ? "translate-x-0" : "hidden"
      }`}
    >
      <ul className="flex flex-col ml-5 justify-center items-center space-y-4">
        {menu.map((item) => (
          <li
            key={item.id}
            className="text-3xl hover:text-blue-900 hover:font-semibold"
          >
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileDrawer;
