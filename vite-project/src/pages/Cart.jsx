import { useDispatch, useSelector } from "react-redux";
import {increment, decrement, deleteAllItems, deleteFromCart } from "../Redux/appslice";
import { MdDelete } from "react-icons/md";

const Cart = () => {
    const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.appReducer.cart);

  if (cartItems.length === 0) {
    return <div className="text-center p-8">Cart is empty</div>;
  }

  return (
    <div className="">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="p-4 mb-2 rounded flex items-center gap-4"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-20 h-20 object-contain"
            />
            <div className="flex-1">
              <h1 className="font-bold">{item.title}</h1>
              <h2 className="dark:text-gray-300 text-blue-500">${item.price.toFixed(2)}</h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => dispatch(decrement({ id: item.id }))}
                  className= "dark:text-white dark:bg-green-900 px-2 rounded"
                >
                  -
                </button>
                <span className="dark:text-yellow-300">{item.quantity}</span>
                <button
                  onClick={() => dispatch(increment({ id: item.id }))}
                  className="dark:text-white dark:bg-green-900 px-2 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(deleteFromCart({ id: item.id }))}
                  className="text-2xl px-2 rounded"
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          </div>
        ))}
        <div>
        <button
          onClick={() => dispatch(deleteAllItems())}
          className="dark:bg-green-900 bg-red-900 lg:w-[300px] mx-auto h-[50px] text-white px-3 py-1
          rounded transition"
        >
          Delete All Items
        </button>
        <p className=" mt-4 text-xl font-bold">
          Total price: $
          {cartItems
            .reduce(
              (total, item) => total + item.price * (item.quantity ?? 1),
              0,
            )
            .toFixed(2)}
        </p>{" "}
      </div>
      </div>
    </div>
  );
};

export default Cart;
