import React from "react";
import ProductsContextProvider from "./contexts/ProductContext";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <ProductsContextProvider>
        <Navbar />
        <ProductList />
      </ProductsContextProvider>
    </div>
  );
}

export default App;
