import React from "react";
import Image from "next/image";

function Section7() {
  return (
    <>
      <div className="desktop md:block hidden ">
        <div
          className="lg "
          style={{
            backgroundImage: `url(/fourth-section-background.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            justifyContent: "center",
          }}>
          <div
            className="mx-10   md:mx-20 my-20"
            style={{
              backgroundImage: `url(/ourpartner.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              height: "auto",
              display: "flex",
              gap: "4px",
              alignItems: "center",
              flexDirection: "column",
            }}>
            <div className="text-slate-200   text-4xl text-center mb-4    font-bold mt-20 sm:mt-12">Our Partners</div>
            <div className="flex  col flex-wrap gap-6 content-center justify-items-center justify-center mb-20  sm:mb-10 items-center ">
              <div>
                <Image width={70} height={200} src="/pi-logo.png" />
              </div>
              <div>
                <Image width={100} height={200} src="/pc-logo2.png" />
              </div>
              <div>
                <Image width={150} height={200} src="/sy-logo3.png" />
              </div>
              <div>
                <Image width={80} height={200} src="/cs-logo4.png" />
              </div>
              <div>
                <Image width={200} height={250} src="/bh-logo5.png" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="desktop ">
        <div
          className="lg "
          style={{
            backgroundImage: `url(/fourth-section-background.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            justifyContent: "center",
          }}>
          <div className="mx-10 md:hidden my-10">
            <div className="text-slate-200   text-4xl text-center mb-4    font-bold mt-20 sm:mt-12">Our Partners</div>
            <div className="flex-col  gap-10 content-center justify-items-center justify-center mb-20  sm:mb-10 items-center ">
              <div className="flex justify-center">
                <Image width={100} height={200} src="/pi-logo.png" />
              </div>
              <div className="flex mt-3 justify-center">
                <Image width={100} height={200} src="/pc-logo2.png" />
              </div>
              <div className="flex mt-3 justify-center">
                <Image width={150} height={200} src="/sy-logo3.png" />
              </div>
              <div className="flex mt-3 justify-center">
                <Image width={130} height={200} src="/cs-logo4.png" />
              </div>
              <div className="flex mt-3 justify-center">
                <Image width={150} height={250} src="/bh-logo5.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section7;
