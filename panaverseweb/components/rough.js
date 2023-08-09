import React from "react";

function Rough() {
  return (
    <>
      <div className="relative w-40 h-40">
        <div className="absolute w-full h-full">
          <img
            src="a.jpg"
            alt="Flippable Image"
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-x-[-1]"
          />
        </div>
      </div>
    </>
  );
}

export default Rough;
