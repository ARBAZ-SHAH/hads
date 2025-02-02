"use client"
import Image from 'next/image.js'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12">
      <div className="col-span-7 place-self-center text-center sm:text-left">
        <div className="relative h-[290px] w-[290px] rounded-full bg-gradient-to-r from-white via-black to-white p-6 lg:h-[450px] lg:w-[450px] justify-center">
          <Image src="/images/HS.jpg" alt="Logo" className="rounded-full object-cover" width={400} height={400} />
        </div>
        <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl border-text">
        <span className="bg-gradient-radial from-violet-500 via-black to-blue-600 bg-clip-text text-transparent">
          Hey everyone! I am Haris Saeed
          </span>

          <br/>
          <TypeAnimation
            className="from-slate-950 via-slate-300 to-zinc-50 text-black border-text"
            sequence={[
              'Youtuber',
              1000,
              'Pakistani Canadian',
              1000,
              'Advertising Manager ',
              1000,
              'Traveller ',
              1000
            ]}
            wrapper="span"
            speed={59}
            repeat={Infinity}
          />
        </h1>
        <div className="mb-6 flex flex-wrap gap-4 text-ellipsis text-black sm:text-lg lg:text-xl border-text font-bold">
  <TypeAnimation sequence={['Sales', 1000]} wrapper="span" speed={59} repeat={Infinity} />
  <TypeAnimation sequence={['Customer Service', 1000]} wrapper="span" speed={59} repeat={Infinity} />
  <TypeAnimation sequence={['Operations', 1000]} wrapper="span" speed={59} repeat={Infinity} />
  <TypeAnimation sequence={['Traveller', 1000]} wrapper="span" speed={59} repeat={Infinity} />
  <TypeAnimation sequence={['Digital Marketing', 1000]} wrapper="span" speed={59} repeat={Infinity} />
  <TypeAnimation sequence={['Communication', 1000]} wrapper="span" speed={59} repeat={Infinity} />
  <TypeAnimation sequence={['Strategy', 1000]} wrapper="span" speed={59} repeat={Infinity} />
  <TypeAnimation sequence={['Advertising', 1000]} wrapper="span" speed={59} repeat={Infinity} />
</div>

<div className="flex flex-wrap justify-around gap-x-20 gap-y-10">
  <a 
    href="#contact" 
    className="rounded-full bg-gradient-to-br from-violet-500 via-black to-blue-600 px-5 py-2 text-center text-white hover:bg-orange-600 sm:w-fit border-text"
  >
    Contact Me
  </a>

  <a 
    href="https://www.youtube.com/@harissaid1983" 
    className="rounded-full bg-gradient-to-br from-violet-500 via-black to-blue-600 px-5 py-2 text-center text-white hover:bg-orange-600 sm:w-fit border-text"
  >
    My Channel
  </a>
</div>


      </div>

      <div className="col-span-5 mt-4 place-self-center lg:mt-0">
        <div className="relative h-[290px] w-[290px] rounded-full bg-black p-4 lg:h-[540px] lg:w-[540px]">
          <Image src="/images/HSSD.png" alt="HSSD Logo" className="rounded-full object-cover" width={500} height={500} />  
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
