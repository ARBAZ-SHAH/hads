"use client";
import { useEffect } from "react";
import NavbarAbout from "./NavbarAbout";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import AchievementsSection from "../components/AchievementsSection";

export default function About() {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.id = "snow-canvas";
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = "9999";
    canvas.style.pointerEvents = "none";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const snowflakeImage = new Image();
    snowflakeImage.src = "/images/snow.png";

    class Snowflake {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 30 + 1;
        this.depth = Math.random();
        this.speed = (Math.random() * 1 + 0.9) * (1 - this.depth);
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 2 - 1;
      }
      update() {
        this.y += this.speed;
        this.rotation += this.rotationSpeed;
        if (this.y > canvas.height) {
          this.reset();
          this.y = -this.size;
        }
      }
      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        const scale = 0.5 + 0.5 * this.depth;
        ctx.scale(scale, scale);
        ctx.globalAlpha = 0.8 * scale;
        ctx.drawImage(
          snowflakeImage,
          -this.size / 2,
          -this.size / 2,
          this.size,
          this.size
        );
        ctx.restore();
      }
    }

    class SnowParticle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1 + 1;
        this.speedY = Math.random() * 1.5 + 1;
        this.speedX = Math.random() * 0.3 - 0.25;
        this.opacity = Math.random() * 0.6 + 0.4;
      }
      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        if (this.y > canvas.height || this.x < 0 || this.x > canvas.width) {
          this.reset();
          this.y = -this.size;
        }
      }
      draw() {
        ctx.save();
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const snowflakes = Array.from({ length: 200 }, () => new Snowflake());
    const snowParticles = Array.from({ length: 100 }, () => new SnowParticle());

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      snowParticles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      snowflakes.forEach((snowflake) => {
        snowflake.update();
        snowflake.draw();
      });
      requestAnimationFrame(animate);
    }

    snowflakeImage.onload = () => {
      animate();
    };

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.remove();
    };
  }, []);

  return (
    <main
      className="flex min-h-screen flex-col relative"
      style={{
        backgroundImage: "url('/images/daniel-olah-ZbEURDlbE6o-unsplash.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <NavbarAbout />
      <div className="container mx-auto mt-24 px-12 py-4">
        <AchievementsSection />
        <AboutSection />
      </div>
      <Footer />
    </main>
  );
}
