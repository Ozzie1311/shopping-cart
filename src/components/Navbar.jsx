import { Link } from "react-router-dom";
import {
  CgShoppingCart,
  CgHome,
  CgShoppingBag,
  CgCheckR,
} from "react-icons/cg";

export const Navbar = () => {
  return (
    <div className="flex justify-around items-center py-4">
      <div className="flex justify-around items-center gap-10">
        <Link
          to="/"
          className="text-md text-emerald-50  font-medium flex justify-center items-center gap-1 hover:text-lime-400 transition"
        >
          <CgHome />
          Home
        </Link>
        <Link
          to="/shop"
          className="text-md text-emerald-50  font-medium flex justify-center items-center gap-1 hover:text-lime-400 transition"
        >
          <CgShoppingBag />
          Shop
        </Link>
      </div>
      <div className="flex justify-around items-center gap-10">
        <Link
          className=" text-emerald-50 gap-2 font-medium  flex justify-center items-center hover:text-lime-400 transition"
          to="/checkout"
        >
          Checkout <CgCheckR />
        </Link>
        <button className=" bg-lime-400 flex justify-center items-center gap-1 py-1 px-4 rounded cursor-pointer hover:shadow-xl transition">
          Carrito <CgShoppingCart />
        </button>
      </div>
    </div>
  );
};
