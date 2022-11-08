import React from "react";
import Score from "./Score";

const UpperBox = ({ score }) => {
  return (
    <div className="xl:scale-125">
      <div className="pt-10">
        <div className="flex justify-between w-80 xl:w-[500px] header rounded-lg mx-auto">
          <img src="/logo.svg" className="scale-75" />
          <Score score={score} />
        </div>
      </div>
    </div>
  );
};

export default UpperBox;
