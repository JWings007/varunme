import React, { useEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import soundspace from "../assets/images/soundspace.png";
import hms from "../assets/images/hms.png";
import movied from "../assets/images/movied.png";
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const headRef = useRef();
  const headParent = useRef();
  const project1 = useRef();
  const project2 = useRef();
  const project3 = useRef();
  const p = [project1, project2, project3];

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Desktop animation
      gsap.to(headRef.current, {
        transform: "translateX(-175%)",
        scrollTrigger: {
          trigger: headParent.current,
          scroller: document.body,
          start: "top 0%",
          end: "top -200%",
          scrub: 3,
          pin: true,
        },
      });
    });

    mm.add("(max-width: 639px)", () => {
      // Mobile animation
      gsap.fromTo(
        headRef.current,
        {
          x: 900,
        },
        {
          transform: "translateX(-43%)",
          scrollTrigger: {
            trigger: headParent.current,
            scroller: document.body,
            start: "top 0%",
            end: "top -200%",
            scrub: 3,
            pin: true,
          },
        }
      );
    });

    p.forEach((p) => {
      gsap.fromTo(
        p.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: p.current,
            start: "top 80%",
            toggleActions: "play none play reverse",
          },
        }
      );
    });
  });

  useEffect(() => {
    const handleMouseEnter = (event) => {
      gsap.to(document.querySelector(".cursor"), {
        scale: 4,
      });
      document.querySelector(".cursor").innerHTML = "View";
    };

    const handleMouseLeave = (event) => {
      gsap.to(document.querySelector(".cursor"), {
        scale: 1,
      });
      document.querySelector(".cursor").innerHTML = "";
    };

    p.forEach((e) => {
      e.current.addEventListener("mouseenter", handleMouseEnter);
      e.current.addEventListener("mouseleave", handleMouseLeave);
    });
  }, []);
  return (
    <>
      <div
        className="w-full h-screen overflow-hidden px-40 sm:px-16 sm:flex sm:items-center sm:justify-center sm:flex-col sm:gap-16" 
        ref={headParent}
        data-scroll
        data-scroll-speed="-2"
      >
        <h1
          className="text-[28rem] font-normal cursor-none dark:text-white sm:text-[18rem]"
          ref={headRef}
        >
          WORK<span className="mr-20"></span>GALLERY
        </h1>
        <div className="flex items-center justify-center flex-col">
        <h1 className="text-center font-light text-xl text-[#666666]">SCROLL</h1>
        <i className="fi fi-rr-angle-down text-[#666666]"></i>
        </div>
      </div>
      <div className="w-full px-40 py-20 flex flex-col gap-40 sm:px-16 xs:px-7">
        <a href="/project/soundspace">
          <div className="flex items-start flex-col group" ref={project1}>
            <div className="flex gap-5 pb-5 xs:gap-3">
              <span className="bg-[#f0f0f0] px-5 py-3 rounded-lg text-sm text-[#666666] dark:bg-[#282828] dark:text-white sm:px-3 xs:text-xs xs:px-2">
                REACT JS
              </span>
              <span className="bg-[#f0f0f0] px-5 py-3 rounded-lg text-sm text-[#666666] dark:bg-[#282828] dark:text-white sm:px-3 xs:text-xs xs:px-2">
                NODE JS
              </span>
              <span className="bg-[#f0f0f0] px-5 py-3 rounded-lg text-sm text-[#666666] dark:bg-[#282828] dark:text-white sm:px-3 xs:text-xs xs:px-2">
                MONGODB
              </span>
              <span className="bg-[#f0f0f0] px-5 py-3 rounded-lg text-sm text-[#666666] dark:bg-[#282828] dark:text-white sm:px-3 xs:text-xs xs:px-2">
                TAILWIND
              </span>
            </div>
            <h1 className="text-4xl font-bold pb-4 flex items-center justify-center gap-5 xs:text-3xl dark:text-white">
              SoundSpace.{" "}
              <i className="fi fi-rr-arrow-right pt-3 group-hover:translate-x-4 transition-all duration-500"></i>
            </h1>
            <p className=" dark:text-white text-[#666666]">
              A playlist sharing social media platform, because we care!!
            </p>
            <div className="w-full bg-[#f0f0f0] mt-5 rounded-xl group-hover:bg-[#f9f9f9] transition-all duration-300 dark:bg-[#282828] dark:hover:bg-[#191919] dark:group-hover:bg-[#191919]">
              <img
                src={soundspace}
                alt=""
                className="w-full h-full object-cover group-hover:scale-[1.07] transition-all duration-500"
              />
            </div>
          </div>
        </a>
        <a href="/project/movied">
          <div className="flex items-start flex-col group" ref={project2}>
            <div className="flex gap-5 pb-5 xs:gap-3">
              <span className="bg-[#f0f0f0] px-5 py-3 rounded-lg text-sm text-[#666666] dark:bg-[#282828] dark:text-white sm:px-3 xs:text-xs xs:px-2">
                REACT JS
              </span>
              <span className="bg-[#f0f0f0] px-5 py-3 rounded-lg text-sm text-[#666666] dark:bg-[#282828] dark:text-white sm:px-3 xs:text-xs xs:px-2">
                CSS
              </span>
              <span className="bg-[#f0f0f0] px-5 py-3 rounded-lg text-sm text-[#666666] dark:bg-[#282828] dark:text-white sm:px-3 xs:text-xs xs:px-2">
                JAVASCRIPT
              </span>
            </div>
            <h1 className="text-4xl font-bold pb-4 flex items-center justify-center gap-5 xs:text-3xl dark:text-white">
              MOVIED.{" "}
              <i className="fi fi-rr-arrow-right pt-3 group-hover:translate-x-4 transition-all duration-500"></i>
            </h1>
            <p className=" dark:text-white text-[#666666]">
              Built a responsive website using the TMDB API to showcase detailed
              movie and TV show information with an intuitive, modern UI,
              providing users with data like descriptions, box office stats, and
              ratings.
            </p>
            <div className="w-full bg-[#f0f0f0] mt-5 rounded-xl group-hover:bg-[#f9f9f9] transition-all duration-300 dark:bg-[#282828] dark:hover:bg-[#191919] dark:group-hover:bg-[#191919]">
              <img
                src={movied}
                alt=""
                className="w-full h-full object-cover group-hover:scale-[1.07] transition-all duration-500"
              />
            </div>
          </div>
        </a>
        <a href="/project/hms">
          <div className="flex items-start flex-col group" ref={project3}>
            <div className="flex gap-5 pb-5 xs:gap-3">
              <span className="bg-[#f0f0f0] px-5 py-3 rounded-lg text-sm text-[#666666] dark:bg-[#282828] dark:text-white sm:px-3 xs:text-xs xs:px-2">
                REACT JS
              </span>
              <span className="bg-[#f0f0f0] px-5 py-3 rounded-lg text-sm text-[#666666] dark:bg-[#282828] dark:text-white sm:px-3 xs:text-xs xs:px-2">
                NODE JS
              </span>
              <span className="bg-[#f0f0f0] px-5 py-3 rounded-lg text-sm text-[#666666] dark:bg-[#282828] dark:text-white sm:px-3 xs:text-xs xs:px-2">
                MONGODB
              </span>
              <span className="bg-[#f0f0f0] px-5 py-3 rounded-lg text-sm text-[#666666] dark:bg-[#282828] dark:text-white sm:px-3 xs:text-xs xs:px-2">
                TAILWIND
              </span>
            </div>
            <h1 className="text-4xl font-bold pb-4 flex items-center justify-center gap-5 xs:text-3xl dark:text-white">
              HMS DISTRIBUTORS{" "}
              <i className="fi fi-rr-arrow-right pt-3 group-hover:translate-x-4 transition-all duration-500"></i>
            </h1>
            <p className="dark:text-white text-[#666666]">
              Designed and launched a website for HMS Egg Distributors to update
              and display daily prices of various egg types.
            </p>
            <div className="w-full bg-[#f0f0f0] mt-5 rounded-xl group-hover:bg-[#f9f9f9] transition-all duration-300 dark:bg-[#282828] dark:hover:bg-[#191919] dark:group-hover:bg-[#191919]">
              <img
                src={hms}
                alt=""
                className="w-full h-full object-cover group-hover:scale-[1.07] transition-all duration-500"
              />
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default Projects;
