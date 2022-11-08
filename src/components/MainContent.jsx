import { useContext } from "react";
import GameContext from "../context/mainContext";
import Circle from "./Circle";

const MainContent = () => {
  const { dispatch } = useContext(GameContext);

  const handleRock = () => {
    dispatch({ type: "SET_ROCK" });
  };
  const handlePaper = () => {
    dispatch({ type: "SET_PAPER" });
  };
  const handleScissors = () => {
    dispatch({ type: "SET_SCISSORS" });
  };

  return (
    <div className="relative w-full mt-14">
      <img
        src="/bg-triangle.svg"
        className="absolute left-8 scale-75 top-5 xl:left-[38.7%]"
      />
      <div className="flex flex-col justify-center">
        <div className="flex justify-center h-full gap-20 xl:gap-32 relative">
          <button onClick={handlePaper}>
            <Circle
              source="/icon-paper.svg"
              classStyle="paperGradiant cursor-pointer"
            />
          </button>
          <button onClick={handleScissors}>
            <Circle source="/icon-scissors.svg" classStyle="scissorsGradiant" />
          </button>
        </div>
        <div className="mx-auto pt-10 mt-10">
          <button onClick={handleRock}>
            <Circle source="/icon-rock.svg" classStyle="rockGradiant" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
