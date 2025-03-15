import img1 from "./imagen.svg";
import { GoArrowRight } from "react-icons/go";

export const Home = () => {
  return (
    <div className="grid grid-cols-2 w-full max-w-5xl mx-auto gap-20">
      <div className="flex flex-col gap-6 mt-30 px-4">
        <h1 className="text-lime-400 font-extrabold text-5xl ">
          Bienvenido a nuestra tienda
        </h1>
        <p className="text-emerald-50 font-bold">
          En nuestra tienda encontraras los mejores productos y los mejores
          precios de todo el mercado, ven y visitanos.
        </p>
        <button className="bg-lime-400 rounded font-bold flex justify-center items-center gap-3 px-1 py-2 text-slate-800 hover:shadow-xl cursor-pointer transition">
          Ir la tienda{" "}
          <GoArrowRight className="text-slate-800 text-2xl font-bold" />
        </button>
      </div>
      <img src={img1} alt="" className="w-full h-full" />
    </div>
  );
};
