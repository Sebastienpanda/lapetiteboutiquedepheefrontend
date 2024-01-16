import { Category } from "../components/layout/category.jsx";
import { HeroBanner } from "../components/layout/heroBanner.jsx";
import { SelectionOfMoment } from "../components/layout/selectionOfMoment.jsx";
import { Trust } from "../components/layout/trust.jsx";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <main className="container">
        <Category />
        <SelectionOfMoment />
        <Trust />
      </main>
    </>
  );
}
