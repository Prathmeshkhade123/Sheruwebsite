import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Feature from "./components/Feature/Feature";
import Layouts from "./components/Layouts/Layouts";
import OurShops from "./components/OurShop/OurShops";
import BuyTheme from "./components/BuyTheme/BuyTheme";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Feature />
      <Layouts />
      <OurShops />
      <BuyTheme />
    </div>
  );
}

export default App;
