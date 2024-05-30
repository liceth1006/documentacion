import Navbar from "../Navbar";

 
export default function LearnLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <>
     <Navbar />
      <main className="" >{children}</main>

    </>
  )
}
