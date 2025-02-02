import React from "react";
import Image from 'next/image.js';

const Footer = () => {
  return (
    <footer id="contact" className="footer z-9 rounded-xl border border-l-black border-r-transparent border-t-[#000000]  bg-gradient-to-br from-violet-500 via-black to-blue-300">
      <div className="container flex justify-between p-12">
        {/* Logo Section */}
        <span>
          <Image
            src="/images/HS.jpg"
            alt="Logo"
            className="rounded-full object-cover"
            width={200}
            height={200}
          />
        </span>

        {/* Social Media Links */}
        <div className="flex gap-6 flex-wrap">
          <a
            href="https://www.instagram.com/mharissaid/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/instagram.png"
              alt="Instagram"
              width={40}
              height={40}
              className="hover:opacity-80"
            />
          </a>
          <a
            href="https://www.facebook.com/haris.saeed.1048554"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/facebook.png"
              alt="Facebook"
              width={40}
              height={40}
              className="hover:opacity-80"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/harissaeed83/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/linkedin.png"
              alt="LinkedIn"
              width={40}
              height={40}
              className="hover:opacity-80"
            />
          </a>
          <a
            href="https://www.youtube.com/@harissaid1983"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/youtube.png"
              alt="YouTube"
              width={40}
              height={40}
              className="hover:opacity-80"
            />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-white">All rights reserved.</p>
        <p className="text-white">Please contact me here.</p>
      </div>
    </footer>
  );
};

export default Footer;
