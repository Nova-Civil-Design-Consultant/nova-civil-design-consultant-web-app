import constants from '../../constants/index.json'

const Results = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col items-center justify-between lg:px-80 px-5 lg:mt-44 mt-20 lg:gap-0 gap-8">
      {constants?.document?.Result_Component?.result_items?.map((item) => (
        <div
          key={item.title}
          className="flex flex-col lg:items-start items-center"
        >
          <span className="font-Fira font-bold text-[75px] text-secondary lg:text-left text-center">
            {item.count}
          </span>
          <span className="uppercase text-lightText font-Fira text-[17px] tracking-[0.2em] lg:text-left text-center">
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Results;
