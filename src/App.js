import React from 'react';
import './App.css';
import ListAnimals from "./components/ListAnimals/ListAnimals";
import Navbar from "./components/Navbar/Navbar";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Routes
} from 'react-router-dom';
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Users from "./components/Users/Users";
import Footer from "./components/Footer/Footer";
import AddAnimal from "./components/AddAnimal/AddAnimal";
import AddClassification from "./components/AddClassification/AddClassification";
const App = () => {
  return (
      <Router>
          <Navbar />
          <main>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/animals" element={<ListAnimals />} />
                  <Route path="/add-animal" element={<AddAnimal />} />
                  <Route path="/add-classification" element={<AddClassification />} />
              </Routes>
          </main>
          <Footer/>
      </Router>

  );
}

export default App;
