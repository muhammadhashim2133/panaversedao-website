import React from "react";
import Image from "next/image";
function Section5() {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(/sixth-section-background.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "auto",
        width: "full",
      }}>
      <div className="  flex mx-10 md:20   flex-col gap-2.5 items-center text-center ">
        <h1 className="mt-20 text-slate-200   text-4xl  font-bold">Specialized Tracks</h1>
        <p className="text-slate-200 mt-2 text-xl">
          After completing the first three quarters the participants will select one or more specializations consisting
          of two courses each:
        </p>
        <div className="flex mb-20 justify-center flex-wrap gap-4 ">
          <div className="relative">
            <Image src="/specialized.png" width={350} height={800} />
            <h1 className="h1 text-slate-200 absolute top-[34%]  left-0 font-sans font-bold text-lg md:text-xl">
              Ambient Computing and IoT Specialization
            </h1>
            <p className="p text-slate-200 absolute top-[45%]  left-0 mt-4 p-3 font-sans text-sm font-semibold sm:font-semibold sm:text-base">
              Genomics is the study of the total genetic makeup of individual organisms, and how this genetic
              information is structured..
            </p>
            <button
              className=" absolute bottom-4 text-slate-200 hover:font-bold font-semibold "
              style={{
                backgroundImage: `url( /button.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: "44px",
                width: "130px",
              }}>
              Apply
            </button>
          </div>
          <div className="relative">
            <Image src="/specialized 1.png" width={350} height={800} />
            <h1 className="h1 text-slate-200 absolute top-[30%]  left-0 p-5 font-sans font-bold text-lg md:text-xl">
              Web3 and Metaverse Specialization
            </h1>
            <p className="p text-slate-200 absolute top-[45%] left-0 mt-4 p-3 font-sans text-sm font-semibold sm:font-semibold sm:text-base">
              Genomics is the study of the total genetic makeup of individual organisms, and how this genetic
              information is structured...
            </p>
            <button
              className=" absolute bottom-4 text-slate-200 hover:font-bold font-semibold "
              style={{
                backgroundImage: `url( /button.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: "44px",
                width: "130px",
              }}>
              Apply
            </button>
          </div>
          <div className="relative">
            <Image src="/specialized.png" width={350} height={800} />
            <h1 className="h1 text-slate-200 absolute top-[34%]  left-0 font-sans font-bold text-lg md:text-xl  ">
              Network Programmability and Automation Specialization
            </h1>
            <p className="p text-slate-200 absolute top-[45%] left-0 mt-4 p-3 font-sans text-sm font-semibold sm:font-semibold sm:text-base ">
              Genomics is the study of the total genetic makeup of individual organisms, and how this genetic
              information is structured...
            </p>
            <button
              className=" absolute bottom-4 text-slate-200 hover:font-bold font-semibold "
              style={{
                backgroundImage: `url( /button.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: "44px",
                width: "130px",
              }}>
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
