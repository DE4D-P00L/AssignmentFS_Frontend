const Card = ({ title, description }) => {
  return (
    <div className="border-[1px] flex flex-col divide-y divide-gray-300 rounded-2xl bg-gray-100 border-gray-300">
      <h2 className="font-bold text-xl px-4 py-3">{title}</h2>
      <p className="px-4 py-3 text-lg">{description}</p>
    </div>
  );
};
export default Card;
