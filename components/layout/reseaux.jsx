import Image from "next/image.js";
import Link from "next/link.js";
import pinterest from "@/public/assets/icons/pinterest.svg";
import facebook from "@/public/assets/icons/facebook.svg";
import instagram from "@/public/assets/icons/instagram.svg";
import { Title } from "./title/title.jsx";

export function Reseaux() {
  return (
    <section className="mt-28">
      <Title
        title="Suivez,aimez,partager"
        subtitle="Retrouvez nous sur les réseaux"
      />
      <div className="flex flex-row justify-center gap-6 mt-7">
        <div>
          <Link href="#" target="_blank">
            <Image
              src={pinterest}
              className="w-full h-full"
              alt="Logo de Pinterest"
              loading="lazy"
            />
          </Link>
        </div>
        <div>
          <Link href="#" target="_blank">
            <Image
              src={instagram}
              className="w-full h-full"
              alt="Logo d'Instagram"
              loading="lazy"
            />
          </Link>
        </div>
        <div>
          <Link href="#" target="_blank">
            <Image
              src={facebook}
              className="w-full h-full"
              alt="Logo de Facebook"
              loading="lazy"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
