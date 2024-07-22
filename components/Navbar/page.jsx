"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import MobileDrawer from "./MobileDrawer"; // Assuming you have MobileDrawer component

const Menu = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About Us", path: "/about" },
  { id: 3, name: "Courses", path: "/courses" },
  { id: 4, name: "Gallery", path: "/gallery" },
  { id: 5, name: "Contact Us", path: "/contact" },
  { id: 6, name: "Blog", path: "/blog" },
];

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-50 backdrop-blur-md shadow-lg mb-0"
          : "bg-gradient-to-tr from-gray-500 to-fuchsia-400"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" passHref>
              <Image
                src="/logo.png"
                alt="Logo"
                width={80}
                height={60}
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex flex-grow justify-end items-center space-x-6">
            {Menu.map((item) => (
              <li
                key={item.id}
                className="hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out"
              >
                <Link href={item.path}>
                  <span className="text-black font-bold hover:text-primary">
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          <div className="md:hidden flex">
            <button
              aria-label="Toggle menu"
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
              onClick={handleDrawerToggle}
            >
              <FontAwesomeIcon
                icon={isDrawerOpen ? faTimes : faBars}
                className="text-2xl"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="md:hidden">
          <div className="flex  flex-col items-center bg-white border-t border-gray-200">
            {Menu.map((item) => (
              <Link key={item.id} href={item.path}>
                <p
                  className=" text-center py-3 text-gray-900 hover:bg-gray-100 border-b border-gray-200"
                  onClick={handleDrawerToggle}
                >
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
