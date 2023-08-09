import React from "react";
import Image from "next/image";
function Section4() {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(/fifth-section-background.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "auto",
        width: "full",
      }}>
      <div className=" flex flex-col mx-10 md:20   gap-4 items-center text-center   ">
        <h1 className=" text-slate-200 mt-20  text-4xl  font-bold">Core Courses</h1>
        <h2 className=" text-slate-200 mt-1 font-sans font-bold text-lg ">Common In All Specializations</h2>

        <p className="text-slate-200  text-xl">
          Every participant of the program will start by completing the following three core courses:
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-20 ">
          <div className="relative">
            <Image src="/q1.png" width={274} height={800} />
            <div className="">
              <h1 className="text-slate-200 absolute sm:left-16 top-10 left-[18%] ml-4 mt-1 font-sans font-bold text-2xl">
                Quarter 01
              </h1>
              <p className="text-slate-200 p-5 absolute sm:text-xl  top-20 left-2  text-md">
                CS-101: Object Oriented Programming using module3
              </p>
            </div>
          </div>

          <div className="relative ">
            <Image src="/q1.png" width={274} height={800} />
            <h1 className="text-slate-200 absolute sm:left-16 top-10 ml-4 left-[18%] mt-1  font-sans font-bold text-2xl">
              Quarter 02
            </h1>
            <p className="text-slate-200 p-5 absolute sm:text-xl  top-20 left-2  text-md">
              W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud
              Development Kit (CDK) for Terraform
            </p>
          </div>

          <div className="relative ">
            <Image src="/q1.png" width={274} height={800} />
            <h1 className="text-slate-200  sm:left-16 absolute top-10 ml-4 left-[18%] mt-1  font-sans font-bold text-2xl">
              Quarter 03
            </h1>
            <p className="text-slate-200 sm:text-xl p-5 absolute  top-20 left-2  text-md">
              $-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development
            </p>
          </div>

          <div className="relative ">
            <Image src="/q1.png" width={274} height={800} />
            <h1 className="text-slate-200 sm:left-16 absolute top-10 ml-4 left-[18%] mt-1  font-sans font-bold text-2xl">
              Quarter 04
            </h1>
            <p className="text-slate-200 p-5 sm:text-xl  absolute  top-20 left-2  text-md">
              CS-101: Object-Oriented Programming using module3
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
