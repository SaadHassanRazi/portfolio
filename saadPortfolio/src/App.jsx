import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headbar from "./assets/components/Navbar/Navbar";
import Home from "./assets/Pages/Home/Home";
import Footer from "./assets/components/Footer/Footer";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
function App() {
  useEffect(() => {
    Aos.init({ duration:500 });
  }, []);
  return (
    <div className="">
      <Headbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
