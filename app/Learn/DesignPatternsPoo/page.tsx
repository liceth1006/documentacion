"use client";
import Image from "next/image";
import Navbar from "../../Navbar";
import VerticalNavbar from "../../VerticalNavbar";
import Link from "next/link";

export default function Page() {
  

  return (
    <div className="">
      <div className="grid lg:grid-cols-[auto,20rem]">
        <main className="min-w-0 isolate pl-4 mt-10">
          <article className="font-normal break-words text-primary ">
            <div className="ps-0">
              <div className="px-5 sm:px-12 pt-3.5">
                <div className="max-w-4xl ms-0 2xl:mx-auto">
                  <div className="flex flex-wrap"></div>
                  <h1
                    id=""
                    className="  mdx-heading text-primary dark:text-primary-dark -mx-.5 break-words text-3xl font-display font-bold leading-tight"
                  >
                    ¿Qué es un Patrón de Diseño?
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
                  <p className="mt-10">
                    Los patrones de diseño en la programación orientada a
                    objetos (POO) son soluciones estandarizadas a problemas
                    comunes que ocurren en el diseño de software. Estos patrones
                    proporcionan un modelo reutilizable que se puede aplicar a
                    diversas situaciones, haciendo el código más flexible,
                    modular y fácil de mantener.Se dividen en tres categorías
                    principales:
                  </p>

                  <h2
                    id="Creational"
                    className="text-3xl leading-10 font-bold pt-16 mb-5"
                  >
                    Patrones Creacionales
                  </h2>
                  <p>
                    Estos patrones proporcionan mecanismos para la creación de
                    objetos que aumentan la flexibilidad y la reutilización del
                    código existente.
                  </p>
                  <ul className="ms-6 my-3 list-disc">
                    <li className="leading-relaxed mb-1 mt-1">
                      <a className="inline font-semibold " href="">
                        Singleton:
                      </a>
                    </li>
                    <p>
                      Garantiza que una clase tenga solo una instancia y
                      proporciona un punto de acceso global a ella.
                    </p>
                    <li className="leading-relaxed mb-1 mt-1">
                      <a className="inline font-semibold " href="">
                        Factory Method:
                      </a>
                    </li>
                    <p>
                      Define una interfaz para crear un objeto, pero permite a
                      las subclases alterar el tipo de objetos que se crearán.
                    </p>
                    <li className="leading-relaxed mb-1 mt-1">
                      <a className="inline font-semibold " href="">
                        Builder:
                      </a>
                    </li>
                    <p>
                      Separación de la construcción de un objeto complejo de su
                      representación, de modo que el mismo proceso de
                      construcción pueda crear diferentes representaciones.
                    </p>
                  </ul>
                  <h2
                    id="Structural"
                    className="text-3xl leading-10 font-bold pt-16 mb-5"
                  >
                    Patrones Estructurales
                  </h2>
                  <p>
                    Estos patrones explican cómo ensamblar objetos y clases en
                    estructuras más grandes mientras se mantiene la flexibilidad
                    y la eficiencia de la estructura.
                  </p>
                  <ul className="ms-6 my-3 list-disc">
                    <li className="leading-relaxed mb-1 mt-1">
                      <a className="inline font-semibold " href="">
                        Adapter:
                      </a>
                    </li>
                    <p>Permite que interfaces incompatibles trabajen juntas.</p>
                    <li className="leading-relaxed mb-1 mt-1">
                      <a className="inline font-semibold " href="">
                        Decorator:
                      </a>
                    </li>
                    <p>Añade funcionalidades a un objeto dinámicamente</p>
                    <li className="leading-relaxed mb-1 mt-1">
                      <a className="inline font-semibold " href="">
                        Facade:
                      </a>
                    </li>
                    <p>
                      Proporciona una interfaz unificada para un conjunto de
                      interfaces en un subsistema.
                    </p>
                    <li className="leading-relaxed mb-1 mt-1">
                      <a className="inline font-semibold " href="">
                        Proxy:
                      </a>
                    </li>
                    <p>
                      Proporciona un sustituto o marcador de posición para
                      controlar el acceso a un objeto.
                    </p>
                  </ul>
                  <h2
                    id="Behavioral"
                    className="text-3xl leading-10 font-bold pt-16 mb-5"
                  >
                    Patrones de Comportamiento
                  </h2>
                  <p>
                    Estos patrones se encargan de una comunicación efectiva y la
                    asignación de responsabilidades entre objetos.
                  </p>
                  <ul className="ms-6 my-3 list-disc">
                    <li className="leading-relaxed mb-1 mt-1">
                      <a className="inline font-semibold " href="">
                        Observer:
                      </a>
                    </li>
                    <p>
                      Define una dependencia uno-a-muchos entre objetos para que
                      cuando uno cambie su estado, todos los dependientes sean
                      notificados y actualizados automáticamente.
                    </p>
                    <li className="leading-relaxed mb-1 mt-1">
                      <a className="inline font-semibold " href="">
                        Strategy:
                      </a>
                    </li>
                    <p>
                      Define una familia de algoritmos, encapsula cada uno de
                      ellos y los hace intercambiables. Permite que el algoritmo
                      varíe independientemente de los clientes que lo utilizan.
                    </p>
                    <li className="leading-relaxed mb-1 mt-1">
                      <a className="inline font-semibold " href="">
                        hain of Responsibility:
                      </a>
                    </li>
                    <p>
                      Permite que múltiples objetos manejen una solicitud sin
                      conocer el receptor real de la misma.
                    </p>
                    <li className="leading-relaxed mb-1 mt-1">
                      <a className="inline font-semibold " href="">
                        Command:
                      </a>
                    </li>
                    <p>
                      Encapsula una solicitud como un objeto, lo que le permite
                      parametrizar clientes con solicitudes, encolar
                      solicitudes, y soportar operaciones que pueden deshacerse.
                    </p>
                    <li className="leading-relaxed mb-1 mt-1">
                      <a className="inline font-semibold " href="">
                        State:
                      </a>
                    </li>
                    <p>
                      Permite que un objeto altere su comportamiento cuando su
                      estado interno cambia. El objeto parecerá cambiar de
                      clase.
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
                    href="#"
                    className="p-2 pe-2 w-full rounded-none lg:rounded-s-2xl text-start hover:bg-gray-200 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5  bg-highlight "
                     
                  
                  >
                   ¿Qué es un Patrón de Diseño?
                  </Link>
                </li>
                <li className="text-sm  rounded-s-xl bg-highlight dark:bg-highlight-dark">
                  <Link
                    href="#Creational"
                    className="p-2 pe-2 w-full rounded-none lg:rounded-s-2xl text-start hover:bg-gray-200 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5  bg-highlight "
                  >
                   Patrones Creacionales
                  </Link>
                </li>
                <li className="text-sm  rounded-s-xl bg-highlight dark:bg-highlight-dark">
                  <Link
                    href="#Structural"
                    className="p-2 pe-2 w-full rounded-none lg:rounded-s-2xl text-start hover:bg-gray-200 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5  bg-highlight "
                  >
                   Patrones Estructurales
                  </Link>
                </li>
                <li className="text-sm  rounded-s-xl bg-highlight dark:bg-highlight-dark">
                  <Link
                    href="#Behavioral"
                    className="p-2 pe-2 w-full rounded-none lg:rounded-s-2xl text-start hover:bg-gray-200 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5  bg-highlight "
                  >
                    Patrones de Comportamiento
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
