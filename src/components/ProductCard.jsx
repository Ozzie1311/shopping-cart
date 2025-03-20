import { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";

const ProductCard = ({ product, handleClick }) => {
  //Estado para las cantidades de los productos, que por defecto comienzan en 1
  const [quantity, setQuantity] = useState(1);

  //Funcion para aumentar la cantidad
  const handleAdd = () => {
    setQuantity((prev) => prev + 1);
  };

  //Funcion para disminuir la cantidad, pero no permite bajar de 1
  const handleMinus = () => {
    //Esto lo hacemos para mantener un minimo de 1
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  //Funcion que se ejecuta al hacer clic en Add to cart
  const handleAddCart = () => {
    //Pasamos el producto completo con la cantidad seleccionada a la funcion handleClic
    handleClick({ ...product, quantity });
    setQuantity(1); //Reinciamos la cantidad a 1 despues de agregar
  };

  return (
    <div className="flex flex-col justify-between bg-slate-800 px-2 rounded gap-3">
      <img
        src={product.image}
        alt={product.description}
        className="h-62 w-full object-fit rounded"
      />
      <h2 className="text-emerald-50 font-bold">{product.title}</h2>
      <p className="text-emerald-50 font-bold">
        Price: <span className="text-lime-400 font-bold">{product.price}$</span>
      </p>
      <p className="text-emerald-50 font-bold">Cantidad:</p>
      <div className="flex justify-between gap-1">
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
          className="bg-emerald-50 py-1 rounded px-2"
        />
        <div className="flex gap-2">
          <button
            className="bg-lime-400 py-1 px-3 rounded cursor-pointer hover:shadow-xl"
            onClick={handleAdd}
          >
            <BiPlus className="text-xl" />
          </button>
          <button
            className="bg-lime-400 py-1 px-3 rounded cursor-pointer hover:shadow-xl"
            onClick={handleMinus}
          >
            <BiMinus className="text-xl" />
          </button>
        </div>
      </div>
      <button
        onClick={handleAddCart}
        className="w-full bg-lime-400 rounded py-2 cursor-pointer font-semibold"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
