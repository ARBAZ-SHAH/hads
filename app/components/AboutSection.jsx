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
      <ul className="list-disc pl-2">
      <Image src="/images/UNSW.png" width={50} height={50} alt="New" />
      <li><h1>University of New South Wales</h1><h2>Learn to Lead with UNSW 2022</h2></li>
      <Image src="/images/UNSW.png" width={50} height={50} alt="New" />
      <li><h1>University of New South Wales</h1><h2>Learn to Lead with UNSW 2021</h2></li>
      <Image src="/images/World Education Services.png" width={50} height={50} alt="New" />
      <li><h1>World Education Services</h1><h2>Verified International Academic Qualifications</h2></li>
      <Image src="/images/harvard_business_school_logo.png" width={50} height={50} alt="New" />
      <li><h1>Harvard Business School</h1><h2>Customer Focus</h2></li>
    </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <Image src="/images/UNSW.png" width={50} height={50} alt="New" />
        <li><h1>University of New South Wales</h1><h2>Masters, Marketing</h2><h3>2017-2018</h3></li>
        <Image src="/images/Baharia.png" width={50} height={50} alt="New" />
        <li><h1>Baharia University</h1><h2>MBA, Marketing</h2><h3>2006-2008</h3></li>
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
      <div className="items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 xl:gap-16 xl:px-16">
        <Image src="/images/travel.jpg" width={500} height={500} alt="New" />
        <div className="mt-4 flex h-full flex-col text-left md:mt-0">
          <h2 className="mb-4 text-4xl font-bold text-white">About Me</h2>
          <p className="text-base lg:text-lg">
          Opinion that can change lives. I have lived in Australia, Gulf, Pakistan, Thailand and now in Canada. 
            I have studied and worked in all these countries and have experienced life. My vlogs are for 
            the people who are seeking help, guidance, and information about all the above-mentioned countries. 
            The idea of this channel is to be the source of information for the people around the world.
          </p>
          <div className="mt-8 flex flex-row justify-start">
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
