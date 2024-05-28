import Navbar from "../Navbar";
import VerticalNavbar from "../VerticalNavbar";
 
export default function LearnLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <div className="grid   lg:grid-cols-[20rem,auto] ">
     <VerticalNavbar/> 
      <main className="min-w-0 isolate pl-4 mt-10">{children}</main>
     </div>

    </>
  )
}
