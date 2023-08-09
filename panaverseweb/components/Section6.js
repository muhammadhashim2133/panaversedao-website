import React from "react";
import Image from "next/image";

function Section6() {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(/fourth-section-background.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "auto",
        width: "full",
      }}>
      <div className=" flex flex-col gap-4 mx-10 md:mx-20  items-center text-center   ">
        <h1 className=" text-slate-200 mt-20    text-4xl  font-bold">The Outcome for Participants of the Program</h1>
        <p className="text-slate-200 mb-20 text-xl">
          After completing the first three quarters the participants will select one or more specializations consisting
          of two courses each:
        </p>
      </div>
    </div>
  );
}

export default Section6;
