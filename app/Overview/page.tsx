"use client";
import Image from "next/image";
import Navbar from "../Navbar";
import VerticalNavbar from "../VerticalNavbar";
import Link from "next/link";

export default function Page() {
const hash = window.location.hash;

  return (
    <div className="">
      <Navbar />
      <div className="grid  lg:grid-cols-[20rem,auto,20rem] lg:grid-cols-sidebar-content 2xl:grid-cols-sidebar-content-toc">
        <VerticalNavbar />
        <main className="min-w-0 isolate pl-4 mt-10">
          <article className="font-normal break-words text-primary ">
            <div className="ps-0">
              <div className="px-5 sm:px-12 pt-3.5">
                <div className="max-w-4xl ms-0 2xl:mx-auto">
                  <div className="flex flex-wrap">
                  </div>
                  <h1 className=" mdx-heading text-primary dark:text-primary-dark -mx-.5 break-words text-3xl font-display font-bold leading-tight">
                  Documentación del Bootcamp de Desarrollo Web
                    <a
                      href="#undefined"
                      aria-label="Link for this heading"
                      title="Link for this heading"
                      className="mdx-header-anchor hidden"
                    >
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 13 13"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-70 ms-2 h-5 w-5"
                      >
                        <g fill="currentColor" fill-rule="evenodd">
                          <path d="M7.778 7.975a2.5 2.5 0 0 0 .347-3.837L6.017 2.03a2.498 2.498 0 0 0-3.542-.007 2.5 2.5 0 0 0 .006 3.543l1.153 1.15c.07-.29.154-.563.25-.773.036-.077.084-.16.14-.25L3.18 4.85a1.496 1.496 0 0 1 .002-2.12 1.496 1.496 0 0 1 2.12 0l2.124 2.123a1.496 1.496 0 0 1-.333 2.37c.16.246.42.504.685.752z"></path>
                          <path d="M5.657 4.557a2.5 2.5 0 0 0-.347 3.837l2.108 2.108a2.498 2.498 0 0 0 3.542.007 2.5 2.5 0 0 0-.006-3.543L9.802 5.815c-.07.29-.154.565-.25.774-.036.076-.084.16-.14.25l.842.84c.585.587.59 1.532 0 2.122-.587.585-1.532.59-2.12 0L6.008 7.68a1.496 1.496 0 0 1 .332-2.372c-.16-.245-.42-.503-.685-.75z"></path>
                        </g>
                      </svg>
                    </a>
                  </h1>
                </div>
              </div>
              <div>
                <div className="px-5 sm:px-12 ">
                  <h2
                    id="Introduction"
                    className="text-3xl leading-10 font-bold pt-16 mb-5"
                  >
                    Introducción
                  </h2>
                  <p>
                    Durante mi participación en el Bootcamp de Desarrollo Web
                    Avanzado, he tenido el privilegio de sumergirme en un viaje
                    de aprendizaje enriquecedor y transformador. Este bootcamp
                    ha sido una experiencia invaluable que ha ampliado mis
                    conocimientos y habilidades en el campo del desarrollo web.
                    En esta documentación, comparto con entusiasmo todo lo que
                    he aprendido a lo largo del programa. Desde los fundamentos
                    de la programación orientada a objetos hasta la creación de
                    aplicaciones web interactivas con React, esta documentación
                    representa un recorrido completo por los temas cubiertos
                    durante el bootcamp.
                  </p>
                  

                  <h2
                    id="Objective"
                    className="text-3xl leading-10 font-bold pt-16 mb-5"
                  >
                    Objetivo
                  </h2>
                  <p>
                    Mi objetivo al crear esta documentación es proporcionar una
                    referencia útil tanto para mí como para otros estudiantes
                    interesados en el desarrollo web. A través de esta
                    recopilación de conocimientos, espero no solo consolidar lo
                    aprendido, sino también inspirar y apoyar a otros en su
                    viaje hacia el dominio del desarrollo web.
                  </p>

                  <h2
                    id="Topics"
                    className="text-3xl leading-10 font-bold pt-16 mb-5"
                  >
                    Temas
                  </h2>
                  <p className="whitespace-pre-wrap my-4">
                    Durante el Bootcamp de Desarrollo Web, se exploraron una
                    variedad de temas cruciales para el desarrollo web moderno.
                    Entre estos temas se incluyen:
                  </p>
                  <ul className="ms-6 my-3 list-disc">
                    <li className="leading-relaxed mb-1 mt-1">
                      <a className="inline font-semibold " href="">
                        {" "}
                        Programación Orientada a Objetos
                      </a>
                    </li>
                    <p>
                      En este módulo, exploraremos los fundamentos de la
                      Programación Orientada a Objetos (POO), incluyendo
                      conceptos como encapsulamiento, herencia y polimorfismo.
                      Aprenderás a diseñar y desarrollar software de manera más
                      eficiente y modular.
                    </p>
                    <li className="leading-relaxed mb-1 mt-1">
                      {" "}
                      <a className="inline font-semibold " href="">
                        Estructura de Datos y Algoritmos
                      </a>
                    </li>
                    <p>
                      Este módulo se enfoca en el estudio de diversas
                      estructuras de datos, como listas, pilas, colas, árboles y
                      grafos, así como en el análisis y diseño de algoritmos
                      para resolver problemas complejos de manera óptima.
                    </p>
                    <li className="leading-relaxed mb-1 mt-1">
                      <a className="inline font-semibold " href="">
                        Frontend con React
                      </a>
                    </li>
                    <p>
                      Exploraremos el framework React, ampliamente utilizado en
                      el desarrollo de interfaces de usuario modernas y
                      dinámicas. Desde los conceptos básicos hasta las técnicas
                      avanzadas, aprenderás a construir aplicaciones web
                      interactivas y escalables.
                    </p>
                    <li className="leading-relaxed mb-1 mt-1 ">
                      <a className="inline font-semibold " href="">
                        Estilización con Frameworks
                      </a>
                    </li>
                    <p>
                      En este módulo, aprenderás a utilizar frameworks de
                      estilización como Bootstrap y Material-UI para mejorar la
                      apariencia y la experiencia de usuario de tus aplicaciones
                      web, creando interfaces estéticamente atractivas y
                      responsivas.
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </main>
        <div className="-mt-16 lg:max-w-custom-xs 2xl:block">
          <nav className="pt-20 sticky top-0 end-0">
            <h2 className="mb-3 lg:mb-3 uppercase tracking-wide font-bold text-sm w-full">
              Rutas
            </h2>
            <div className="h-full overflow-y-auto ps-4 max-h-[calc(100vh-7.5rem)]">
              <ul className="space-y-2 pb-16">
                <li className="text-sm  rounded-s-xl bg-highlight dark:bg-highlight-dark">
                  <Link
                    href="#Introduction"
                    className={`p-2 pe-2 w-full rounded-none lg:rounded-s-2xl text-start hover:bg-gray-200 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5  bg-highlight link ${
                      hash === "#Introduction" ? "bg-sky-200" : ""
                    }`}
                  >
                    Introducción
                  </Link>
                </li>
                <li className="text-sm  rounded-s-xl bg-highlight dark:bg-highlight-dark">
                  <Link
                    href="#Objective"
                    className={`p-2 pe-2 w-full rounded-none lg:rounded-s-2xl text-start hover:bg-gray-200 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5  bg-highlight link ${
                      hash === "#Objective" ? "bg-sky-200" : ""
                    }`}
                  
                  >
                    Objetivo
                  </Link>
                </li>
                <li className="text-sm  rounded-s-xl bg-highlight dark:bg-highlight-dark">
                  <Link
                    href="#Topics"
                    className={`p-2 pe-2 w-full rounded-none lg:rounded-s-2xl text-start hover:bg-gray-200 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5  bg-highlight ${
                      hash === "#Topics" ? "bg-sky-200" : ""
                    }`}
                  
                  >
                    Temas
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
