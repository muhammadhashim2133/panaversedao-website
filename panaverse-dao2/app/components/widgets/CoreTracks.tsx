import React from "react";
import Wrapper from "../shared/Wrapper";
import Button from "../shared/Button";
import QuarterBox from "../shared/QuarterBox";

const CoreTracks = () => {
  const corePra = "core courses \n (common in all specializations):";
  const quaterData = [
    { tittle: "Quarter I", desc: "CS-101: Object-Oriented Programming using TypeScript" },
    { tittle: "Quarter II", desc: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform" },
    { tittle: "Quarter III", desc: "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development" },
  ];
  return (
    <Wrapper>
      <section>
        <div className="max-w-semibold-xl">
          <h4 className="text-cyan-600 text-base font mt-24 lg:44">Program of studies</h4>
          <h2 className="font-bold  text-slate-900 text-2xl lg:text-4xl mt-2 whitespace-pre-line">{corePra}</h2>
          <p className="text-md mb-4 text-slate-800 mt-5 text-md">Every participant of the program will start by completing the following three core courses</p>
          <Button text="LearnMore" />
        </div>

        <div className="mt-16 flex items-stretch flex-col lg:flex-row gap-8 ">
          {quaterData.map((item, i) => {
            return <QuarterBox key={i} title={item.tittle} description={item.desc} number={i + 1} />;
          })}
        </div>
      </section>
    </Wrapper>
  );
};

export default CoreTracks;
