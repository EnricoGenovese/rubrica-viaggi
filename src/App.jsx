import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Travel from "./pages/Travel";

function App() {
  return (
    <>
      <Header />
      <Travel></Travel>
      <Main />
      <Footer />
    </>
  );
}

export default App;
