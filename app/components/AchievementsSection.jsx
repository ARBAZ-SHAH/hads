"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Skills",
    value: "30",
    postfix: "+",
  },
  {
    metric: "International Licenses",
    value: "4",
  },
  {
    metric: "Experience",
    value: "16",
    postfix: "-yrs",
  },
  {
    metric: "Subscribers",
    value: "5780",
  },
];

const AchievementsSection = () => {
  return (
    <div className="text-black px-4 py-8 xl:gap-16 sm:py-16 xl:px-16 bg-gradient-radial from-white via-slate-400 to-neutral-800 bg-black/80 backdrop-blur-md rounded-b-full shadow-lg border">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between text-black rounded-b-full">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0 text-black"
            >
              <h2 className="flex flex-row text-4xl font-bold text-black">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-4xl font-bold text-black"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-black text-base" >{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;