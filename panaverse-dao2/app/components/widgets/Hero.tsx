import React from "react";
import Image from "next/image";
import heroPoster from "../../media/Hero poster.png";
import Wrapper from "../shared/Wrapper";
import Button from "../shared/Button";

function Hero() {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col lg:flex-row items-center justify-between  ">
          {/* left hero */}
          <div className=" max-w-xl  ">
            <h4 className="text-cyan-600 text-base font-semibold">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
            <h1 className="font-bold  text-slate-900   xl:text-6xl mt-2">Certified Web 3.0 and Metaverse Developer</h1>

            <p className="text-md text-slate-800 text-md mt-4">A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>
            <p className="text-md text-slate-800 mt-5 text-md">
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI). Cloud, Edge, Ambient Computing/oT Network Automation, and Bioinformatics Technologies
            </p>
            <div className="mt-11">
              <Button text={"Enroll Now"} />
            </div>
          </div>

          {/* right hero */}
          <Image src={heroPoster} alt="hero poster" />
        </div>
      </Wrapper>
    </section>
  );
}

export default Hero;
