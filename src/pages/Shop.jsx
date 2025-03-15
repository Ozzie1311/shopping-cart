import { useState, useEffect } from "react";

export const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        if (!response.ok) {
          throw new Error("Error fetching products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("No se pudieron cargar los productos", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <p>Cargando productos....</p>;
  }
  return (
    <div className="grid grid-cols-3 gap-5 w-5xl mx-auto">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col justify-between bg-slate-800 px-2 py-2 rounded gap-3"
        >
          <img
            src={product.image}
            alt={product.description}
            className="h-62 w-full object-fit rounded"
          />
          <h2 className="text-emerald-50 font-bold">{product.title}</h2>
          <p className="text-emerald-50">
            Price: <span className="text-lime-400">{product.price} $</span>
          </p>
          <button className="w-full bg-lime-400 rounded py-2 cursor-pointer">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};
