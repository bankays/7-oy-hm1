import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/sidebar/Sidebar";

import Header from "./components/header/Header";

import Students from "./components/Students";

function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <Students />
      <Routes>{/* <Route path="products" element={}></Route> */}</Routes>
    </Router>
  );
}

export default App;
