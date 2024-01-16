import Image from "next/image.js";
import { selectionOfMoment } from "../../selectionOfMoment.js";
import { Button } from "@/components/ui/button.jsx";
import { ShoppingCart } from "lucide-react";
import { Title } from "./title/title.jsx";

export function SelectionOfMoment() {
  return (
    <section className="mt-16 md:mt-28">
      <Title
        title="La sélection du moment"
        subtitle="Découvrez nos sélections du moment"
      />
      <div className="flex gap-8 items-center justify-center flex-wrap mt-8 md:mt-16">
        {selectionOfMoment.map((selection, index) => {
          return (
            <div className="card" key={index}>
              <div>
                <Image
                  className="h-full w-full"
                  src={selection.thumbnail}
                  alt={selection.title}
                  loading="lazy"
                />
              </div>
              <div className="content pt-4">
                <div className="px-4 flex flex-col items-center">
                  <h3 className="text-2xl">{selection.title}</h3>
                  <span className="block mt-4 text-body text-lg">
                    {selection.price}€
                  </span>
                  <Button variant="default" className="mt-4">
                    <ShoppingCart className="mr-2" size={20} />
                    <span className="uppercase text-text-btn">
                      Acheter ce produit
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-16">
        <Button variant="secondary" size="lg" className="uppercase">
          Voir tout les produits
        </Button>
      </div>
    </section>
  );
}
