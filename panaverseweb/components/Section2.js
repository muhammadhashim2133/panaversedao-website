import React from "react";
import Image from "next/image";
function Section2() {
  return (
    <div
      style={{
        backgroundImage: `url(/third-section-background.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "auto",
        width: "full",
      }}>
      <div className="flex flex-col mx-10 md:mx-20 gap-4 items-center text-center   ">
        <h1 className="mt-20 text-slate-200   text-4xl  font-bold">Why to join us</h1>
        <p className="text-slate-200 mt-4 text-xl">
          In this brand-new type of curriculum, students will learn how to make money and boost exports in the classroom
          and will begin doing so within six months of the program beginning. It resembles a cross between a corporate
          venture and an educational project.
        </p>
        <div className="flex justify-center mb-20 mt-4  flex-wrap gap-8 ">
          <div className="relative ">
            <Image src="/a.png" width={250} height={800} />
            <h1 className="text-slate-200 absolute top-10 left-8 sm:10  mt-1 font-sans sm:font-extrabold  px-4  text-xl ">
              Product Owner
            </h1>
          </div>
          <div className="relative">
            <Image src="/b.png" width={250} height={800} />
            <h1 className="text-slate-200 absolute top-10 left-12 sm:left-[25%]  mt-1 font-sans  sm:font-extrabold px-4  text-xl">
              Freelancer
            </h1>
          </div>
          <div className="relative">
            <Image src="/c.png" width={250} height={800} />
            <h1 className="text-slate-200 absolute top-10 left-0 mt-1 font-sans  sm:font-extrabold px-4 text-xl">
              Access To Global Market By Dao
            </h1>
          </div>
          <div className="relative">
            <Image src="/d.png" width={250} height={800} />
            <h1 className="text-slate-200 absolute  top-10 left-5 sm:left-10 mt-1 font-sans  sm:font-extrabold px-4 text-xl">
              Boost Economy
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
