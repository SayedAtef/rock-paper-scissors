import RulesComp from "./RulesComp";

const RulesDesktop = () => {
  return (
    <>
      <section className="hidden md:block h-[450px] mt-35 mx-auto absolute top-1/4 left-0 bottom-0 right-0 w-1/3 z-50 bg-white rounded-lg">
        <RulesComp />
      </section>
      <div className=" bg-black opacity-75 z-30 fixed w-full h-full top-0 left-0 right-0" />
    </>
  );
};

export default RulesDesktop;
