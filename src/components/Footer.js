import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function Footer() {
  const buttonRef = useRef(null);
  const [buttonText, setButtonText] = useState("Send it my Way");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    setLoading(true);
    setButtonText("");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby5qpBuSpwusnL9IVsBDYnQJTzkVrl64dSqXPAcH1Ac8g6oKCp6UPG0WcjUk55yRMq1/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();
      if (result.result === "success") {
        buttonRef.current.style.backgroundColor = "#00df72";
        setButtonText("Submitted successfully");
        setTimeout(() => {
          buttonRef.current.style.backgroundColor = "#d8b4fe";
          setButtonText("Send it my Way");
        }, 5000);
      } else {
        alert("There was an error submitting... try again");
        setButtonText("Send it my Way");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error submitting... try again");
      setButtonText("Send it my Way");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
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

    buttonRef.current.addEventListener("mouseenter", handleMouseEnter);
    buttonRef.current.addEventListener("mouseleave", handleMouseLeave);
  }, []);

  return (
    <div className="px-40 py-20 sm:px-16 xs:px-7" id="contact">
      <h1 className="text-5xl font-semibold pb-5 dark:text-white text-[#666666]">
        Get in Touch
      </h1>
      <p className="pb-14 text-[#666666]">
        Let's create something amazing together. Drop me a message, and I'll get
        back to you soon!
      </p>
      <div className="">
        <form
          className="flex gap-10 flex-col w-fit sm:w-full"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-10 sm:flex-col">
            <div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="w-72 h-12 bg-transparent dark:text-white outline-none border-b-2 border-b-[#f0f0f0] focus:border-b-purple-400 transition-all sm:w-full"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="message"
                placeholder="Message"
                className="w-72 h-12 bg-transparent dark:text-white outline-none border-b-2 border-b-[#f0f0f0] focus:border-b-purple-400 transition-all sm:w-full"
                required
              />
            </div>
          </div>
          <button
            className="flex items-center justify-center bg-purple-300 px-8 py-3 rounded-lg transition-all after:content-[''] after:absolute after:w-full after:translate-x-full after:h-full after:bg-[#f0f0f0] after:top-0 after:left-0 relative z-10 after:-z-10 hover:after:translate-x-0 overflow-hidden after:transition-all after:duration-300 sm:after:w-0"
            ref={buttonRef}
            disabled={loading}
          >
            {buttonText}
            {loading && <div className="progress"></div>}
          </button>
        </form>
      </div>
      <div className="flex pt-12 items-center justify-between">
        <div className="">
          <p className="pb-2 text-[#666666]">
            Imagined and developed by Varun.
          </p>
          <p className="text-[#666666]">&copy; Varun C 2024</p>
        </div>
        <div
          className="w-16 h-16 bg-[#d8b4fe] rounded-[50%] flex items-center cursor-pointer justify-center group hover:-translate-y-2 transition-all"
          onClick={() => window.scrollTo(0, 0)}
        >
          <i className="fi fi-rr-arrow-up pt-2 text-xl group-hover:-translate-y-2 transition-all"></i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
