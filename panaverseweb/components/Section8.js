import React from "react";
import Image from "next/image";

function Section8() {
  return (
    <>
      <div
        className=""
        style={{
          backgroundImage: `url(/seventh-section-background.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          height: "auto",
        }}>
        <div className="mx-10 pt-10  md:pt-20 ">
          <div className="text-slate-200 mt-10 pb-10  text-4xl text-center  font-bold ">Operation Cities</div>
          <div className="flex flex-wrap pb-[10%]   justify-center gap-4 ">
            <div>
              <Image width={200} height={200} src="/city1.png" />
              <h1 className="text-center text-slate-200 text-2xl">Karachi</h1>
            </div>
            <div>
              <Image width={200} height={200} src="/city2.png" />
              <h1 className="text-center text-slate-200 text-2xl">Karachi</h1>
            </div>
            <div>
              <Image width={200} height={200} src="/city3.png" />
              <h1 className="text-center text-slate-200 text-2xl">Karachi</h1>
            </div>
            <div>
              <Image width={200} height={200} src="/city5.png" />
              <h1 className="text-center text-slate-200 text-2xl">Lahore</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section8;
