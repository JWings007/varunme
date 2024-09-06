import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const pRef = useRef(null);
  const pParentRef = useRef(null);

  useEffect(() => {
    if (pRef.current && pParentRef.current) {
      const text = new SplitType(pRef.current, {
        types: "chars, words",
      });

      gsap.from(text.chars, {
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: pParentRef.current,
          scroller: document.body,
          start: "top 70%",
          end: "top 0%",
          toggleActions: "play none play reverse",
          scrub: 3,
        },
      });
    }

    const handleMouseEnter = (event) => {
      gsap.to(document.querySelector(".cursor"), {
        scale: 4,
      });
      document.querySelector(".cursor").style.mixBlendMode = "screen";
    };

    const handleMouseLeave = (event) => {
      gsap.to(document.querySelector(".cursor"), {
        scale: 1,
      });
      document.querySelector(".cursor").style.mixBlendMode = "normal";
    };

    pRef.current.addEventListener("mouseenter", handleMouseEnter);
    pRef.current.addEventListener("mouseleave", handleMouseLeave);
  }, []);

  return (
    <div
      className="h-screen flex items-center px-40 justify-center lg:px-20 sm:px-16 xs:px-7"
      ref={pParentRef}
    >
      <p
        className="text-7xl leading-[1.1] cursor-none text-[#666666] dark:text-white lg:text-6xl sm:text-5xl sm:leading-tight xs:text-4xl"
        ref={pRef}
      >
        Crafting seamless experiences with React.js, Node.js, and JavaScript, I
        blend MongoDB and MySQL for dynamic solutions. From pixel-perfect
        designs in Figma and Photoshop to efficient Go coding, my toolkit
        includes HTML, CSS, Postman, Premiere Pro, and Illustrator, all driven
        by RESTful principles.
      </p>
    </div>
  );
}

export default Skills;
