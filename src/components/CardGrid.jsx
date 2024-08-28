import { useEffect } from "react";
import useGetCardByTitle from "../hooks/useGetCardByTitle.js";
import Card from "./Card";
import Skeleton from "./Skeleton.jsx";

const CardGrid = () => {
  const { cards, loading, errors, getCards } = useGetCardByTitle();
  useEffect(() => {
    getCards();
  }, [getCards]);
  if (errors)
    return (
      <main className="max-w-[800px] mx-auto p-10 grid text-center min-h-[300px]">
        <h1 className="text-3xl font-semibold">{"Error loading cards"}</h1>
      </main>
    );

  if (loading)
    return (
      <main className="max-w-[800px] mx-auto py-10 grid grid-cols-2 gap-[70px] min-h-[300px]">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </main>
    );

  if (cards.length === 0)
    return (
      <main className="max-w-[800px] mx-auto p-10 grid text-center min-h-[300px]">
        <h1 className="text-3xl font-semibold">{"No cards found"}</h1>
      </main>
    );
  return (
    <main className="max-w-[800px] mx-auto py-10 grid grid-cols-1 px-3 gap-10 sm:grid-cols-2 sm:gap-[70px] min-h-[300px]">
      {cards &&
        cards.length > 0 &&
        cards?.map((card) => (
          <Card
            key={card._id}
            title={card.title}
            description={card.description}
          />
        ))}
    </main>
  );
};
export default CardGrid;
