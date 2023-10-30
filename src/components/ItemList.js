import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  // console.log(items);

const dispatch = useDispatch();
 
const handleAddItem = (item) => {
  // Dispatch an action
  dispatch(addItem(item))
}
  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="h-[220] m-2 p-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-semibold">{item.card.info.name}</span>
              <p className="font-normal">₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</p>
            </div>
            <p className="text-sm font-extralight">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 relative">
            <div className="absolute top-[75] right-[-32]">
              <button className="w-20 h-[38] p-2 mx-16 rounded-md bg-white text-green-500 font-semibold shadow-lg"
              onClick={()=>handleAddItem(item)}>
                Add
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
