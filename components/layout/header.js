"use client";

import Image from "next/image.js";
import logo from "../../public/assets/images/logo.png";
import { Button } from "../ui/button.jsx";
import { useRef, useState } from "react";
import { Mobile } from "./navigation/mobile.jsx";

export function Header() {
  return (
    <header className="bg-background pt-2 pb-6 relative">
      <div className="container flex justify-between items-center pl-0 xl:pl-16">
        <div>
          <Image
            src={logo}
            width="124"
            height="124"
            alt="Logo de La Petite Boutique D'Ephée"
            priority="true"
          />
        </div>
        <Mobile />
      </div>
    </header>
  );
}
