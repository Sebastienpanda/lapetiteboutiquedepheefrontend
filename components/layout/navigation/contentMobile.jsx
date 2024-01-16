import { navigation } from "@/navigation.js";
import Link from "next/link.js";

export function ContentMobile({ title, category }) {
  return (
    <div className="flex flex-col justify-center gap-7 px-4">
      <h2 className="text-lg font-bold text-primary-500">{title}</h2>
      <ul className="flex flex-col justify-center gap-4">
        {navigation
          .filter((nav) => {
            return nav.category === `${category}`;
          })
          .map((result, index) => {
            return (
              <li key={index} className="text-base font-normal text-body">
                <Link href={result.pathname}>{result.content}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
