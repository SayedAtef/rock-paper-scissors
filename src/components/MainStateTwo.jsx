import Circle from "./Circle";
import You from "./YouWin";

const MainStateTwo = () => {
  return (
    <div>
      <div className="flex justify-between mb-16">
        <div className="ml-10">
          <div className="try rounded-full">
            <Circle source="/icon-rock.svg" classStyle="rockGradiant mb-6" />
          </div>
          <p className="text-white text-center tracking-widest text-sm">
            YOU PICKED
          </p>
        </div>
        <div className="mr-5">
          <Circle source="/icon-rock.svg" classStyle="rockGradiant mb-6" />
          <p className="text-white text-sm text-center tracking-widest">
            THE HOUSE PICKED
          </p>
        </div>
      </div>
      <You />
    </div>
  );
};

export default MainStateTwo;
