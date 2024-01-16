import Image from "next/image.js";
import logo from "@/public/assets/images/logo.png";
import { Navigation } from "./navigation.jsx";

export function Footer() {
  return (
    <footer className="mt-24 bg-[#E7E7E7]">
      <div className="pt-16 lg:flex lg:items-center lg:justify-around">
        <div className="w-[174px] h-[174px] mx-auto lg:mx-0">
          <Image
            src={logo}
            alt="Logo de La Petite Boutique D'Ephée"
            loading="lazy"
            className="w-full h-full"
          />
        </div>
        <nav className="mt-16 flex flex-col gap-8 lg:flex-row lg:items-start">
          <Navigation title="Navigation" category="navigation" />
          <Navigation title="Mon Compte" category="compte" />
          <Navigation title="Informations" category="informations" />
        </nav>
      </div>
      <div className="mt-16 pb-8">
        <p className="text-body text-base font-medium text-center">
          © La Petite Boutique D’Ephée - 2024
        </p>
      </div>
    </footer>
  );
}
