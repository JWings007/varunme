import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

function Home() {
  const headRef = useRef();
  const socialRef = useRef();
  const heroBottom = useRef();
  const cursorRef = useRef();
  const [dets, setDets] = useState({
    x: 0,
    y: 0,
  });

  useGSAP(() => {
    gsap.fromTo(
      headRef.current,
      {
        delay: 2,
        opacity: 0,
        y: 100,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
      }
    );
    gsap.fromTo(
      socialRef.current,
      {
        opacity: 0,
        x: 100,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      heroBottom.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        delay: 0.5,
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
  });

  useEffect(() => {
    // window.scrollTo(0, 0)
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleMouseMove = (e) => {
      setDets({
        x: e.clientX,
        y: e.clientY,
      });

      gsap.to(cursorRef.current, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        ease: "power2.out",
        duration: 0.7,
      });
    };

    const handleMouseEnter = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        ease: "power2.out",
        scale: 4,
        mixBlendMode: "screen",
      });
    };

    const handleMouseLeave = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        ease: "power2.out",
        scale: 1,
        mixBlendMode: "normal",
      });
    };

    const headElement = headRef.current;
    headElement.addEventListener("mouseenter", handleMouseEnter);
    headElement.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative dark:bg-[#121212]">
      <div
        className="fixed h-5 w-5 bg-purple-400 rounded-[50%] z-50 pointer-events-none cursor sm:hidden"
        ref={cursorRef}
      ></div>
      <Navbar />
      <div className="flex justify-between px-40 sm:px-16 xs:px-7 xs:flex-col">
        <div
          className="h-[70vh] flex flex-col justify-center gap-5 cursor-none xs:h-[60vh]"
          ref={headRef}
        >
          <h1 className="font-extrabold text-8xl text-[#cccccc] tracking-wide dark:text-[#404040] sm:text-7xl xs:text-6xl">
            Varun C.
          </h1>
          <h1 className="font-extrabold text-8xl tracking-wide dark:text-white sm:text-7xl xs:text-6xl">
            Web Developer.
          </h1>
        </div>
        <div
          className="flex flex-col justify-center gap-14 items-center xs:flex-row xs:py-5 xs:justify-start"
          ref={socialRef}
        >
          <a
            href="https://www.linkedin.com/in/varun-c-06a480252/"
            target="_blank"
            className="cursor-pointer hover:text-[#cccccc] hover:-translate-y-2 transition-all text-2xl dark:text-white dark:hover:text-purple-400 xs:text-3xl"
          >
            <i className="fi fi-brands-linkedin"></i>
          </a>
          <a
            href="https://github.com/JWings007"
            target="_blank"
            className="cursor-pointer hover:text-[#cccccc] hover:-translate-y-2 transition-all text-2xl dark:text-white dark:hover:text-purple-400 xs:text-3xl"
          >
            <i className="fi fi-brands-github"></i>
          </a>
          <a
            href="https://www.instagram.com/igot_varun/"
            target="_blank"
            className="cursor-pointer hover:text-[#cccccc] hover:-translate-y-2 transition-all text-2xl dark:text-white dark:hover:text-purple-400 xs:text-3xl"
          >
            <i className="fi fi-brands-instagram"></i>
          </a>
        </div>
      </div>
      <div
        className="px-40 flex justify-between pb-10 sm:px-16 sm:flex-col sm:gap-8 xs:px-7"
        ref={heroBottom}
      >
        <div>
          <h1 className="text-[#79807c] font-bold text-xl pb-3">Student at</h1>
          <a
            href="https://dbit.co.in/"
            target="_blank"
            className="dark:text-white mb-1 font-light tracking-wide text-[#666666] after:content-[''] after:absolute after:w-0 after:h-[2px] after:-bottom-1 after:bg-purple-500 after:rounded-md relative after:left-0 hover:after:w-full after:transition-all hover:italic"
          >
            Don Bosco Institute of Technology
          </a>
          <p className="dark:text-white font-light tracking-wide text-[#666666]">
            Bengaluru, IN
          </p>
        </div>
        <div>
          <h1 className="text-[#79807c] font-bold text-xl pb-3">
            Currently in
          </h1>
          <h1 className="dark:text-white font-light tracking-wide text-[#666666]">
            4th year
          </h1>
        </div>
        <div>
          <h1 className="text-[#79807c] font-bold text-xl pb-3">Interests</h1>
          <p className="dark:text-white font-light tracking-wide text-[#666666]">
            Web 3.0
          </p>
          <p className="dark:text-white font-light tracking-wide text-[#666666]">
            App Development
          </p>
        </div>
      </div>
      <Projects data={dets} />
      <Skills />
      <Resume />
      <Footer />
    </div>
  );
}

export default Home;
