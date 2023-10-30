import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="m-4 p-4 text-center">
      <h1 className="font-bold text-2xl"></h1>
      <div className="w-6/12 m-auto">
        <button
          className="m-2 p-2 rounded-md bg-green-600 text-white font-semibold hover:shadow-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <>
            <h1 className="m-2 text-lg font-medium">Your cart is empty</h1>
            <h2 className="font-extralight text-base">
              You can go to home page to view more restaurants
            </h2>
            <a href="/">
              <button className="m-5 p-5 rounded-md bg-orange-400 text-white font-semibold hover:shadow-lg ">
                SEE RESTAURANTS NEAR YOU
              </button>
            </a>
          </>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
