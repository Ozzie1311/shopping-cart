import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

export const Shop = ({ handleClick }) => {
  //Estado para almacenar los productos de la API
  const [products, setProducts] = useState([]);
  //Estado para mostrar un mensaje de carga
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Hacemos el fetch para traer los productos de la API
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        if (!response.ok) {
          throw new Error("Erorr fetching products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("No se pudo completar la carga de products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    <p>Cargando productos...</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-5 w-5xl mx-auto">
      {products.map((product) => (
        //Cada producto se renderiza con ProductCard, pasando el producto y lafuncion
        <ProductCard
          key={product.id}
          product={product}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};
