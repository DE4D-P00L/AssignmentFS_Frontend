import axios from "axios";
import { useCallback, useContext, useState } from "react";
import { CardsContext } from "../store/CardContext.jsx";

export default function useGetCardByTitle() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const { cards, updateCards } = useContext(CardsContext);

  const getCards = useCallback(
    async (search) => {
      const query =
        search && search.length > 0
          ? import.meta.env.VITE_API_URL + "/cards/" + search
          : import.meta.env.VITE_API_URL + "/cards";
      try {
        setLoading(true);
        const fetchedData = await axios.get(query);
        updateCards(fetchedData?.data);
      } catch (error) {
        console.log(error.message);
        setErrors(error.message);
      } finally {
        setLoading(false);
      }
    },
    [updateCards]
  );

  return {
    cards,
    getCards,
    loading,
    errors,
  };
}
