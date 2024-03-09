// export default function HEROSECTION() {
//     return(
// <main>
// <h1 className="text-white font-extrabold mb-4 text-4xl lg:text-6xl">Hello,I,m Jawad</h1>
// <p className="text-[#ADB7BE] text-lg lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laboriosam doloremque nisi quibusdam architecto consequuntur aperiam officiis quo, accusantium mollitia earum illum ex ipsam. Ipsam quasi officiis veritatis. Suscipit, at?</p>
// </main>
//     )}
"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
<h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Hello, I'm
    </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "SHEHROZ Ali",
                1000,
                "SEO EXPERT",
                1000,
                "GUEST POSTING",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Looking ! to boost your online presence and enhance your website's visibility? Our SEO guest posting services offer a strategic approach to reaching a broader audience and improving your search engine rankings. With carefully crafted content tailored to your niche, we ensure that your brand gets noticed by the right audience. Let us help you establish authority in your industry while driving organic traffic to your site. Partner with us today and unlock the potential of guest posting for your business.

          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-black-700 bg-white"
            >
              Hire Me
            </Link>
            <Link
              href="/components/cv"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
               Download CV 
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818]  lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/assests/profile.jpg"
              alt="hero image"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[400px] h-[400px]"
              width={250}
              height={200}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;