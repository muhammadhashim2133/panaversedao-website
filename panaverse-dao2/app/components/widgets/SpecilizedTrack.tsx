"use client";

import React from "react";
import Wrapper from "../shared/Wrapper";
import QuarterBox from "../shared/QuarterBox";
import web3 from "../../media/web3.png";
import ai from "../../media/ai.png";
import Image from "next/image";
import { useState } from "react";

export const programData = [
  {
    slug: "web3",
    title: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description:
      "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: web3,

    quarters: [
      {
        header: "Quarter IV",
        description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not",
        number: 5,
      },
    ],
  },

  {
    slug: "ai",
    title: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "This in this Artificial intelligence and deeep learning specialization we experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: ai,

    quarters: [
      {
        header: "Quarter IV",
        description: "nt of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as oppose",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          " now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like",
        number: 5,
      },
    ],
  },

  {
    slug: "ai",
    title: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "This in this Artificial intelligence and deeep learning specialization we experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: ai,

    quarters: [
      {
        header: "Quarter IV",
        description: "nt of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as oppose",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          " now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like",
        number: 5,
      },
    ],
  },
  {
    slug: "ai",
    title: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "This in this Artificial intelligence and deeep learning specialization we experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: ai,

    quarters: [
      {
        header: "Quarter IV",
        description: "nt of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as oppose",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          " now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like",
        number: 5,
      },
    ],
  },
  {
    slug: "ai",
    title: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "This in this Artificial intelligence and deeep learning specialization we experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: ai,

    quarters: [
      {
        header: "Quarter IV",
        description: "nt of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as oppose",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          " now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like",
        number: 5,
      },
    ],
  },
  {
    slug: "ai",
    title: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "This in this Artificial intelligence and deeep learning specialization we experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: ai,

    quarters: [
      {
        header: "Quarter IV",
        description: "nt of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as oppose",
        number: 4,
      },
      {
        header: "Quarter V",
        description:
          " now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like",
        number: 5,
      },
    ],
  },
];

const SpecilizedTrack = () => {
  const [selectedItem, setselectedItem] = useState("web3");
  const selectedData = programData.find((item) => item.slug === selectedItem);

  console.log(selectedItem);

  return (
    <section>
      <Wrapper>
        {/*  header */}
        <div className="max-w-xl mt-16">
          <h2 className="font-bold  text-slate-900 text-4xl mt-2 whitespace-pre-line">Specialized Tracks:</h2>
          <p className="text-md mb-4 text-slate-800 mt-5 text-md">After completing the first three quarters the participants will select one or more specializations consisting of two courses each:</p>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-14  mt-12 ">
          {/* left */}
          <div className="border rounded-xl py-6 px-6 shadow-lg basis-9/12 self-start sticky top-[98px] ">
            <h4 className="text-cyan-600 text-base font">Specialized Program</h4>
            <h3 className="font-bold  text-slate-900 text-2xl mt-2 whitespace-pre-line max-w-lg">{selectedData?.title}</h3>
            <p className="text-md mb-4 text-slate-800 mt-5 text-md max-w-4xl">{selectedData?.description}</p>
            <button className="flex items-center gap-1 text-cyan-600 font-semibold ">
              LearnMore
              <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" stroke-width="2" />
              </svg>
            </button>

            <div className="flex flex-col lg:flex-row  gap-2 mt-3 ">
              {selectedData?.quarters.map((items) => {
                return <QuarterBox title={items.header} description={items.description} number={items.number} />;
              })}
            </div>
          </div>
          {/* right */}
          <div className=" flex flex-col gap-5 basis-4/12 ">
            {programData.map((item, i) => {
              return (
                <div onClick={() => setselectedItem(item.slug)} key={i} className="flex items-center cursor-pointer gap-3  border-b-2 pb-4">
                  <div className=" min-w-40 min-h-20 ">
                    <Image src={item.image} alt={item.title} className="object-fill w-40 h-20 rounded-lg  " />
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold">Specialized Program</h4>
                    <p className="text-lg mt-1">{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecilizedTrack;
