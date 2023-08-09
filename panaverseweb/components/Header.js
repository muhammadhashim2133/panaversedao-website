import React from "react";
import Image from "next/image";
function Header() {
  return (
    <>
      <div className="mobile sm:hidden ">
        <div
          className=""
          style={{
            backgroundImage: `url( /header-background.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: "100vh",
            width: "full",
          }}>
          {/* <div className=" mt-[30%] px-8 mx-2 bg-gradient-to-r z-auto from-purple-900 ... absolute top-[30px]">
            <p className="text-slate-300 text-lg">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Generation...
            </p>
          </div> */}
          <Image className="absolute mt-8 bottom-0 right-0" src="/vertualglass.png" width={500} height={952} />
          <div className="">
            <Image className="absolute bottom-24  left-[4px] " src="/Frame 6.png" width={220} height={50} />
            <div className="absolute    left-[50px] bottom-[110px]">
              <div className="w-44 ">
                <h1 className="h1 text-slate-200 font-sans font-bold text-xl ">Become</h1>
                <h1 className="text-slate-200 mt-1 text-2xl font-bold">Certified Web 3.0 and Metaverse Developer</h1>

                <button
                  className="mt-4 ml-10 text-slate-200 hover:font-bold font-semibold "
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
      </div>

      <div className="sm hidden sm:block md:hidden ">
        <div
          className=""
          style={{
            backgroundImage: `url( /header-background.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: "100vh",
            width: "full",
          }}>
          {/* <div className=" mt-[20%] px-8 mx-2 bg-gradient-to-r z-auto from-purple-900 ... absolute top-[30px]">
            <p className="text-slate-300 text-lg">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of
              the Internet Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient
              Computing/IoT, Network Automation, and Bioinformatics Technologies{" "}
            </p>
          </div> */}
          <Image className="absolute mt-8 bottom-0 right-0" src="/vertualglass.png" width={500} height={952} />
        </div>
        <div className="">
          <Image className="absolute bottom-24  left-[150px] " src="/Frame 6.png" width={220} height={50} />
          <div className="absolute    left-[180px] bottom-[110px]">
            <div className="w-44 ">
              <h1 className="h1 text-slate-200 font-sans font-bold text-xl ">Become</h1>
              <h1 className="text-slate-200 mt-1 text-2xl font-bold">Certified Web 3.0 and Metaverse Developer</h1>

              <button
                className="mt-4 ml-10 text-slate-200 hover:font-bold font-semibold "
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

      {/* md */}
      <div className="md hidden md:block lg:hidden ">
        <div
          className=""
          style={{
            backgroundImage: `url( /header-background.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: "100vh",
            width: "full",
          }}></div>

        {/* <Image className="absolute mt-8 bottom-0 right-0" src="/vertualglass.png" width={700} height={952} /> */}
        <div className=" relative">
          <img className="absolute  bottom-0 right-0" src="/vertualglass.png" width="580" alt="man image" />
          {/* <Image className="absolute bottom-3 ml-14 left-[-50px] " src="/Frame 6.png" width={420} height={100} /> */}
          <div className="">
            <img className="absolute bottom-2  left-[180px] " src="/Frame 6.png" alt="glass" width="350" />
            <div className="absolute w-[310px] ml-32  left-[85px] bottom-6">
              <h1 className="h1 text-slate-300 font-sans font-bold text-lg ">Become</h1>
              <h1 className="text-slate-300 text-2xl font-bold">Certified Web 3.0 and Metaverse Developer</h1>
              <p className="text-slate-300 mt-2 text-lg">
                A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of
                the Internet Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient
                Computing/IoT, Network Automation, and Bioinformatics Technologies
              </p>
              <button
                className="mt-4 ml-40 text-slate-200 hover:font-bold font-semibold "
                style={{
                  backgroundImage: `url( /button.png)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  height: "44px",
                  width: "130px",
                }}>
                Syllabus
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="lg hidden lg:block xl:hidden relative">
        <div
          className=""
          style={{
            backgroundImage: `url( /header-background.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: "100vh",
            width: "full",
          }}>
          <Image className="absolute mt-8 bottom-0 right-0" src="/vertualglass.png" width={600} height={952} />
        </div>
        <div className="relative">
          <Image className="absolute bottom-3 ml-14 left-[300px] " src="/Frame 6.png" width={350} height={100} />
          <div className="absolute w-[300px]   left-[390px] bottom-4">
            <h1 className="h1 text-slate-300 font-sans font-bold text-lg ">Become</h1>
            <h1 className="text-slate-300 text-2xl font-bold">Certified Web 3.0 and Metaverse Developer</h1>
            <p className="text-slate-300 mt-2 text-lg">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of
              the Internet Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient
              Computing/IoT, Network Automation, and Bioinformatics Technologies
            </p>
            <button
              className="mt-4 ml-40 text-slate-200 hover:font-bold font-semibold "
              style={{
                backgroundImage: `url( /button.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: "44px",
                width: "130px",
              }}>
              Syllabus
            </button>
          </div>
        </div>
      </div>

      <div className="hidden xl:block">
        <div
          className=""
          style={{
            backgroundImage: `url( /header-background.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            height: "100vh",
            width: "full",
          }}>
          <Image className="absolute mt-8 bottom-0 right-0" src="/vertualglass.png" width={700} height={952} />
        </div>
        <div className="relative">
          <Image className="absolute bottom-3  left-[400px] " src="/Frame 6.png" width={420} height={100} />
          <div className="absolute w-80 ml-0  left-[450px] bottom-6">
            <h1 className="h1 text-slate-300 font-sans font-bold text-lg ">Become</h1>
            <h1 className="text-slate-300 text-4xl font-bold">Certified Web 3.0 and Metaverse Developer</h1>
            <p className="text-slate-300 mt-2 text-xl">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of
              the Internet Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient
              Computing/IoT, Network Automation, and Bioinformatics Technologies
            </p>
            <button
              className="mt-4 ml-40 text-slate-200 hover:font-bold font-semibold "
              style={{
                backgroundImage: `url( /button.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                height: "44px",
                width: "130px",
              }}>
              Syllabus
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
