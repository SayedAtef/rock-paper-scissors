import { createContext, useReducer } from "react";
import mainReducer from "./mainReducer";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const initialState = {
    game: {
      rock: false,
      scissors: false,
      paper: false,
    },
  };

  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <GameContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
