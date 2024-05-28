import Image from "next/image";
import Navbar from "../../Navbar";
import VerticalNavbar from "../../VerticalNavbar";

export default function Page() {
  return (
    <div>
      <Navbar />
    <div className="grid  lg:grid-cols-[20rem,auto,20rem] lg:grid-cols-sidebar-content 2xl:grid-cols-sidebar-content-toc">
      <VerticalNavbar />
      <main className="min-w-0 isolate pl-4">
        <article className="font-normal break-words text-primary ">
          <div className="ps-0">
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aspernatur rem magnam molestias pariatur alias unde consectetur libero ipsam dolore quos distinctio cumque ut quasi aut, tenetur debitis placeat iure.
              Tempore quis quo doloremque excepturi consectetur optio pariatur praesentium earum et omnis impedit veritatis quas repudiandae, fugit, reprehenderit nisi accusantium porro reiciendis voluptas, adipisci beatae unde saepe quos aliquid. Deserunt.
              Blanditiis vel non nemo rerum, hic id aut veritatis culpa temporibus ratione quisquam amet. Perspiciatis temporibus, magnam, libero cupiditate ea vitae quo maxime blanditiis necessitatibus, explicabo pariatur quam sunt iusto!
              Consectetur minus doloribus necessitatibus repellat debitis. Reiciendis at, quibusdam repellat sapiente inventore possimus distinctio explicabo corporis dolores molestiae, delectus, libero est in odit nemo eos quasi earum harum officia eius.
              Fugiat, nam quibusdam aliquid voluptates expedita maxime fuga delectus nostrum dolorum. Unde aliquid vel, laborum iusto mollitia alias veniam exercitationem eveniet? Nam corporis velit illo quaerat quis ratione, illum voluptatem.</p>
            </div>
          </div>
        </article>
      </main>
      <div className=" lg:max-w-custom-xs 2xl:block">
<nav className="ps-0">
  <div>
    <ul>
      <li>
      Rutas de Aprendizaje
      </li>
    </ul>
  </div>
</nav>
      </div>
    </div>
    </div>
  );
}
