import Header from "./Header";
import arrowImg from "../assets/arrow.png";
import { useCallback, useEffect, useState } from "react";
import useGetCardByTitle from "../hooks/useGetCardByTitle";
import { useDebounce } from "@uidotdev/usehooks";

const Hero = () => {
  const { getCards } = useGetCardByTitle();
  const [title, setTitle] = useState("");
  const debouncedSearchTerm = useDebounce(title, 300);

  const handleInputChange = useCallback((event) => {
    setTitle(event.target.value);
  }, []);

  useEffect(() => {
    getCards(debouncedSearchTerm);
  }, [debouncedSearchTerm, getCards]);

  return (
    <div className="">
      <div className="bg-black text-white w-full">
        <Header />
      </div>
      <div className="bg-slate-300 min-h-[400px] flex items-center justify-center flex-col gap-10 px-3 sm:px-0">
        <h1 className="font-semibold text-6xl">How can we help?</h1>
        <form className="w-full max-w-[600px] p-2 border border-black bg-white flex justify-between items-center shadow-xl shadow-[rgba(0,0,0,0.05)]">
          <input
            type="text"
            value={title}
            onChange={handleInputChange}
            placeholder="Search"
            className="min-w-0 w-full p-3"
          />
          <button type="submit" className="p-2">
            <img src={arrowImg} alt="submit" className="size-7" />
          </button>
        </form>
      </div>
    </div>
  );
};
export default Hero;
