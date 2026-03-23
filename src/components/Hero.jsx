import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import { Link } from "react-scroll";
import profileImg from "../assets/gaurav-photo.png";
import Globe from "./animations/Globe";
import TextType from "./animations/TextType";
import VariableProximity from "./animations/VariableProximity";
export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-greeting",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
      )
        .fromTo(
          ".hero-name",
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          "-=0.4",
        )
        .fromTo(
          ".hero-title",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.4",
        )
        .fromTo(
          ".hero-desc",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.3",
        )
        .fromTo(
          ".hero-btns",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7 },
          "-=0.3",
        )
        .fromTo(
          ".hero-socials a",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
          "-=0.3",
        )
        .fromTo(
          ".hero-image",
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1, ease: "back.out(1.5)" },
          "-=1",
        )
        .fromTo(
          ".hero-glow",
          { scale: 0.5, opacity: 0 },
          { scale: 1, opacity: 0.6, duration: 1.5, ease: "power2.out" },
          "-=1",
        );

      // Floating animation for the image
      gsap.to(".hero-image", {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Globe Particle Background */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <Globe />
      </div>

      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="hero-glow absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="hero-glow absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-400/8 rounded-full blur-[100px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.06),transparent_70%)]" />
      </div>

      <div className="container-custom relative z-10 py-24 md:py-0">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <h1
              ref={titleRef}
              className="hero-name text-5xl md:text-7xl font-extrabold font-[var(--font-display)] mb-4 leading-tight"
            >
              <TextType
                text="Kumar Gaurav"
                speed={0.05}
                delay={0.5}
                cursorClassName="w-1 h-12 md:h-20 bg-blue-500"
              />
            </h1>
            <h2 className="hero-title text-xl md:text-2xl text-blue-400 font-medium mb-6">
              Data Science & AI Enthusiast
            </h2>
            <p className="hero-desc text-text-secondary text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              <VariableProximity
                text="Passionate B.Tech CSE student with expertise in Data Science, Machine Learning, and AI. Building intelligent solutions with Python, Power BI, and modern ML frameworks."
                delay={0.8}
              />
            </p>

            <div className="hero-socials flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/kumarGaurav15"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#0f172a] border border-[#1e3a5f] text-[#94a3b8] hover:text-white hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/kumar-gaurav15"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#0f172a] border border-[#1e3a5f] text-[#94a3b8] hover:text-white hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:kgaurav15062004@gmail.com"
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#0f172a] border border-[#1e3a5f] text-[#94a3b8] hover:text-white hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300"
              >
                <FaEnvelope size={20} />
              </a>
              <a
                href="tel:+919142841451"
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#0f172a] border border-[#1e3a5f] text-[#94a3b8] hover:text-white hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300"
              >
                <FaPhone size={18} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 relative">
            <div className="hero-image relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-blue-600 to-blue-900 p-[3px]">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0f1e] p-1">
                  <img
                    src={profileImg}
                    alt="Kumar Gaurav"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              {/* Orbit ring */}
              <div
                className="absolute inset-[-20px] rounded-full border border-blue-500/15 animate-spin"
                style={{ animationDuration: "15s" }}
              />
              <div
                className="absolute inset-[-40px] rounded-full border border-blue-400/8 animate-spin"
                style={{
                  animationDuration: "25s",
                  animationDirection: "reverse",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[#475569] text-xs tracking-widest uppercase">
          Scroll
        </span>
        <HiArrowDown className="text-blue-400" />
      </div>
    </section>
  );
}
