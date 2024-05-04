import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headbar from "./assets/components/Navbar/Navbar";
import Home from "./assets/Pages/Home/Home";
import Footer from "./assets/components/Footer/Footer";
function App() {
  return (
    <div className="">
      <Headbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
