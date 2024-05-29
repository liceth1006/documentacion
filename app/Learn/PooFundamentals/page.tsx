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
                  <h1
                    id="poo-concepts"
                    className="  mdx-heading text-primary dark:text-primary-dark -mx-.5 break-words text-3xl font-display font-bold leading-tight"
                  >
                    Conceptos Clave de la POO
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
                    En este documento, abordaremos varios aspectos esenciales de
                    la POO, desde la definición de clases y objetos hasta temas
                    más avanzados como la herencia y el polimorfismo. A través
                    de ejemplos prácticos en el lenguaje de programación
                    Javascript, te guiaremos para comprender cómo la POO puede
                    mejorar la estructura, la modularidad y la reutilización del
                    código en tus proyectos de software.
                  </p>

                  <h2
                    id="classes-objects"
                    className="text-3xl leading-10 font-bold pt-16 mb-5"
                  >
                    Clases y Objetos
                  </h2>
                  <p>
                    Las clases son como plantillas o moldes para crear objetos.
                    Cada clase define un conjunto de propiedades y métodos que
                    los objetos creados a partir de ella poseerán.
                  </p>
                  <ul className="ms-6 my-3 list-disc">
                    <li className="leading-relaxed mb-1 mt-1">
                      <a className="inline font-semibold " href="">
                        {" "}
                        Propiedades:
                      </a>
                    </li>
                    <p>
                      Representan características o datos asociados a un objeto.
                    </p>
                    <li className="leading-relaxed mb-1 mt-1">
                      {" "}
                      <a className="inline font-semibold " href="">
                        Métodos:
                      </a>
                    </li>
                    <p>
                      Son funciones que definen el comportamiento del objeto.
                    </p>
                  </ul>
                  <h3
                    id="example-classes-objects"
                    className="text-2xl leading-10 font-bold pt-16 mb-5"
                  >
                    Ejemplo de clases y objetos
                  </h3>

                  <div className="bg-gray-300 text-dark p-6 rounded-lg  font-mono">
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2 text-red-500">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <pre className="whitespace-pre-wrap my-4">
                        {`class Animal {
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }

  saludar() {
    return  \` Hola mi nombre es  \${this.nombre} y soy  \${this.tipo}.\`);
  }
}

let perro = new Animal("Firulais", "perro");
console.log(perro.saludar());`}
                      </pre>
                    </div>
                  </div>
                  <p className="mt-5">
                    En este ejemplo, hemos definido una clase llamada
                    &quot;Animal&quot;, que actúa como una plantilla para crear
                    objetos que representan diferentes animales. Esta clase
                    tiene un constructor que se encarga de inicializar las
                    propiedades del animal, como el nombre y el tipo. Además, la
                    clase incluye un método llamado &quot;saludar()&quot;, el
                    cual devuelve un saludo personalizado con el nombre y el
                    tipo del animal. Luego, creamos una instancia de la clase
                    &quot;Animal&quot; llamada &quot;perro &quot;, especificando
                    el nombre &quot;Firulais &quot; y el tipo &quot;perro
                    &quot;.
                  </p>

                  <h2
                    id="encapsulation"
                    className="text-3xl leading-10 font-bold pt-16 mb-5"
                  >
                    Encapsulamiento
                  </h2>
                  <p>
                    El encapsulamiento es el concepto de ocultar el estado
                    interno de un objeto y solo permitir el acceso a través de
                    métodos públicos. Esto ayuda a mantener la integridad de los
                    datos y a prevenir su manipulación no autorizada.
                  </p>
                  <h3
                    id="example-encapsulation"
                    className="text-2xl leading-10 font-bold pt-16 mb-5"
                  >
                    Ejemplo de encapsulamiento
                  </h3>

                  <div className="bg-gray-300 text-dark p-6 rounded-lg  font-mono">
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2 text-red-500">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <pre className="whitespace-pre-wrap my-4">
                        {`class Animal {
  constructor(nombre, tipo) {
    // Propiedades privadas
    let _nombre = nombre;
    let _tipo = tipo;

    // Métodos públicos
    this.saludar = function() {
      return \`¡Hola! Soy \${_nombre} y soy un \${_tipo}.\`;
    };
  }
}

let perro = new Animal("Firulais", "perro");
console.log(perro.saludar()); // Output: ¡Hola! Soy Firulais y soy un perro.
console.log(perro._nombre); // Output: undefined (No se puede acceder directamente a la propiedad privada _nombre)
`}
                      </pre>
                    </div>
                  </div>
                  <p className="mt-5">
                    En este ejemplo, las propiedades _nombre y _tipo son
                    encapsuladas dentro del constructor de la clase Animal, lo
                    que significa que no pueden ser accedidas directamente desde
                    fuera de la clase. Sin embargo, el método saludar() es un
                    método público que puede ser llamado externamente y accede a
                    las propiedades privadas para devolver un saludo con el
                    nombre y tipo del animal. Esto ilustra el principio de
                    encapsulamiento en la Programación Orientada a Objetos.
                  </p>

                  <h2
                    id="inheritance"
                    className="text-3xl leading-10 font-bold pt-16 mb-5"
                  >
                    Herencia
                  </h2>
                  <p>
                    La herencia es un mecanismo que permite a una clase heredar
                    propiedades y métodos de otra clase. La clase que hereda se
                    llama subclase o clase hija, y la clase de la que hereda se
                    llama superclase o clase padre.
                  </p>
                  <h3
                    id="example-inheritance"
                    className="text-2xl leading-10 font-bold pt-16 mb-5"
                  >
                    Ejemplo de Herencia
                  </h3>

                  <div className="bg-gray-300 text-dark p-6 rounded-lg  font-mono">
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2 text-red-500">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <pre className="whitespace-pre-wrap my-4">
                        {`// Clase base
class Animal {
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }

  saludar() {
    return \`¡Hola! Soy \${this.nombre} y soy un \${this.tipo}.\`;
  }
}

// Subclase que hereda de Animal
class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre, "perro");
    this.raza = raza;
  }

  saludar() {
    return \`¡Guau! Soy \${this.nombre}, un \${this.raza} \${this.tipo}\`;
  }
}

let firulais = new Perro("Firulais", "Labrador");
console.log(firulais.saludar()); // Output: ¡Guau! Soy Firulais, un Labrador perro.

`}
                      </pre>
                    </div>
                  </div>
                  <p className="mt-5">
                    En este ejemplo, hemos demostrado el concepto de herencia en
                    la programación orientada a objetos utilizando JavaScript.
                    Primero, creamos una clase base llamada &quot;Animal&quot;
                    que contiene un constructor para inicializar propiedades
                    como &quot;nombre&quot; y &quot;tipo&quot;, junto con un
                    método &quot;saludar()&quot; para proporcionar un saludo
                    genérico. Luego, creamos una subclase llamada
                    &quot;Perro&quot; que hereda de la clase &quot;Animal&quot;.
                    Esta subclase introduce una propiedad adicional llamada
                    &quot;raza&quot; y sobrescribe el método
                    &quot;saludar()&quot; para ofrecer un saludo específico para
                    los perros.
                  </p>
                  <p>
                    Después, instanciamos un objeto de la subclase
                    &quot;Perro&quot; llamado &quot;firulais&quot;,
                    especificando su nombre como &quot;Firulais&quot; y su raza
                    como &quot;Labrador&quot;. Finalmente, al llamar al método
                    &quot;saludar()&quot; del objeto &quot;firulais&quot;,
                    obtenemos un saludo personalizado que refleja las
                    características únicas de ese perro. Este ejemplo resalta
                    cómo la herencia nos permite construir y extender clases,
                    facilitando la reutilización y la modificación del
                    comportamiento de los objetos en nuestros programas.
                  </p>

                  <h2
                    id="polymorphism"
                    className="text-3xl leading-10 font-bold pt-16 mb-5"
                  >
                    Polimorfismo
                  </h2>
                  <p>
                    El polimorfismo permite que un objeto pueda comportarse de
                    diferentes maneras según el contexto. Esto se logra mediante
                    la implementación de métodos con el mismo nombre pero con
                    diferentes implementaciones en las subclases.
                  </p>
                  <h3
                    id="example-polymorphism"
                    className="text-2xl leading-10 font-bold pt-16 mb-5"
                  >
                    Ejemplo de Polimorfismo
                  </h3>

                  <div className="bg-gray-300 text-dark p-6 rounded-lg  font-mono">
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2 text-red-500">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <pre className="whitespace-pre-wrap my-4">
                        {`// Clase base
class Animal {
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }

  saludar() {
    return \`¡Hola! Soy \${this.nombre} y soy un \${this.tipo}.\`;
  }

  moverse() {
    return \`\${this.nombre} está moviéndose.\`;
  }
}

// Subclase que sobrescribe el método moverse()
class Perro extends Animal {
  constructor(nombre, tipo, raza) {
    super(nombre, tipo);
    this.raza = raza;
  }

  moverse() {
    return \`\${this.nombre} está corriendo.\`;
  }
}

let firulais = new Perro("Firulais", "perro", "Labrador");

console.log(firulais.saludar()); // Output: ¡Hola! Soy Firulais y soy un perro.
console.log(firulais.moverse()); // Output: Firulais está corriendo.

`}
                      </pre>
                    </div>
                  </div>
                  <p className="mt-5">
                    En este ejemplo, la clase base Animal define un método
                    genérico llamado moverse() que proporciona un mensaje sobre
                    cómo se mueve el animal. La subclase Perro hereda este
                    método de la clase base, pero lo sobrescribe para reflejar
                    el comportamiento específico de los perros, en este caso,
                    correr.
                  </p>
                  <p>
                    Cuando creamos una instancia de la subclase Perro, llamada
                    firulais, podemos ver cómo el método saludar() proporciona
                    un saludo genérico, mientras que el método moverse()
                    devuelve un mensaje específico de cómo se mueve un perro,
                    demostrando así el polimorfismo.
                  </p>
                  <p>
                    {" "}
                    Esta capacidad de un método para comportarse de manera
                    diferente según la clase del objeto que lo llama es una
                    característica fundamental de la programación orientada a
                    objetos y nos permite escribir código más flexible y
                    modular.
                  </p>

                  <h2
                    id="Abstraction"
                    className="text-3xl leading-10 font-bold pt-16 mb-5"
                  >
                    Abstracción
                  </h2>
                  <p>
                    La abstracción es un concepto fundamental en la programación
                    orientada a objetos que consiste en representar las
                    características esenciales de un objeto sin mostrar los
                    detalles complejos de su implementación. Esto permite
                    enfocarse en lo importante para un contexto particular y
                    ocultar la complejidad innecesaria.
                  </p>
                  <h3
                    id="example-Abstraction"
                    className="text-2xl leading-10 font-bold pt-16 mb-5"
                  >
                    Ejemplo de Abstracción
                  </h3>

                  <div className="bg-gray-300 text-dark p-6 rounded-lg  font-mono">
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2 text-red-500">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <pre className="whitespace-pre-wrap my-4">
                        {`// Clase base
class Animal {
  constructor(nombre, tipo) {
    this.nombre = nombre;
    this.tipo = tipo;
  }

  saludar() {
    return \`¡Hola! Soy \${this.nombre} y soy un \${this.tipo}.\`;
  }

  moverse() {
    return \`\${this.nombre} está moviéndose.\`;
  }

  // Método de abstracción
  obtenerInformacion() {
    return \`Nombre: \${this.nombre}, Tipo: \${this.tipo}\`;
  }
}

// Subclase que sobrescribe el método moverse()
class Perro extends Animal {
  constructor(nombre, tipo, raza) {
    super(nombre, tipo);
    this.raza = raza;
  }

  moverse() {
    return \`\${this.nombre} está corriendo.\`;
  }

  // Método de abstracción específico de Perro
  obtenerInformacion() {
    return \`Nombre: \${this.nombre}, Tipo: \${this.tipo}, Raza: \${this.raza}\`;
  }
}

let firulais = new Perro("Firulais", "perro", "Labrador");

console.log(firulais.saludar()); // Output: ¡Hola! Soy Firulais y soy un perro.
console.log(firulais.moverse()); // Output: Firulais está corriendo.
console.log(firulais.obtenerInformacion()); // Output: Nombre: Firulais, Tipo: perro, Raza: Labrador
`}
                      </pre>
                    </div>
                  </div>
                  <p className="mt-5">
                    En este ejemplo, hemos agregado un método de abstracción
                    obtenerInformacion() tanto en la clase base Animal como en
                    la subclase Perro. Este método proporciona una forma de
                    obtener información básica sobre el animal y, en el caso de
                    Perro, incluye información adicional específica de la
                    subclase.
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
                    href="#classes-objects"
                    className={`p-2 pe-2 w-full rounded-none lg:rounded-s-2xl text-start hover:bg-gray-200 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5  bg-highlight link ${
                      hash === "#StructuredProgramming" ? "bg-sky-200" : ""
                    }`}
                  >
                    Clases y Objetos
                  </Link>
                </li>
                <li className="text-sm  rounded-s-xl bg-highlight dark:bg-highlight-dark">
                  <Link
                    href="#example-classes-objects"
                    className={`p-2 pe-2 w-full rounded-none lg:rounded-s-2xl text-start hover:bg-gray-200 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5  bg-highlight link ${
                      hash === "#StructuredProgramming" ? "bg-sky-200" : ""
                    }`}
                  >
                    Ejemplo de clases y objetos
                  </Link>
                </li>
                <li className="text-sm  rounded-s-xl bg-highlight dark:bg-highlight-dark">
                  <Link
                    href="#encapsulation"
                    className={`p-2 pe-2 w-full rounded-none lg:rounded-s-2xl text-start hover:bg-gray-200 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5  bg-highlight link ${
                      hash === "#StructuredProgramming" ? "bg-sky-200" : ""
                    }`}
                  >
                    Encapsulamiento
                  </Link>
                </li>
                <li className="text-sm  rounded-s-xl bg-highlight dark:bg-highlight-dark">
                  <Link
                    href="#example-encapsulation"
                    className={`p-2 pe-2 w-full rounded-none lg:rounded-s-2xl text-start hover:bg-gray-200 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5  bg-highlight link ${
                      hash === "#StructuredProgramming" ? "bg-sky-200" : ""
                    }`}
                  >
                    Ejemplo de encapsulamiento
                  </Link>
                </li>
                <li className="text-sm  rounded-s-xl bg-highlight dark:bg-highlight-dark">
                  <Link
                    href="#inheritance"
                    className={`p-2 pe-2 w-full rounded-none lg:rounded-s-2xl text-start hover:bg-gray-200 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5  bg-highlight ${
                      hash === "#Poo" ? "bg-sky-200" : ""
                    }`}
                  >
                    Herencia
                  </Link>
                </li>
                <li className="text-sm  rounded-s-xl bg-highlight dark:bg-highlight-dark">
                  <Link
                    href="#example-inheritance"
                    className={`p-2 pe-2 w-full rounded-none lg:rounded-s-2xl text-start hover:bg-gray-200 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5  bg-highlight ${
                      hash === "#Poo" ? "bg-sky-200" : ""
                    }`}
                  >
                    Ejemplo de Herencia
                  </Link>
                </li>
                <li className="text-sm  rounded-s-xl bg-highlight dark:bg-highlight-dark">
                  <Link
                    href="#polymorphism"
                    className={`p-2 pe-2 w-full rounded-none lg:rounded-s-2xl text-start hover:bg-gray-200 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5  bg-highlight ${
                      hash === "#Poo" ? "bg-sky-200" : ""
                    }`}
                  >
                    Polimorfismo
                  </Link>
                </li>
                <li className="text-sm  rounded-s-xl bg-highlight dark:bg-highlight-dark">
                  <Link
                    href="#example-polymorphism"
                    className={`p-2 pe-2 w-full rounded-none lg:rounded-s-2xl text-start hover:bg-gray-200 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5  bg-highlight ${
                      hash === "#Poo" ? "bg-sky-200" : ""
                    }`}
                  >
                    Ejemplo de Polimorfismo
                  </Link>
                </li>
                <li className="text-sm  rounded-s-xl bg-highlight dark:bg-highlight-dark">
                  <Link
                    href="#Abstraction"
                    className={`p-2 pe-2 w-full rounded-none lg:rounded-s-2xl text-start hover:bg-gray-200 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5  bg-highlight ${
                      hash === "#Poo" ? "bg-sky-200" : ""
                    }`}
                  >
                    Abstracción
                  </Link>
                </li>
                <li className="text-sm  rounded-s-xl bg-highlight dark:bg-highlight-dark">
                  <Link
                    href="#example-Abstraction"
                    className={`p-2 pe-2 w-full rounded-none lg:rounded-s-2xl text-start hover:bg-gray-200 dark:hover:bg-gray-80 relative flex items-center justify-between ps-5  bg-highlight ${
                      hash === "#Poo" ? "bg-sky-200" : ""
                    }`}
                  >
                    Ejemplo de Abstracción
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
