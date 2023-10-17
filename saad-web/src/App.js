import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headbar from './components/Navbar/Navbar';
import Home from './Pages/Home/home';
import Footer from './components/Footer/footer';


function App() {
  return (
    <div className="App">

      <Headbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
