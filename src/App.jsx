import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Chatui from "./components/Chatui";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Hero />
        <Chatui />
        <Footer />
      </div>
    </>
  );
};

export default App;
