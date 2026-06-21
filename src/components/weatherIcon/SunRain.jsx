import Cloud from "./Cloud";

const SunRain = () => {
  return (
    <div className="relative">
      <div className="absolute -top-4 left-0 w-16 h-16 rounded-full bg-yellow-400"></div>

      <Cloud />

      <div className="flex gap-3 ml-8 mt-2 text-blue-400 text-2xl">
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </div>
    </div>
  );
};

export default SunRain;