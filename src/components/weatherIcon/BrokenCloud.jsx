import Cloud from "./Cloud";


const BrokenCloud = () => {
  return (
    <div className="relative">
      <div className="translate-x-6">
        <Cloud/>
      </div>

      <div className="-translate-y-8">
        <Cloud />
      </div>
    </div>
  );
};

export default BrokenCloud;