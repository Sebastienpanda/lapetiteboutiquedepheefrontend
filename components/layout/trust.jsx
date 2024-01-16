import { CreditCard, HeartHandshake, Truck } from "lucide-react";

export function Trust() {
  return (
    <section className="mt-16 md:mt-28">
      <div className="flex flex-wrap gap-8 md:justify-around lg:gap-0 lg:w-[82%] lg:mx-auto lg:justify-between">
        <div className="flex gap-8 md:w-[47%] lg:w-[30%]">
          <Truck size={32} color="#5a7354" />
          <div className="flex flex-col gap-2 flex-1">
            <h3 className="text-lg text-heading">Expédition gratuit</h3>
            <p className="text-base">
              Livraison gratuite pour toutes les commandes passées en France
              pour un montant de 50 euros
            </p>
          </div>
        </div>
        <div className="flex gap-8 md:w-[47%] lg:w-[30%]">
          <HeartHandshake size={32} color="#5a7354" />
          <div className="flex flex-col gap-2 flex-1">
            <h3 className="text-lg text-heading">100% Fait main</h3>
            <p className="text-base">
              Garantie d’un travail artisanal à la main pour une meilleur
              qualité
            </p>
          </div>
        </div>
        <div className="flex gap-8 md:w-[47%] lg:w-[30%]">
          <CreditCard size={32} color="#5a7354" />
          <div className="flex flex-col gap-2 flex-1">
            <h3 className="text-lg  text-heading">Paiement Sécurisé</h3>
            <p className="text-base ">
              Tous les paiements sont sécurisés et fiables
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
