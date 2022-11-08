import { useState, useEffect, useContext } from "react";
import GameContext from "../context/mainContext";
import Circle from "./Circle";
import YouWin from "./YouWin";
import YouLose from "./YouLose";
import Tie from "./Tie";

const imageArray = ["/icon-rock.svg", "/icon-paper.svg", "/icon-scissors.svg"];
const styleArray = ["rockGradiant", "paperGradiant", "scissorsGradiant"];

const MainStateOne = ({ getResult }) => {
  const [mounted, setMounted] = useState(false);
  const [mountedTwo, setMountedTwo] = useState(false);
  const [random] = useState(Math.floor(Math.random() * 3));
  const [result, setResult] = useState("");
  const { game } = useContext(GameContext);

  useEffect(() => {
    setTimeout(() => setMounted(true), 750);
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
            <p className="text-white text-center tracking-widest">YOU PICKED</p>
          </div>
          {!mounted && (
            <div>
              <div className="relative w-24 h-24 rounded-full bg-[#1a2946] self-center opacity-80 mt-4 mb-10 mx-auto" />
              <p className="text-white text-center tracking-widest">
                THE HOUSE PICKED
              </p>
            </div>
          )}
          {mounted && (
            <div className="mr-5">
              <Circle
                source={imageArray[random]}
                classStyle={`${styleArray[random]} mb-6`}
              />
              <p className="text-white text-sm text-center tracking-widest">
                THE HOUSE PICKED
              </p>
            </div>
          )}
        </div>
      )}
      {mountedTwo && (
        <div>
          <div className="flex justify-between xl:justify-center xl:gap-32 mb-16">
            <div className="ml-10">
              <div className="try rounded-full">
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
              <p className="text-white text-center tracking-widest text-sm">
                YOU PICKED
              </p>
            </div>
            <div className="mr-5">
              <Circle
                source={imageArray[random]}
                classStyle={`${styleArray[random]} mb-6`}
              />
              <p className="text-white text-sm text-center tracking-widest">
                THE HOUSE PICKED
              </p>
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
