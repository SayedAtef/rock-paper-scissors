import { Link } from "react-router-dom";
import RulesMain from "./RulesMain";

const Rules = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex justify-between">
        <h1 className="mt-20 mx-auto text-3xl font-bold text-[#3B4262]  xl:ml-10 xl:mt-10">
          RULES
        </h1>
        <div className="hidden xl:block mt-10 mr-10">
          <Link
            onClick={() => dispatch({ type: "CHANGE" })}
            to="/"
            className="mt-32 xl:mt-5"
          >
            <img
              src="/icon-close.svg"
              className="w-5 h-5 cursor-pointer mx-auto"
            />
          </Link>
        </div>
      </div>
      <RulesMain />
      <div className="xl:hidden mt-32 xl:mt-5">
        <Link to="/">
          <img
            src="/icon-close.svg"
            className="w-5 h-5 cursor-pointer mx-auto"
          />
        </Link>
      </div>
    </div>
  );
};

export default Rules;
