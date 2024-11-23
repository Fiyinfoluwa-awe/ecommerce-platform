import React from "react";
import ProductList from "./components/ProductsLists";
import Login from "./components/Login";
import OrderForm from "./components/OrderForm";

const App = () => {
  return (
    <div>
      <h1>E-commerce Platform</h1>
      <Login />
      <ProductList />
      <OrderForm />
    </div>
  );
};

export default App;
