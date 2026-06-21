import Cloud from "./Cloud";


const PartlyCloudy = () => {
  return (
    <div className="relative">
      <div className="absolute -top-5 -left-3 w-16 h-16 rounded-full bg-yellow-400"></div>
      <Cloud/>
    </div>
  );
};

export default PartlyCloudy;