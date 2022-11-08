import { useContext, useState } from "react";
import GameContext from "../context/mainContext";
import GalleryContext from "../context/gallery/galleryContext";
import UpperBox from "../components/UpperBox";
import MainContent from "../components/MainContent";
import MainStateOne from "../components/MainStateOne";
import ButtonRules from "../components/ButtonRules";
import RulesDesktop from "../components/RulesDesktop";
import MainStateDesktop from "../components/MainStateDesktop";

const Home = () => {
  const [result, setResult] = useState("");
  const { game } = useContext(GameContext);
  const { bool } = useContext(GalleryContext);

  const getResult = (r) => {
    setResult(r);
  };

  return (
    <div className="homeBackground h-screen flex flex-col justify-between">
      {bool && <RulesDesktop />}
      <UpperBox score={result} />
      {game.paper === false &&
        game.rock === false &&
        game.scissors === false && <MainContent />}
      {(game.paper === true ||
        game.rock === true ||
        game.scissors === true) && (
        <>
          <div className="xl:hidden">
            <MainStateOne getResult={getResult} />
          </div>
          <div className="hidden xl:block">
            <MainStateDesktop getResult={getResult} />
          </div>
        </>
      )}
      <ButtonRules source="/rules" classStyle="xl:hidden" />
      <ButtonRules source="/" classStyle="hidden xl:block" />
    </div>
  );
};

export default Home;
