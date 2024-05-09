import styles from "../Hero/Hero.module.css";
import Image from "next/image";
import Logo from "../../../public/logo-tech.png";
export default function Hero() {
  return (
    <main className="min-w-100 isolate">
      <div className={`font-normal break-words  ${styles.textPrimary}  `}>
        <div className="ps-0">
          <div className="mx-5 mt-12 lg:mt-24 mb-20 lg:mb-32 flex flex-col justify-center">
            <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white ">
              Sumérgete en el Mundo Digital y Descubre tu Pasión por la
              Tecnología{" "}
            </h1>
            <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">Los Bootcamps de Talent Tech ofrecen una experiencia de aprendizaje integral, asegurando que no solo domines habilidades técnicas, sino que también desarrolles la destreza profesional necesaria para destacar en el competitivo panorama tecnológico.</p>
            <div className="mt-10 self-center flex gap-2 w-full sm:w-auto flex-col sm:flex-row ">
              <a
                className="w-full sm:w-auto justify-center transition-transform inline-flex font-bold items-center outline-none  focus:outline-none bg-blue-500 hover:bg-opacity-80 text-lg py-3 rounded-full px-4 sm:px-6"
                href=""
              >
                Aprender
              </a>
              <a
                className="w-full sm:w-auto justify-center transition-transform inline-flex font-bold items-center outline-none  focus:outline-none bg-gray-200 hover:bg-opacity-80 text-lg py-3 rounded-full px-4 sm:px-6"
                href=""
              >
                Proyectos
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-red-500">

      </div>
    </main>
  );
}
