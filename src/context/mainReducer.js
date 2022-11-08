const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_PAPER":
      return {
        ...state,
        game: {
          paper: true,
          rock: false,
          scissors: false,
        },
      };
    case "SET_ROCK":
      return {
        game: {
          paper: false,
          rock: true,
          scissors: false,
        },
      };
    case "SET_SCISSORS":
      return {
        game: {
          paper: false,
          rock: false,
          scissors: true,
        },
      };
    case "RESET":
      return {
        game: {
          paper: false,
          rock: false,
          scissors: false,
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
