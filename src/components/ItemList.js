import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
//   console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="h-[200] m-2 p-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-semibold">{item.card.info.name}</span>
              <p className="font-normal">₹{item.card.info.price / 100}</p>
            </div>
            <p className="text-sm font-extralight">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4 relative">
            <div className="absolute top-[75] right-[-32]">
              <button className="w-20 h-[38] p-2 mx-16 rounded-md bg-white text-green-500 font-semibold shadow-lg">
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
