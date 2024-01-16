import laineBackground from "@/public/assets/images/background-laines.jpg";
import Image from "next/image.js";
import { Button } from "@/components/ui/button.jsx";

export function HeroBanner() {
  return (
    <section>
      <div className="relative 320:h-80 h-[407px]">
        <Image
          src={laineBackground}
          alt="Image HeroBanner"
          priority="true"
          className="w-full h-full object-cover"
        />
        <div className="absolute w-full 320:px-4 top-1/2 left-1/2 388:container -translate-y-1/2 -translate-x-1/2 md:text-center lg:text-left">
          <h1 className="text-3xl text-heading lg:text-6xl sm:text-center lg:text-left">
            La Petite Boutique D'Ephée
          </h1>
          <p className="text-base text-body mt-7 sm:w-[60%] sm:text-center sm:mx-auto lg:ml-0 lg:text-left">
            Marie, crée des trésors uniques : produits faits main avec laine et
            pâte Fimo. Des créations authentiques, mêlant originalité et qualité
            artisanale.
          </p>
          <div className="mt-16 flex justify-between gap-8 flex-wrap 320:mt-8 sm:justify-center lg:justify-start">
            <Button className="uppercase">Nos produits</Button>
            <Button className="uppercase 320:hidden 388:inline-flex">
              A propos de nous
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
