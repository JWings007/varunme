import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import gsap from "gsap";
import { useRef } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

function About() {
  const cursorRef = useRef();
  const textRef = useRef();
  const playlistRef = useRef();
  const [dets, setDets] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
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

    const handleTextMouseEnter = () => {
      gsap.to(cursorRef.current, {
        ease: "power2.out",
        scale: 4,
        mixBlendMode: "screen",
      });
    };

    const handleTextMouseLeave = () => {
      gsap.to(cursorRef.current, {
        ease: "power2.out",
        scale: 1,
        mixBlendMode: "normal",
      });
    };

    const handlePlaylistMouseEnter = () => {
      gsap.to(cursorRef.current, {
        ease: "power2.out",
        scale: 4,
        mixBlendMode: "screen",
      });
    };

    const handlePlaylistMouseLeave = () => {
      gsap.to(cursorRef.current, {
        ease: "power2.out",
        scale: 1,
        mixBlendMode: "normal",
      });
    };

    const textElement = textRef.current;
    const playlistElement = playlistRef.current;

    textElement.addEventListener("mouseenter", handleTextMouseEnter);
    textElement.addEventListener("mouseleave", handleTextMouseLeave);
    playlistElement.addEventListener("mouseenter", handlePlaylistMouseEnter);
    playlistElement.addEventListener("mouseleave", handlePlaylistMouseLeave);
    window.addEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="dark:bg-[#121212]">
      <div
        className="fixed h-5 w-5 bg-purple-400 rounded-[50%] z-50 pointer-events-none cursor sm:hidden"
        ref={cursorRef}
      ></div>
      <Navbar />
      <div className="px-40 py-20 cursor-none sm:px-16 xs:px-7" ref={textRef}>
        <div>
          <h1 className="text-4xl font-semibold text-[#cccccc] pb-5">
            Hi there, this is Varun<span className="text-purple-500">.</span>
          </h1>
          <p className="text-2xl pb-4 text-[#666666] xs:text-xl">
            A passionate web developer with a knack for crafting innovative
            digital experiences.
          </p>
          <p className="text-2xl pb-4 text-[#666666] xs:text-xl">
            I specialize in front-end technologies like React.js and Node.js. My
            work is driven by a love for solving complex problems and bringing
            ideas to life on the web.
          </p>
          <p className="text-2xl pb-4 text-[#666666] xs:text-xl">
            I constantly explore the latest advancements and push the boundaries
            of what’s possible. From designing pixel-perfect interfaces in Figma
            to optimizing backend performance with MongoDB and MySQL, I’m
            dedicated to creating seamless, user-centric solutions that truly
            make an impact.
          </p>
          <p className="text-2xl text-[#666666] xs:text-xl">
            Outside of coding, I dive into the latest tech trends, experiment
            with new tools, and enjoy sharing knowledge with the developer
            community.
          </p>
        </div>
      </div>
      <div className="px-40 flex justify-between pb-10 sm:px-16 sm:flex-col sm:gap-10 xs:px-7">
        <div>
          <h1 className="text-[#79807c] font-bold text-xl sm:text-3xl pb-3">
            Student at
          </h1>
          <a
            href="https://dbit.co.in/"
            target="_blank"
            className="dark:text-white mb-1 font-light tracking-wide text-[#666666] after:content-[''] after:absolute after:w-0 after:h-[2px] after:-bottom-1 after:bg-purple-500 after:rounded-md relative after:left-0 hover:after:w-full after:transition-all hover:italic"
          >
            Don Bosco Institute of Technology
          </a>
          <p className="dark:text-white font-light tracking-wide text-[#666666]">
            Department of Information Science Engineering
          </p>
          <p className="dark:text-white font-light tracking-wide text-[#666666]">
            4th Year
          </p>
          <p className="dark:text-white font-light tracking-wide text-[#666666]">
            Bengaluru - 560040
          </p>
          <p className="dark:text-white font-light tracking-wide text-[#666666]">
            Karnataka, IN
          </p>
        </div>
        <div>
          <h1 className="text-[#79807c] font-bold text-xl sm:text-3xl pb-3">
            Connect
          </h1>
          <div className="flex flex-col items-start gap-3">
            {" "}
            <p className="font-light tracking-wide text-[#666666]">
              <a
                href="https://www.linkedin.com/in/varun-c-06a480252/"
                target="_blank"
                className="cursor-pointer hover:text-[#cccccc] text-2xl flex items-center justify-center gap-4 group dark:text-white"
              >
                <p className="text-sm">LinkedIN</p>
                <i className="fi fi-brands-linkedin group-hover:translate-x-2 transition-all"></i>
              </a>
            </p>
            <p className="font-light tracking-wide text-[#666666]">
              <a
                href="https://github.com/JWings007"
                target="_blank"
                className="cursor-pointer hover:text-[#cccccc] text-2xl flex items-center justify-center gap-4 group dark:text-white"
              >
                <p className="text-sm">GitHub</p>
                <i className="fi fi-brands-github group-hover:translate-x-2 transition-all"></i>
              </a>
            </p>
            <p className="font-light tracking-wide text-[#666666]">
              <a
                href="mailto:varun3112003@gmail.com"
                target="_blank"
                className="cursor-pointer hover:text-[#cccccc] text-2xl flex items-center justify-center gap-4 group dark:text-white"
              >
                <p className="text-sm">Email</p>
                <i className="fi fi-rr-at group-hover:translate-x-2 transition-all"></i>
              </a>
            </p>
            <p className="font-light tracking-wide text-[#666666]">
              <a
                href="https://www.instagram.com/igot_varun/"
                target="_blank"
                className="cursor-pointer hover:text-[#cccccc] text-2xl flex items-center justify-center gap-4 group dark:text-white"
              >
                <p className="text-sm">Inatagram</p>
                <i className="fi fi-brands-instagram group-hover:translate-x-2 transition-all"></i>
              </a>
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-[#79807c] font-bold text-xl sm:text-3xl pb-3">
            On Going
          </h1>
          <p className="font-light tracking-wide text-[#666666] dark:text-white">
            Web 3.0
          </p>
          <p className="font-light tracking-wide text-[#666666] dark:text-white">
            Flutter
          </p>
          <p className="font-light tracking-wide text-[#666666] dark:text-white">
            GoLang
          </p>
          <p className="font-light tracking-wide text-[#666666] dark:text-white">
            DevOps
          </p>
        </div>
      </div>
      <div className="px-40 py-20 sm:px-16 xs:px-7">
        <h1 className="text-8xl pb-10 cursor-default dark:text-white sm:text-6xl font-medium">
          Beyond the Code
        </h1>
        <div>
          <p className="pb-5 dark:text-white">
            Music fuels my creativity and keeps me energized throughout the day.
            I'm into K-pop, enjoying{" "}
            <span className="text-purple-500">BTS</span>, BLACK
            <span className="text-pink-400">PINK</span>,{" "}
            <span className="text-pink-300">TWICE</span>, and{" "}
            <span className="text-red-800">Stray</span> <span>Kids.</span> Each
            group brings its own unique style and energy to the genre.
          </p>
          <a
            href="https://music.apple.com/in/playlist/%EA%B0%80%EC%9E%A5-%EC%A2%8B%EC%95%84%ED%95%98%EB%8A%94/pl.u-XkD0vlLU2bKRzvW?ls"
            target="_blank"
          >
            <i
              className="fi fi-ss-music-alt bg-red-400 px-3 py-2 pt-3 rounded-lg text-white font-thin"
              ref={playlistRef}
            ></i>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
