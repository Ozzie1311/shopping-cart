import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CheckoutPage } from "./pages/Checkout";
import { Shop } from "./pages/Shop";

function App() {
  const [checkout, setCheckout] = useState([]);

  const handleAddCart = (product) => {
    setCheckout((prev) => {
      //Buscamos si el producto ya existe en el array checkout
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        //Si existe, actualizamos su cantidad sumando la nueva cantidad seleccionada
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      //Si no existe, lo agregamos como un nuevo item al array
      return [...prev, product];
    });
  };

  return (
    <div className="min-h-screen bg-slate-800">
      <Navbar state={checkout.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop handleClick={handleAddCart} />} />
        <Route
          path="/checkout"
          element={
            <CheckoutPage checkout={checkout} setCheckout={setCheckout} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
