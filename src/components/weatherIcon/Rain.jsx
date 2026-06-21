import Cloud from "./Cloud";

const Rain = () => {
  return (
    <div className="relative">
      <Cloud />

      <div className="flex gap-3 ml-8 mt-2 text-blue-400 text-2xl">
        <span>|</span>
        <span>|</span>
        <span>|</span>
      </div>
    </div>
  );
};

export default Rain;