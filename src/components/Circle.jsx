const Circle = ({ source, classStyle }) => {
  return (
    <div className="xl:scale-150">
      <div className={`relative w-32 h-32 rounded-full ${classStyle}`}>
        <div className="absolute m-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-24 h-24 rounded-full bg-white self-center topShadow">
            <img
              src={source}
              className="absolute m-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-75"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Circle;
