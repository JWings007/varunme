import React from "react";
import resume from "../assets/images/resume.png";
import resumePDF from "../assets/Resume.pdf";

function Resume() {
  return (
    <div className="px-40 py-20 sm:px-16 xs:px-7">
      <h1 className="text-5xl font-semibold pb-5 dark:text-white">Resume</h1>
      <p className="dark:text-white">
        Discover my journey—download my resume to see how passion meets
        expertise.
      </p>
      <a href={resumePDF} download={"Resume.pdf"}>
        <div className="flex mt-5 gap-32 items-center group cursor-pointer">
          <div className="bg-[#f0f0f0] w-1/2 flex items-center justify-center py-10 rounded-md group-hover:bg-[#f9f9f9] transition-all duration-300 dark:bg-[#282828] dark:hover:bg-[#191919] dark:group-hover:bg-[#191919] sm:px-5 xs:w-full">
            <img
              src={resume}
              alt=""
              className="w-52 shadow-lg rounded-md group-hover:scale-[1.07] transition-all duration-300"
            />
          </div>
          <button className="bg-purple-400 h-10 px-10 rounded-md text-white sm:px-5 xs:text-sm xs:px-2 w-40">
            Hit ME!
          </button>
        </div>
      </a>
    </div>
  );
}

export default Resume;
