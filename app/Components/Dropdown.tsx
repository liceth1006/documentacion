"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Dropdown() {
  const pathname = usePathname();

  return (
    <div>
      <ul>
        <li className="pb-2 mb-3">
          <Link
            href="/Overview"
            className={`p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-200 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5  bg-highlight link ${
              pathname === "/Overview" ? "bg-sky-200" : ""
            }`}
          >
            <div>Descripción general</div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
