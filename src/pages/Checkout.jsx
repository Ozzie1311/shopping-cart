export const CheckoutPage = ({ checkout, setCheckout }) => {
  // Función para simular el envío de la orden
  const handlePlace = () => {
    alert("Orden enviada con éxito");
    setCheckout([]); // Limpia el carrito después de enviar (descomentado para que funcione)
  };

  // Calculamos el total fuera del renderizado para mayor claridad y depuración
  const totalPrice = checkout.reduce((acc, current) => {
    // Verificamos que price y quantity existan y sean números
    const price = Number(current.price) || 0; // Si no es número, usa 0
    const quantity = Number(current.quantity) || 0; // Si no es número, usa 0
    return acc + price * quantity; // Suma el subtotal sin redondear en cada paso
  }, 0);

  // Para depuración: imprime el estado de checkout y el total calculado
  console.log("Checkout:", checkout);
  console.log("Total Price:", totalPrice);

  return (
    <>
      {/* Título de la página */}
      <h1 className="text-4xl text-center font-bold text-lime-400">Checkout</h1>
      <div className="container grid grid-cols-2 mx-auto p-4 text-white gap-5">
        {/* Condicional para mostrar ítems o mensaje de carrito vacío */}
        {checkout.length === 0 ? (
          <div className="container mx-auto font-bold font-emerald-50 text-center text-2xl">
            No items in cart
          </div>
        ) : (
          <div className="flex gap-3 flex-col container">
            {/* Mapeamos los ítems del carrito */}
            {checkout.map((item) => (
              <div key={item.id}>
                <div className="flex gap-4 p-4 bg-slate-700 text-slate-900 font-bold rounded">
                  {/* Imagen del producto */}
                  <img
                    src={item.image}
                    alt={item.description}
                    className="h-24 w-24 rounded"
                  />
                  <div className="flex flex-col gap-3">
                    {/* Nombre del producto */}
                    <p>
                      Product:{" "}
                      <span className="text-lime-400 font-bold">
                        {item.title}
                      </span>
                    </p>
                    {/* Cantidad */}
                    <p>
                      Quantity:{" "}
                      <span className="text-lime-400 font-bold">
                        {item.quantity}
                      </span>
                    </p>
                    {/* Subtotal del ítem */}
                    <p>
                      Price:{" "}
                      <span className="text-lime-400 font-bold">
                        {(item.price * item.quantity).toFixed(2)} $
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Mostrar el total y el botón solo si hay ítems */}
        {checkout.length !== 0 ? (
          <div className="container mx-auto bg-slate-700 rounded p-10">
            {/* Mostramos el total calculado */}
            <p className="text-slate-900 text-center font-bold text-3xl">
              Total Price:
              <span className="text-lime-400">
                {" "}
                {totalPrice.toFixed(2)} $ {/* Redondeamos solo al final */}
              </span>
            </p>
            {/* Botón para simular la orden */}
            <button
              className="text-slate-800 bg-lime-400 font-bold px-4 rounded py-2 w-full mt-10 cursor-pointer"
              onClick={handlePlace}
            >
              Place order
            </button>
          </div>
        ) : (
          "" // Espacio vacío si no hay ítems
        )}
      </div>
    </>
  );
};
