import React, { useState } from "react";
import ProdList from "./ProdList";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1>Ecommerce Product Listing App</h1>
      <ProdList />
    </div>
  );
};

export default App;
