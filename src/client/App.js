import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TestComponent from "./components/TestComponent/TestComponent";
import GetMeals from "./components/Meals";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MealsById from "./components/MealDetails";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/meals">
          <GetMeals />
        </Route>
        <Route exact path="/meals/:id">
          <MealsById />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
