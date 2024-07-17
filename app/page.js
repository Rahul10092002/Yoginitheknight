import Courses from "@/components/Courses/page";
import Hero from "@/components/Hero/page";
import Navbar from "@/components/Navbar/page";
import Services from "@/components/Services/page";


export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-br from-zinc-600 to-orange-300">
        <Navbar />
        <Hero />
        <Services />
        <Courses/>
      </div>
     
    </>
  );
}
