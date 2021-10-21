import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import {Switch, Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home>
       
      </Home>
    </div>
  );
}

export default App;
