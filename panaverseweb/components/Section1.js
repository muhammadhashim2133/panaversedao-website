import Image from "next/image";
import React from "react";

function Section1() {
  return (
    <div
      className="bg-cover relative bg-center"
      style={{
        backgroundImage: `url( /section-section-background.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "auto",
      }}>
      <div className="ml-10 md:ml-20">
        <Image className="" src="/nation-building.png" width={2122} height={321} />
      </div>
      <div className="mx-10 md:mx-20">
        <Image src="/earn.png" width={2122} height={321} />
      </div>
    </div>
  );
}

export default Section1;
