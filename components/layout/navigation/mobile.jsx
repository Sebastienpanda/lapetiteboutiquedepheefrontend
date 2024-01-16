"use client";

import Image from "next/image.js";
import Link from "next/link.js";
import { useEffect, useRef, useState } from "react";
import logo from "../../../public/assets/images/logo.png";
import { usePathname } from "next/navigation.js";
import { navigation } from "@/navigation.js";
import { ContentMobile } from "./contentMobile.jsx";

export function Mobile() {
  const [isOpen, setIsOpen] = useState(false);
  const backgroundRef = useRef(null);
  const bodyRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const background = (backgroundRef.current =
      document.querySelector("#background"));
    const body = (bodyRef.current = document.querySelector("body"));

    if (background && body) {
      if (isOpen) {
        background.classList.add("active");
        body.classList.add("no-scroll");
      } else {
        background.classList.remove("active");
        body.classList.remove("no-scroll");
      }
    }

    return () => {
      if (background && body) {
        background.classList.remove("active");
        body.classList.remove("no-scroll");
      }
    };
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        onClick={handleClick}
        className="flex justify-center items-center flex-col hover:bg-gray-200 transition-colors duration-300 ease-in-out cursor-pointer p-3 rounded-md relative z-[2] lg:hidden"
      >
        <span
          className={`bg-primary-500 block transition-transform duration-300 ease-in-out 
                    h-1 w-9 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-2" : "-translate-y-0.5"
                    }`}
        ></span>
        <span
          className={`bg-primary-500  block transition-opacity duration-300 ease-in-out 
                    h-1 w-9 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
        ></span>
        <span
          className={`bg-primary-500  block transition-transform duration-300 ease-in-out 
                    h-1 w-9 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
        ></span>
      </div>
      <div
        onClick={handleClick}
        id="background"
        className="background cursor-pointer"
      ></div>
      <nav
        id="nav"
        className={`flex-col gap-8 flex pb-32 navigation ${
          isOpen ? "active lg:hidden" : "lg:hidden"
        }`}
      >
        <div className="img">
          <Link href="#">
            <Image
              src={logo}
              width="124"
              height="124"
              priority="true"
              alt="Logo de La Petite Boutique D'Ephée"
            />
          </Link>
        </div>
        <ContentMobile title="Navigation" category="navigation" />
        <ContentMobile title="Mon Compte" category="compte" />
        <ContentMobile title="Informations" category="informations" />
        <div className="pl-3">
          <div className="flex flex-row justify-center gap-6 mt-7">
            <div>
              <Link href="#" target="_blank"></Link>
            </div>
            <div>
              <Link href="#" target="_blank"></Link>
            </div>
            <div>
              <Link href="#" target="_blank"></Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
