import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GameContext from "../context/mainContext";

const Tie = () => {
  const { dispatch } = useContext(GameContext);

  const navigate = useNavigate();
  const handleClick = () => {
    dispatch({ type: "RESET" });
    navigate("/");
  };

  return (
    <div className="mx-auto w-full text-center">
      <p className="text-5xl text-white">TIE</p>
      <button
        onClick={handleClick}
        className="bg-white text-base hover:text-red-400 mt-4 text-[#3B4363]  py-2 px-12 rounded-md tracking-widest"
      >
        PLAY AGAIN
      </button>
    </div>
  );
};

export default Tie;
