import Image from "next/image";
import Navbar from "./Navbar";
import VerticalNavbar from "./VerticalNavbar";

export default function Home() {
  return (
    <div className="grid grid-cols only-content lg:grid-cols-sidebar-content 2xl:grid-cols-sidebar-content-toc">
      <Navbar/>
      <VerticalNavbar/>
<main>
  
</main>
    </div>
  );
}
