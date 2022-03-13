import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import PizzaPage from "./pages/PizzaPage";
import DecorationsPage from "./pages/DecorationsPage";
import ConsumablesPage from "./pages/ConsumablesPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/food" element={<PizzaPage />}></Route>
          <Route
            exact
            path="/decorations"
            element={<DecorationsPage />}
          ></Route>
          <Route exact path="/consumables" element={<ConsumablesPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
