import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex justify-around items-center bg-slate-800 py-4">
      <div className="flex justify-around items-center gap-3">
        <Link to="/" className="hover:text-amber-300">
          Home
        </Link>
        <Link to="/shop">Shop</Link>
      </div>
      <div className="flex justify-around items-center gap-3">
        <Link className="bg-slate-800" to="/checkout">
          Checkout
        </Link>
        <button className="bg-slate-700">Carrito</button>
      </div>
    </div>
  );
};
