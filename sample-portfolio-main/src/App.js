import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./pages/Home";
import { FavouritePersonality } from "./pages/FavouritePersonality";
import { FavouriteSpots } from './pages/FavouriteSpots';
import { FavouriteCities } from './pages/FavouriteCities';
import { Contact } from "./pages/Contact";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
   
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/favourite-personality" element={<FavouritePersonality/>}></Route>
        <Route exact path="/favourite-spots" element={<FavouriteSpots/>}></Route>
        <Route exact path="/favourite-cities" element={<FavouriteCities/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
