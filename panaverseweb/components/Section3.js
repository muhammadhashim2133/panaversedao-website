import React from "react";
import Image from "next/image";

function Section3() {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(/fourth-section-background.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "auto",
      }}>
      <div className="   flex flex-col mx-10 md:20 gap-4  items-center text-center   ">
        <h1 className="mt-20 text-slate-200   text-4xl  font-bold">Program of Studies</h1>
        <p className="text-slate-200  mt-2 mb-20 text-xl">
          This is a beginner's curriculum for software development. It spans five quarters and lasts for fifteen months.
          The curriculum covers Object-Oriented Programming and Full-Stack Web 2.0 development. The program employs a
          hybrid teaching format with onsite and online classes, emphasizing hands-on learning through projects.
        </p>
      </div>
    </div>
  );
}

export default Section3;
