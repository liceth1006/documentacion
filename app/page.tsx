
import Navbar from "./Navbar";
import Hero from './Components/Hero/Hero'
export default function Home() {
  return (
    <div className="grid grid-cols only-content lg:grid-cols-sidebar-content 2xl:grid-cols-sidebar-content-toc ">
      <Navbar/>
<Hero></Hero>
    </div>
  );
}
