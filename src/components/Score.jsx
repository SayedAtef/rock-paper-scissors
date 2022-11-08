import { useState, useEffect } from "react";

const Score = ({ score }) => {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    if (score === "win") setNumber((prev) => prev + 1);
  }, [score]);
  return (
    <div className="m-3  w-[80px] h-[74px] xl:w-[100px] bg-white text-center rounded-md  ">
      <p className="text-[#2A46C0] text-[8px] xl:text-[10px] pt-3 tracking-widest">
        SCORE
      </p>
      <p className="text-[#3B4363] font-bold opacity-90 text-4xl -mt-1 xl:mt-0">
        {number}
      </p>
    </div>
  );
};

export default Score;
