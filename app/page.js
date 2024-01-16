import { Category } from "../components/layout/category.jsx";
import { HeroBanner } from "../components/layout/heroBanner.jsx";
import { Reseaux } from "../components/layout/reseaux.jsx";
import { SelectionOfMoment } from "../components/layout/selectionOfMoment.jsx";
import { Articles } from "../components/layout/slider/articles.jsx";
import { SommeNous } from "../components/layout/sommesNous.jsx";
import { Trust } from "../components/layout/trust.jsx";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <main className="container">
        <Category />
        <SelectionOfMoment />
        <Trust />
        <SommeNous />
        <Articles />
        <Reseaux />
      </main>
    </>
  );
}
