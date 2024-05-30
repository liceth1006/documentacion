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
                    Introducción a los Principios SOLID
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
                    En el emocionante mundo de la programación, la habilidad
                    para escribir código no es suficiente. Es crucial que
                    nuestro código sea mantenible, flexible y fácil de entender.
                    Aquí es donde entran en juego los Principios SOLID. Estos
                    principios son como las reglas de oro que nos guían en el
                    diseño de software de calidad. Desde la creación de clases
                    hasta la gestión de dependencias, los Principios SOLID nos
                    proporcionan un conjunto de directrices que nos ayudan a
                    escribir un código más limpio y robusto.
                  </p>
                  <br />
                  <p>
                    En esta documentación, exploraremos qué son exactamente
                    estos principios y por qué son tan importantes para los
                    desarrolladores de software. A través de ejemplos simples y
                    explicaciones claras, aprenderemos cómo aplicar cada uno de
                    estos principios en nuestro código y cómo pueden mejorar la
                    calidad y la mantenibilidad de nuestras aplicaciones. Así
                    que prepárate para adentrarte en el mundo de los Principios
                    SOLID y llevar tu habilidad como desarrollador al siguiente
                    nivel. ¡Comencemos!
                  </p>

                  <h2
                    id="StructuredProgramming"
                    className="text-3xl leading-10 font-bold pt-16 mb-5"
                  >
                    ¿Qué son los Principios SOLID?
                  </h2>
                  <p>
                    Los Principios SOLID son un conjunto de reglas fundamentales
                    en el desarrollo de software que nos guían para escribir
                    código limpio, mantenible y flexible. Estos principios
                    fueron presentados por primera vez por Robert C. Martin en
                    la década de 1990 y han sido ampliamente adoptados en la
                    industria del desarrollo de software.
                  </p>
                  <p className="mt-5">
                    A continuación, te presento una definición simple y directa
                    de cada uno de los Principios SOLID:
                  </p>
                  <ul className="ms-6 my-3 list-disc">
                    <li className="leading-relaxed mb-1 mt-1">
                      <a className="inline font-semibold " href="">
                        S - Principio de Responsabilidad Única (Single
                        Responsibility Principle):
                      </a>
                    </li>
                    <p>
                      Este principio establece que una clase debería tener una
                      sola razón para cambiar. En otras palabras, cada clase
                      debe tener una única responsabilidad o función en el
                      sistema. Si una clase tiene más de una razón para cambiar,
                      es una señal de que debería dividirse en clases más
                      pequeñas y coherentes.
                    </p>
                    <li className="leading-relaxed mb-1 mt-1">
                      {" "}
                      <a className="inline font-semibold " href="">
                        O - Principio de Abierto/Cerrado (Open/Closed
                        Principle):
                      </a>
                    </li>
                    <p>
                      Según este principio, una clase debería estar abierta para
                      su extensión pero cerrada para su modificación. Esto
                      significa que el comportamiento de una clase debe poder
                      ser extendido sin necesidad de modificar su código fuente.
                      Esto se logra mediante el uso de técnicas como la herencia
                      y la implementación de interfaces.
                    </p>
                    <li className="leading-relaxed mb-1 mt-1">
                      <a className="inline font-semibold " href="">
                        L - Principio de Sustitución de Liskov (Liskov
                        Substitution Principle):
                      </a>
                    </li>
                    <p>
                      Este principio establece que las instancias de una clase
                      base deberían poder ser reemplazadas por instancias de sus
                      clases derivadas sin alterar el comportamiento del
                      programa. En otras palabras, las clases derivadas deben
                      poder ser sustituidas por sus clases base sin causar
                      efectos secundarios en el funcionamiento del sistema.
                    </p>
                    <li className="leading-relaxed mb-1 mt-1 ">
                      <a className="inline font-semibold " href="">
                        I - Principio de Segregación de Interfaces (Interface
                        Segregation Principle):
                      </a>
                    </li>
                    <p>
                      Este principio establece que los clientes no deberían
                      verse obligados a depender de interfaces que no usan. En
                      lugar de tener una única interfaz grande que abarque todas
                      las funciones, es mejor tener varias interfaces más
                      pequeñas y específicas, cada una diseñada para un conjunto
                      coherente de funcionalidades.
                    </p>
                    <li className="leading-relaxed mb-1 mt-1 ">
                      <a className="inline font-semibold " href="">
                        D - Principio de Inversión de Dependencias (Dependency
                        Inversion Principle):
                      </a>
                    </li>
                    <p>
                      Según este principio, los módulos de alto nivel no deben
                      depender de los módulos de bajo nivel, sino de
                      abstracciones. Además, las abstracciones no deben depender
                      de los detalles, sino que los detalles deben depender de
                      las abstracciones. En resumen, este principio promueve el
                      uso de la inversión de dependencias para desacoplar los
                      diferentes componentes de un sistema.
                    </p>
                  </ul>
                  <p>
                    Estos principios proporcionan una base sólida para el diseño
                    de software modular, extensible y fácil de mantener. Al
                    aplicarlos correctamente, podemos escribir código que sea
                    más fácil de entender, probar y mantener a lo largo del
                    tiempo.
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
