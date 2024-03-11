import { FaSquareGithub } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/navbar/Navbar";
import AboutSection from "./components/AboutSection.tsx/AboutSection";
import ProjectsSection from "./components/ProjectSection/ProjectSection";
import EmailSection from "./components/EmailSection/EmailSection";
import AchievementsSection from "./components/AchievementSection/AchievementSection";

export default function Home() {
  return (
    <main className=" bg-[#121212]   px-12 py-4">
       <Navbar/>
    <HeroSection/>
    <AchievementsSection/>
   <AboutSection/>
   <ProjectsSection/>
   <EmailSection/>
   <div className="flex flex-row ml-[10px] mt-[-200]" >
   <a href='https://www.facebook.com/shehroz.ali.165470?mibextid=ZbWKwL'><IoLogoLinkedin  className="text-white w-8 h-8 ml-8"/></a>
   <a href='https://www.facebook.com/shehroz.ali.165470?mibextid=ZbWKwL'><CiFacebook   className="text-white w-8 h-8 ml-8"/></a>
   <a href="https://wa.me/923021635946" target="_blank"><ImWhatsapp className="text-white w-8 h-8 ml-8" /></a>
   <a href='https://www.instagram.com/invites/contact/?i=17502c29sgtaf&utm_content=2h43xpa'><BsInstagram className="text-white w-8 h-8 ml-8"/></a>
  
   </div>

    </main>
  );
}
