"use client";

import Image from "next/image.js";
import logo from "@/public/assets/images/logo.png";
import { Button } from "@/components/ui/button";
import { Mobile } from "./navigation/mobile.jsx";
import { Desktop } from "./navigation/desktop.jsx";
import { User } from "lucide-react";

export function Header() {
  return (
    <header className="bg-background pt-2 pb-6 relative">
      <div className="sm:container flex justify-between items-center">
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
        <Desktop />
        <Button className="hidden lg:inline-flex">
          <User size={20} className="mr-4" />
          Connexion
        </Button>
      </div>
    </header>
  );
}
