import { useState, useEffect, useContext } from "react";
import GameContext from "../context/mainContext";
import Circle from "./Circle";
import YouWin from "./YouWin";
import YouLose from "./YouLose";
import Tie from "./Tie";

const imageArray = ["/icon-rock.svg", "/icon-paper.svg", "/icon-scissors.svg"];
const styleArray = ["rockGradiant", "paperGradiant", "scissorsGradiant"];

const MainStateOne = ({ getResult }) => {
  const [mountedTwo, setMountedTwo] = useState(false);
  const [random] = useState(Math.floor(Math.random() * 3));
  const [result, setResult] = useState("");
  const { game } = useContext(GameContext);

  useEffect(() => {
    setTimeout(() => setMountedTwo(true), 750);
    setResult(
      game.paper && random === 0
        ? "win"
        : game.paper && random === 1
        ? "tie"
        : game.paper && random === 2
        ? "lose"
        : game.rock && random === 0
        ? "tie"
        : game.rock && random === 1
        ? "lose"
        : game.rock && random === 2
        ? "win"
        : game.scissors && random === 0
        ? "lose"
        : game.scissors && random === 1
        ? "win"
        : "tie"
    );
    result && getResult(result);
  }, []);

  getResult(result);

  return (
    <>
      {!mountedTwo && (
        <div className="flex justify-center mx-auto gap-14 xl:gap-32 mb-36">
          <div>
            <p className="text-white text-center tracking-widest text-2xl mb-20 mt-10">
              YOU PICKED
            </p>
            <Circle
              source={
                game.rock
                  ? imageArray[0]
                  : game.paper
                  ? imageArray[1]
                  : imageArray[2]
              }
              classStyle={`${
                game.rock
                  ? styleArray[0]
                  : game.paper
                  ? styleArray[1]
                  : styleArray[2]
              } mb-6`}
            />
          </div>
          <div>
            <p className="text-white text-2xl text-center tracking-widest mb-20 mt-10">
              THE HOUSE PICKED
            </p>
            <div className="relative w-32 h-32 rounded-full bg-[#1a2946] self-center opacity-80 mt-16 mb-10 mx-auto" />
          </div>
        </div>
      )}
      {mountedTwo && (
        <div>
          <div className="flex justify-between xl:justify-center xl:gap-32 mb-16">
            <div className="ml-10">
              <p className="text-white text-center tracking-widest text-2xl mb-20 mt-10">
                YOU PICKED
              </p>
              <div className="tryDesktop rounded-full">
                <Circle
                  source={
                    game.rock
                      ? imageArray[0]
                      : game.paper
                      ? imageArray[1]
                      : imageArray[2]
                  }
                  classStyle={`ml-1 ${
                    game.rock
                      ? styleArray[0]
                      : game.paper
                      ? styleArray[1]
                      : styleArray[2]
                  } mb-6`}
                />
              </div>
            </div>
            <div className="mr-5 mt-10">
              <p className="text-white text-2xl text-center tracking-widest mb-20">
                THE HOUSE PICKED
              </p>
              <Circle
                source={imageArray[random]}
                classStyle={`${styleArray[random]} ml-10`}
              />
            </div>
          </div>
          {result === "win" ? (
            <YouWin />
          ) : result === "lose" ? (
            <YouLose />
          ) : (
            <Tie />
          )}
        </div>
      )}
    </>
  );
};

export default MainStateOne;
