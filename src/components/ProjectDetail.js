import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import projects from "../utils/projectData";
import { useParams } from "react-router-dom";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import gsap from "gsap";

function ProjectDetail() {
  const { name: projectName } = useParams();
  const [projectDets, setProjectDets] = useState({});
  const imgRef = useRef();
  const bottomRef = useRef();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    if (imgRef.current && bottomRef.current) {
      gsap.fromTo(
        imgRef.current,
        {
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
        bottomRef.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.6,
          ease: "power2.out",
        }
      );
    }

    const data = projects.filter((p) => p.id === projectName);
    setProjectDets(data[0] || {});

    return () => {
      cancelAnimationFrame(raf);
    };
  }, [projectName]);

  return (
    <div className="dark:bg-[#121212]">
      <Navbar />
      {projectDets ? (
        <div className="px-40 sm:px-16 xs:px-7">
          <div ref={imgRef}>
            <div className="w-full bg-[#f0f0f0] mt-10 rounded-xl transition-all duration-300 flex items-center justify-center dark:bg-[#282828]">
              <img
                src={projectDets.image}
                alt=""
                className="w-3/4 h-full object-cover transition-all duration-500"
              />
            </div>
          </div>
          <div
            className="flex justify-between items-center dark:text-white pt-10 sm:flex-col sm:justify-start sm:items-start sm:gap-5"
            ref={bottomRef}
          >
            <h1 className="text-4xl font-bold">{projectDets.name}</h1>
            <div className="flex gap-5">
              <button
                className="text-black w-40 py-2 rounded-md bg-purple-300 after:content-[''] after:absolute after:w-full after:translate-x-full after:h-full after:bg-[#f0f0f0] after:top-0 after:left-0 relative z-10 after:-z-10 hover:after:translate-x-0 overflow-hidden after:transition-all after:duration-300 sm:w-fit sm:px-5"
                onClick={() => {
                  window.open(projectDets.github, "_blank");
                }}
              >
                Github
                <i className="devicon-github-original colored pl-3 sm:pl-0"></i>
              </button>
              <button
                className="text-black w-40 flex items-center justify-center py-2 rounded-md bg-purple-300 after:content-[''] after:absolute after:w-full after:translate-x-full after:h-full after:bg-[#f0f0f0] after:top-0 after:left-0 relative z-10 after:-z-10 hover:after:translate-x-0 overflow-hidden after:transition-all after:duration-300 sm:w-20 sm:px-8"
                onClick={() => {
                  window.open(projectDets.link, "_blank");
                }}
                disabled={!projectDets.liveStatus}
              >
                Live <i className="fi fi-br-link-alt pl-3 pt-1"></i>
              </button>
            </div>
          </div>
          <div className="flex gap-10 pb-5 mt-10 sm:flex-wrap">
            {projectDets.techs
              ? projectDets.techs.map((t, i) => (
                  <i className={`devicon-${t} colored text-4xl`} key={i}></i>
                ))
              : null}
          </div>
          <div className="flex items-start mt-10 dark:text-white sm:flex-col">
            <h1 className="w-1/4 text-4xl font-medium sm:w-full sm:pb-4">
              Brief
            </h1>
            <div className="w-3/4 sm:w-full">
              <h2 className="text-xl font-semibold">
                {projectDets.brief?.heading || "N/A"}
              </h2>
              <p className="leading-relaxed pt-10">
                {projectDets.brief?.desc || "No description available."}
              </p>
            </div>
          </div>
          <div className="flex items-start mt-10 dark:text-white sm:flex-col">
            <h1 className="w-1/4 text-4xl font-medium sm:w-full sm:pb-4">
              Development Process
            </h1>
            <div className="w-3/4 sm:w-full sm:px-5">
              <ol className="list-decimal">
                {projectDets.dProcess ? (
                  projectDets.dProcess.map((dp, i) => (
                    <li className="pb-5" key={i}>
                      <h1 className="font-semibold pb-2 text-xl">
                        {dp.listHead}
                      </h1>
                      <p>{dp.listDesc}</p>
                    </li>
                  ))
                ) : (
                  <li>No development process details available.</li>
                )}
              </ol>
            </div>
          </div>
          <div className="flex items-start mt-10 dark:text-white sm:flex-col">
            <h1 className="w-1/4 text-4xl font-medium sm:w-full sm:pb-4">
              Ongoing
            </h1>
            <div className="w-3/4 sm:w-full">
              <h2 className="text-2xl font-semibold">
                {projectDets.ongoing?.ongoingHead || "N/A"}
              </h2>
              <p className="leading-relaxed pt-10">
                {projectDets.ongoing?.ongoingDesc ||
                  "No ongoing details available."}
              </p>
            </div>
          </div>
          <div className="py-20 dark:text-white">
            <p className="pb-2">Imagined and developed by Varun.</p>
            <p>&copy; Varun C 2024</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ProjectDetail;
