"use client"
import Image from 'next/image.js'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12" >
       <div className="col-span-7 place-self-center text-center sm:text-left">
       <div className="relative h-[290px] w-[290px] rounded-full bg-slate-800 p-4 lg:h-[540px] lg:w-[540px]"><Image src="/images/HS.jpg" alt="Logo" className="rounded-full object-cover" width={400} height={400} /></div>
       <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
        <span className="bg-gradient-to-br from-black via-slate-800 to-zinc-50 bg-clip-text text-transparent border-slate-950">Hey everyone! I am Haris Saeed</span>
        <br/>
        <TypeAnimation className="from-slate-950 via-slate-300 to-zinc-50 text-black"
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
       <p className="mb-6 text-ellipsis from-slate-950 via-slate-300 to-zinc-50 text-black sm:text-lg lg:text-xl border-t-neutral-600">Sales | Customer Service | Administration | Operations | Marketing | Communication | Brand Building | Strategy | Digital Marketing | Advertising</p>
       <div>
       <a href="#contact" className="mr-4 block w-full rounded-full bg-gradient-to-br from-slate-950 via-slate-300 to-zinc-50 px-5 py-2 text-center text-black hover:bg-orange-600 sm:w-fit">Contact Me</a>
       <br/>
       <br/>

       <a href="https://www.youtube.com/@harissaid1983" className="mr-4 block w-full rounded-full bg-gradient-to-br from-slate-950 via-slate-300 to-zinc-50 px-5 py-2 text-center text-black hover:bg-orange-600 sm:w-fit">My Channel</a>

       </div>
       </div>
       <div className="col-span-5 mt-4 place-self-center lg:mt-0">
       <div className="relative h-[290px] w-[290px] rounded-full bg-black p-4 lg:h-[540px] lg:w-[540px]">
       <Image src="/images/HSSD.png" alt="HSSD Logo" className="rounded-full object-cover" width={500} height={500} />  
       </div>
       </div>
    </div>
  )
}

export default HeroSection