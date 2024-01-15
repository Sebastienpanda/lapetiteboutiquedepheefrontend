import Image from "next/image";
import { Button } from "../components/ui/button.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Nous contacter</Button>
    </main>
  );
}
