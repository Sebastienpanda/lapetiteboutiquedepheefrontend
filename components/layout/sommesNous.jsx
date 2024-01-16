import Image from "next/image.js";
import sommeNous from "@/public/assets/images/Qui sommes nous.png";
import { Button } from "@/components/ui/button.jsx";
import { Title } from "./title/title.jsx";

export function SommeNous() {
  return (
    <section className="mt-16 md:mt-28">
      <Title title="Qui sommes nous" subtitle="Découvrez nous" />
      <div className="flex flex-col gap-8 mt-8 justify-center md:flex-row md:gap-16 lg:items-center">
        <div className="lg:w-[500px]">
          <Image
            className="w-full h-full object-cover rounded-lg"
            src={sommeNous}
            priority="true"
            alt="Qui sommes nous"
          />
        </div>
        <div className="md:w-1/2">
          <p className="text-body text-base text-center md:text-left">
            Je suis un passionné du tricot, créant des pièces uniques avec une
            fusion de textures et de couleurs. Mon art du tricot combine
            tradition et modernité, avec une attention minutieuse aux détails
            pour offrir des créations chaleureuses et uniques.
          </p>
          <div className="flex justify-center mt-16 md:justify-start">
            <Button variant="secondary" size="lg">
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
