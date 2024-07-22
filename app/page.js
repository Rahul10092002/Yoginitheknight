import About from "@/components/About/About";
import Courses from "@/components/Courses/page";
import Hero from "@/components/Hero/page";
import Navbar from "@/components/Navbar/page";
import Services from "@/components/Services/page";


export default function Home() {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <Services />
        <Courses />
        <About/>
      </div>
     
    </>
  );
}
