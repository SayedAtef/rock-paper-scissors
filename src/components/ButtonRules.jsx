import { useContext } from "react";
import GalleryContext from "../context/gallery/galleryContext";
import { Link } from "react-router-dom";

const ButtonRules = ({ source, classStyle }) => {
  const { dispatch } = useContext(GalleryContext);
  return (
    <Link
      to={source}
      className={`mb-12 xl:w-[100px] mx-auto rules px-10 py-2 rounded-md cursor-pointer xl:mr-20 ${classStyle}`}
    >
      <button
        onClick={() => dispatch({ type: "CHANGE" })}
        className="tracking-widest text-white xl:-ml-4"
      >
        RULES
      </button>
    </Link>
  );
};

export default ButtonRules;
