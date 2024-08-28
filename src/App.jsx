import CardGrid from "./components/CardGrid";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero";
import { CardsProvider } from "./store/CardContext.jsx";

function App() {
  return (
    <CardsProvider>
      <Hero />
      <CardGrid />
      <Footer />
    </CardsProvider>
  );
}

export default App;
