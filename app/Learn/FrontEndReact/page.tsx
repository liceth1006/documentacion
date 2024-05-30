"use client";
import Image from "next/image";
import Navbar from "../../Navbar";
import VerticalNavbar from "../../VerticalNavbar";
import Link from "next/link";

export default function Page() {
  const hash = window.location.hash;

  return (
    <div className="">
      <div className="grid lg:grid-cols-[auto,20rem]">
        <main className="min-w-0 isolate pl-4 mt-10">
          <article className="font-normal break-words text-primary ">
            <div className="ps-0">
              <div className="px-5 sm:px-12 pt-3.5">
                <div className="max-w-4xl ms-0 2xl:mx-auto">
                  <div className="flex flex-wrap"></div>
                  <h1 className=" mdx-heading text-primary dark:text-primary-dark -mx-.5 break-words text-3xl font-display font-bold leading-tight">
                  Introducción a React
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
                  React es una biblioteca de JavaScript desarrollada por Facebook que se utiliza para construir interfaces de usuario interactivas y dinámicas. Lanzada en 2013, React ha revolucionado el desarrollo web al introducir un enfoque basado en componentes reutilizables y eficientes.
                  </p>
                  <br />
                  <p>
                  A diferencia de otras bibliotecas o frameworks, React se enfoca en la creación de componentes individuales que pueden manejar su propio estado y lógica de presentación. Esto permite a los desarrolladores construir aplicaciones complejas de manera modular y escalable. Además, React emplea un DOM virtual para mejorar el rendimiento, actualizando solo los elementos que han cambiado en lugar de renderizar toda la página cada vez que hay una actualización.
                  </p>
                  <p>A lo largo de esta documentación, exploraremos los conceptos fundamentales de React, incluyendo las ventajas de su uso, la estructura de los componentes, el manejo de propiedades y estado, así como la utilización de Hooks y manejadores de eventos. Esta guía está diseñada para ser accesible para estudiantes y desarrolladores principiantes, proporcionando ejemplos claros y prácticos para entender cómo trabajar con React y aprovechar al máximo sus capacidades. </p>

                  <h2
                    id="StructuredProgramming"
                    className="text-3xl leading-10 font-bold pt-16 mb-5"
                  >
                    Ventajas de Usar React
                  </h2>
                  <p>
                  React se ha convertido en una de las bibliotecas más populares para el desarrollo de interfaces de usuario debido a sus numerosas ventajas. Su enfoque innovador y las características avanzadas que ofrece han permitido a los desarrolladores crear aplicaciones más rápidas, escalables y fáciles de mantener. A continuación, enumeramos algunas de las principales ventajas de utilizar React:
                  </p>
                  <ul className="ms-6 my-3 list-disc">
                    <li className="leading-relaxed mb-1 mt-1">
                      <a className="inline font-semibold " href="">
                      Reutilización de Componentes:
                      </a>
                    </li>
                    <p>
                    React permite la creación de componentes reutilizables, lo que facilita el mantenimiento y la escalabilidad del código. Cada componente encapsula su lógica y presentación, lo que hace que el desarrollo sea más modular.
                    </p>
                    <li className="leading-relaxed mb-1 mt-1">
                      {" "}
                      <a className="inline font-semibold " href="">
                      Virtual DOM: 
                      </a>
                    </li>
                    <p>
                    React utiliza un DOM virtual para mejorar el rendimiento. Al actualizar solo los componentes que han cambiado en lugar de renderizar toda la página, React hace que las aplicaciones sean más rápidas y eficientes.


                    </p>
                    <li className="leading-relaxed mb-1 mt-1">
                      <a className="inline font-semibold " href="">
                      Unidirectional Data Flow:
                      </a>
                    </li>
                    <p>
                    El flujo de datos unidireccional de React simplifica la gestión del estado y facilita la depuración del código, ya que los datos fluyen en una sola dirección a través de la aplicación.


                    </p>
                    <li className="leading-relaxed mb-1 mt-1 ">
                      <a className="inline font-semibold " href="">
                      Ecosistema y Comunidad: 
                      </a>
                    </li>
                    <p>
                    React cuenta con una vasta comunidad de desarrolladores y un rico ecosistema de herramientas, bibliotecas y recursos. Esto facilita la resolución de problemas y el acceso a componentes y soluciones preconstruidas.
                    </p>
                    <li className="leading-relaxed mb-1 mt-1 ">
                      <a className="inline font-semibold " href="">
                      SEO Amigable: 
                      </a>
                    </li>
                    <p>
                    React puede ser optimizado para motores de búsqueda utilizando técnicas como el renderizado en el servidor (SSR) con frameworks como Next.js, mejorando así el SEO de las aplicaciones.
                    </p>
                    <li className="leading-relaxed mb-1 mt-1 ">
                      <a className="inline font-semibold " href="">
                      Desarrollo de Aplicaciones Móviles: 
                      </a>
                    </li>
                    <p>
                    con React Native, una biblioteca basada en React, es posible desarrollar aplicaciones móviles nativas para iOS y Android utilizando el mismo enfoque y la misma base de código, lo que ahorra tiempo y esfuerzo.
                    </p>
                  </ul>
                  <p>
                  Estas ventajas hacen de React una opción poderosa y flexible para el desarrollo moderno de interfaces de usuario, permitiendo a los desarrolladores crear aplicaciones de alta calidad de manera más eficiente.
                  </p>

                  <h2
                    id="Poo"
                    className="text-3xl leading-10 font-bold pt-16 mb-5"
                  >
                    ¿Por qué son importantes los Principios SOLID?
                  </h2>
                  <p className="whitespace-pre-wrap my-4">
                    Los Principios SOLID son fundamentales en el desarrollo de
                    software por varias razones, ya que promueven prácticas que
                    conducen a un código de mayor calidad y a sistemas más
                    robustos. Aquí te explico cómo cada uno de los principios
                    SOLID contribuye a estos objetivos:
                  </p>
                  <ul className="ms-6 my-3 list-disc">
                    <li className="leading-relaxed mb-1 mt-1">
                      <a className="inline font-semibold " href="">
                        Código limpio y fácil de entender:
                      </a>
                    </li>
                    <li>
                      Los principios SOLID fomentan la claridad y la simplicidad
                      en el diseño del código.
                    </li>
                    <li>
                      Al seguir el Principio de Responsabilidad Única, cada
                      clase tiene una única responsabilidad, lo que hace que sea
                      más fácil comprender su propósito y función.
                    </li>
                    <li>
                      El Principio de Abierto/Cerrado promueve la extensibilidad
                      del código sin necesidad de modificar el código existente,
                      lo que reduce la complejidad y el riesgo de introducir
                      errores.
                    </li>
                    <li>
                      El Principio de Segregación de Interfaces ayuda a evitar
                      interfaces grandes y complejas, lo que facilita su
                      comprensión y uso por parte de otros desarrolladores.
                    </li>
                  </ul>
                  <ul className="ms-6 my-3 list-disc">
                    <li className="leading-relaxed mb-1 mt-1">
                      <a className="inline font-semibold " href="">
                      Modularidad y reutilización de código:
                      </a>
                    </li>
                    <li>
                    Los principios SOLID fomentan el diseño de software modular, donde las diferentes partes del sistema están bien encapsuladas y tienen una baja interdependencia.
                    </li>
                    <li>
                    El Principio de Responsabilidad Única y el Principio de Abierto/Cerrado favorecen la creación de clases y componentes cohesivos y reutilizables.
                    </li>
                    <li>
                      El Principio de Abierto/Cerrado promueve la extensibilidad
                      del código sin necesidad de modificar el código existente,
                      lo que reduce la complejidad y el riesgo de introducir
                      errores.
                    </li>
                    <li>
                      El Principio de Segregación de Interfaces ayuda a evitar
                      interfaces grandes y complejas, lo que facilita su
                      comprensión y uso por parte de otros desarrolladores.
                    </li>
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
                    href="#StructuredProgramming"
                    className={`p-2 pe-2 w-full rounded-none lg:rounded-s-2xl text-start hover:bg-gray-200 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5  bg-highlight link ${
                      hash === "#StructuredProgramming" ? "bg-sky-200" : ""
                    }`}
                  >
                   ¿Qué son los Principios SOLID?
                  </Link>
                </li>
                <li className="text-sm  rounded-s-xl bg-highlight dark:bg-highlight-dark">
                  <Link
                    href="#Poo"
                    className={`p-2 pe-2 w-full rounded-none lg:rounded-s-2xl text-start hover:bg-gray-200 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5  bg-highlight ${
                      hash === "#Poo" ? "bg-sky-200" : ""
                    }`}
                  >
                    ¿Por qué son importantes los Principios SOLID?
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
