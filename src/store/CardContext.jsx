import { createContext, useCallback, useState } from "react";

// Create the context
export const CardsContext = createContext();

// Create the provider
export const CardsProvider = ({ children }) => {
  const [cards, setCards] = useState([]);

  const updateCards = useCallback((cardsArray) => {
    setCards(cardsArray);
  }, []);

  const contextValue = {
    cards,
    updateCards,
  };

  return (
    <CardsContext.Provider value={contextValue}>
      {children}
    </CardsContext.Provider>
  );
};
