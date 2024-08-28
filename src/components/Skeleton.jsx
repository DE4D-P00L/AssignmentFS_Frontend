const Skeleton = () => {
  return (
    <div className="flex animate-pulse bg-gray-200 rounded-2xl">
      <div className="w-full p-3">
        <p
          className="h-4 bg-gray-400 rounded-full"
          style={{ width: "40%" }}></p>
        <ul className="mt-5 space-y-3">
          <li className="w-full h-4 bg-gray-400 rounded-full"></li>
          <li className="w-full h-4 bg-gray-400 rounded-full"></li>
          <li className="w-full h-4 bg-gray-400 rounded-full"></li>
        </ul>
      </div>
    </div>
  );
};
export default Skeleton;
