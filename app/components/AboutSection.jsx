"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 text-lg">
        <li>Brand management (39 endorsements)</li>
        <li>Creative Strategy (34 endorsements)</li>
        <li>Media planning (24 endorsements)</li>
        <li>Research (7 endorsements)</li>
        <li>Marketing Management(26 endorsements)</li>
        <li>Strategic Planning (19 endorsements)</li>
        <li>Advertising (56 endorsements)</li>
        <li>Integrated Marketing (36 endorsements)</li>
        <li>Market Planning (12 endorsements)</li>
        <li>CRM (25 endorsements)</li>
        <li>Management Research (7 endorsements)</li>
        <li>Management (21 endorsements)</li>
        <li>Marketing (20 endorsements)</li>
        <li>Strategy (10 endorsements)</li>
        <li>Social Media (6 endorsements)</li>
        <li>Marketing Strategy (18 endorsements)</li>
        <li>Brand Development (9 endorsements)</li>
        <li>Press Release (5 endorsements)</li>
        <li>Marketing Communications (15 endorsements)</li>
        <li>Digital marketing (8 endorsements)</li>
        <li>Social media Marketing (9 endorsements)</li>
        <li>Team Management (18 endorsements)</li>
        <li>Market Research (13 endorsements)</li>
        <li>Team Leadership (2 endorsements)</li>
        <li>Business Development (2 endorsements)</li>
        <li>Project Planning (2 endorsements)</li>
        <li>Teamwork (2 endorsements)</li>
        <li>Sales (2 endorsements)</li>
        <li>Leadership (2 endorsements)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 justify-center text-lg">
      <Image src="/images/UNSW.png" width={70} height={70} alt="New" className="justify-center" />
      <li className="text-lg"><h1>University of New South Wales</h1><h2>Learn to Lead with UNSW 2022</h2></li>
      <Image src="/images/UNSW.png" width={70} height={70} alt="New" />
      <li className="text-lg" ><h1>University of New South Wales</h1><h2>Learn to Lead with UNSW 2021</h2></li>
      <Image src="/images/World Education Services.png" width={70} height={70} alt="New" />
      <li className="text-lg"><h1>World Education Services</h1><h2>Verified International Academic Qualifications</h2></li>
      <Image src="/images/harvard_business_school_logo.png" width={70} height={70} alt="New" />
      <li className="text-lg"><h1>Harvard Business School</h1><h2>Customer Focus</h2></li>
    </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 justify-center text-lg">
        <Image src="/images/UNSW.png" width={70} height={70} alt="New" />
        <li className="text-lg"><h1>University of New South Wales</h1><h2>Masters, Marketing</h2><h3>2017-2018</h3></li>
        <Image src="/images/Baharia.png" width={70} height={70} alt="New" />
        <li className="text-lg"><h1>Baharia University</h1><h2>MBA, Marketing</h2><h3>2006-2008</h3></li>
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
    <section className="text-black" id="about">
      <div className="items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 xl:gap-16 xl:px-16 text-black">
        <Image src="/images/travel.jpg" width={500} height={500} alt="New" />
        <div className="mt-10 flex h-full flex-col text-center md:mt-auto bg-black/80 backdrop-blur-md rounded-3xl shadow-lg border border-gray-700 p-8 md:p-12 lg:p-16 text-black bg-gradient-to-l from-gray-800 via-gray-300 to-white">
  <h2 className="mb-4 text-4xl font-bold text-black">About Me</h2>
  <p className="text-base lg:text-lg text-black">
    Opinion that can change lives. I have lived in Australia, Gulf, Pakistan, Thailand and now in Canada. 
    I have studied and worked in all these countries and have experienced life. My vlogs are for 
    the people who are seeking help, guidance, and information about all the above-mentioned countries. 
    The idea of this channel is to be the source of information for the people around the world.
  </p>
  <div className="mt-8 flex-column justify-around bg-gradient-radial from-black via-gray-600 to-neutral-300 rounded-full">
    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
      {" "}Skills{" "}
    </TabButton>
    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
      {" "}Education{" "}
    </TabButton>
    <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
      {" "}Certifications{" "}
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
