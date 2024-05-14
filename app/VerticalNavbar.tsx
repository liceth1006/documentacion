"use client";
import Link from "next/link";
import Dropdow from "../app/Components/Dropdown"
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function VerticalNavbar() {

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };
 
  return (
    <div className="lg: -mt-16 z-10 pt-16">
      <div className="sticky top-[121px] hidden h-[calc(100vh-121px)] w-[284px] md:flex md:shrink-0 md:flex-col md:justify-between">
        <div className="overflow-y-scroll no-bg-scrollbar lg:w-[324px] grow bg-wash dark:bg-wash-dark ">
          <aside className="lg:grow flex-col w-full pb-8 lg:pb-0 lg:max-w-custom-xs z-10 hidden lg:block">
            <nav className="w-full pt-6 scrolling-touch lg:h-auto grow pe-0 lg:pe-5 lg:pb-16 md:pt-4 lg:pt-4 scrolling-gpu">
              <ul>
                <li className="pb-2 mb-3 ">

                  <Link
                    href="/Overview"
                    className={`p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-200 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5  bg-highlight link ${
                      pathname === "/Overview" ? "bg-sky-200" : ""
                    }`}
                  >
                    <div>Descripción general</div>
                  </Link>
                 
                </li>
                <li className="pb-2 mb-3">
                        <Link
                          href="/Poo"
                         
                          className={`p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-200 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5  bg-highlight link ${
                            pathname === "/Poo" ? "bg-sky-200" : ""
                          }`}
                        >
                          <div  onClick={toggleDropdown}>Introducción a la POO</div>
                        </Link>
                      </li>

                  {isOpen && (
                  <div className="w-full pt-6 scrolling-touch lg:h-auto grow pe-0   md:pt-4 lg:pt-4 ">
                    <ul>
                      <li className="pb-2 mb-3">
                        <Link
                          href="/FrontEndReact"
                          className={`p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-200 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5  bg-highlight link ${
                            pathname === "/FrontEndReact" ? "bg-sky-200" : ""
                          }`}
                        >
                          <div>Principios de POO</div>
                        </Link>
                      </li>
                      <li className="pb-2 mb-3">
                        <Link
                          href="/FrontEndReact"
                          className={`p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-200 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5  bg-highlight link ${
                            pathname === "/FrontEndReact" ? "bg-sky-200" : ""
                          }`}
                        >
                          <div>Implementación de POO</div>
                        </Link>
                      </li>
                      <li className="pb-2 mb-3">
                        <Link
                          href="/FrontEndReact"
                          className={`p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-200 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5  bg-highlight link ${
                            pathname === "/FrontEndReact" ? "bg-sky-200" : ""
                          }`}
                        >
                          <div>Implementación de POO</div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  )}
              
                <li className="pb-2 mb-3">
                  <Link
                    href="/DataStructure"
                    className={`p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-200 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5  bg-highlight link ${
                      pathname === "/DataStructure" ? "bg-sky-200" : ""
                    }`}
                  >
                    <div>Estructura de datos y algoritmos</div>
                  </Link>
                </li>
                <li className="pb-2 mb-3">
                  <Link
                    href="/FrontEndReact"
                    className={`p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-200 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5  bg-highlight link ${
                      pathname === "/FrontEndReact" ? "bg-sky-200" : ""
                    }`}
                  >
                    <div>Frontend con React</div>
                  </Link>
                </li>
                <li className="pb-2 mb-3">
                  <Link
                    href="/FrontEndReact"
                    className={`p-2 pe-2 w-full rounded-none lg:rounded-e-2xl text-start hover:bg-gray-200 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5  bg-highlight link ${
                      pathname === "/FrontEndReact" ? "bg-sky-200" : ""
                    }`}
                  >
                    <div>Estilización con frameWorks</div>
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    </div>
  );
}
