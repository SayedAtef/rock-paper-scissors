import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GameContext from "../context/mainContext";

const YouLose = () => {
  const { dispatch } = useContext(GameContext);

  const navigate = useNavigate();
  const handleClick = () => {
    dispatch({ type: "RESET" });
    navigate("/");
  };

  return (
    <div className="mx-auto w-full text-center">
      <p className="text-5xl text-white">YOU LOSE</p>
      <button
        onClick={handleClick}
        className="bg-white text-base mt-4 hover:text-red-400 text-[#3B4363]  py-2 px-12 rounded-md tracking-widest"
      >
        PLAY AGAIN
      </button>
    </div>
  );
};

export default YouLose;
