"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>SEO</li>
        <li>GUEST POSTING</li>
        <li>BLOGING</li>
        <li>Content Writing</li>
        <li>GRaphics</li>
        
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Matric From GOVT AV modern high School</li>
        <li>Intermediate From Govt Graduate College of Commerce</li>
        <li>BS CS From GC University 'at 6th smester'</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>SEARCH ENGINE OPTIMIZATION</li>
        <li>From ENZIPE</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/assests/about.jpg"width={800} height={900} className="mt-[-35px] w-[1300px] h-[400px] ml-[-30px]" />


        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 font-extrabold text-6xl">About Me</h2>
          <p className="text-base lg:text-lg">
           
My expertise in SEO guest posting lies in crafting compelling content tailored to target audiences, optimizing it for search engines, and securing placements on authoritative websites within relevant niches. I excel in conducting thorough research to identify trending topics and industry insights, ensuring that each guest post delivers valuable information and engages readers effectively. Additionally, I am proficient in building relationships with website owners and editors, facilitating guest post opportunities that contribute to improved search rankings, increased organic traffic, and enhanced brand visibility for clients.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;