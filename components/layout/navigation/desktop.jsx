import Link from "next/link.js";

export function Desktop() {
  return (
    <nav className="hidden lg:block">
      <ul className="flex justify-between gap-6 text-base text-body font-bold">
        <li className="hover:text-primary transition-colors duration-300 ease-in-out">
          <Link href="#">Nos créations</Link>
        </li>
        <li className="hover:text-primary transition-colors duration-300 ease-in-out">
          <Link href="#">Nos Commandes Personnalisées</Link>
        </li>
        <li className="hover:text-primary transition-colors duration-300 ease-in-out">
          <Link href="#">Notre blog</Link>
        </li>
        <li className="hover:text-primary transition-colors duration-300 ease-in-out">
          <Link href="#">Nous contacter</Link>
        </li>
      </ul>
    </nav>
  );
}
