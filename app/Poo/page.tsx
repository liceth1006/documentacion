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
                  <div className="flex flex-wrap"></div>
                  <h1 className=" mdx-heading text-primary dark:text-primary-dark -mx-.5 break-words text-3xl font-display font-bold leading-tight">
                    Introducción a la programación orientada a objetos
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
                    En esta documentación, exploraremos los fundamentos de la
                    Programación Orientada a Objetos (POO), un paradigma de
                    programación que ha revolucionado la forma en que concebimos
                    y desarrollamos software. Comenzaremos con una breve
                    revisión de los conceptos de programación estructurada y
                    luego nos sumergiremos en el mundo de los objetos, clases,
                    herencia y encapsulamiento que define la POO.
                  </p>

                  <h2
                    id="Objective"
                    className="text-3xl leading-10 font-bold pt-16 mb-5"
                  >
                    De programación estructurada a POO
                  </h2>
                  <p>
                    Cuando comencé mi viaje en la programación, estaba
                    familiarizado principalmente con la programación
                    estructurada. Es decir, escribía código que se basaba en la
                    ejecución secuencial de instrucciones, utilizando
                    estructuras de control como bucles y condicionales para
                    manipular datos. Y aunque la programación estructurada es
                    poderosa y útil, pronto descubrí que había un enfoque aún
                    más poderoso y flexible: la programación orientada a
                    objetos.
                  </p>
                  <p className="mt-5">
                    Antes de la llegada de la programación orientada a objetos
                    (POO), predominaba un enfoque de programación estructurada.
                    En este paradigma, el código se organiza principalmente en
                    funciones o procedimientos que operan sobre datos. La
                    programación estructurada se basa en varios conceptos clave
                    que sientan las bases para el desarrollo de software:
                  </p>
                  <ul className="ms-6 my-3 list-disc">
                    <li className="leading-relaxed mb-1 mt-1">
                      <a className="inline font-semibold " href="">
                        {" "}
                        Procedimientos y Funciones:
                      </a>
                    </li>
                    <p>
                      Los programas están divididos en bloques de código
                      independientes, llamados procedimientos o funciones, que
                      realizan tareas específicas.
                    </p>
                    <li className="leading-relaxed mb-1 mt-1">
                      {" "}
                      <a className="inline font-semibold " href="">
                        Datos y Estructuras de Datos:
                      </a>
                    </li>
                    <p>
                      Los datos son elementos fundamentales en la programación
                      estructurada y se organizan en estructuras de datos como
                      arreglos, listas o registros.
                    </p>
                    <li className="leading-relaxed mb-1 mt-1">
                      <a className="inline font-semibold " href="">
                        Control de Flujo:
                      </a>
                    </li>
                    <p>
                      Se utilizan estructuras de control como bucles (for,
                      while) y condicionales (if, else) para dirigir el flujo de
                      ejecución del programa.
                    </p>
                    <li className="leading-relaxed mb-1 mt-1 ">
                      <a className="inline font-semibold " href="">
                        Modularidad:
                      </a>
                    </li>
                    <p>
                      El principio de modularidad promueve la división del
                      código en módulos más pequeños y manejables, lo que
                      facilita la comprensión y mantenimiento del programa.
                    </p>
                  </ul>
                  <p>
                    Aunque la programación estructurada proporciona un marco
                    sólido para el desarrollo de software, tiene sus
                    limitaciones. A medida que los programas crecen en tamaño y
                    complejidad, puede volverse difícil de mantener y extender
                    debido a la falta de encapsulamiento y reutilización de
                    código.
                  </p>
                  <p className="mt-3">
                    Es en este contexto que surge la programación orientada a
                    objetos como un enfoque alternativo y más poderoso. En la
                    siguiente sección, exploraremos en detalle los principios y
                    conceptos fundamentales de la POO y cómo supera las
                    limitaciones de la programación estructurada.
                  </p>
                  <h2
                    id="Topics"
                    className="text-3xl leading-10 font-bold pt-16 mb-5"
                  >
                    ¿Qué es la Programación Orientada a Objetos (POO)?
                  </h2>
                  <p className="whitespace-pre-wrap my-4">
                    En pocas palabras, la POO es un paradigma de programación
                    que se centra en el concepto de "objetos". Ahora, no me
                    refiero a objetos físicos como una silla o una mesa, sino a
                    entidades virtuales que tienen propiedades (también llamadas
                    atributos) y comportamientos (también llamados métodos).
                    Estos objetos interactúan entre sí, lo que permite construir
                    programas complejos y modulares de una manera más intuitiva
                    y estructurada.
                  </p>
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
