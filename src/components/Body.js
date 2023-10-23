import RestaurantCard , { withAggregateDiscount } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const AggregatedDiscountOffer = withAggregateDiscount(RestaurantCard);

  // console.log(listOfRestaurant);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);

    // console.log(
    //   json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    // );
    setListOfRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline!! Please check your internet connection</h1>
    );

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex mx-1 my-[-20]">
        <div className="search m-4 p-4">
          <input
            type="text"
            placeholder="Search for restaurants"
            className="px-2 py-1 bg-white border focus:border-none shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1"
            value={searchText}
            onChange={(e) => {
              // console.log(e.target.value)
              setSearchText(e.target.value);
            }}
          />
          {/* border border-solid focus:border-none border-gray-300 focus:outline-none focus:ring focus:ring-blue-200 px-2 py-1 */}
          {/* bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 */}
          <button
            className="px-4 py-2 m-4 bg-gray-100 rounded-lg hover:bg-gray-200"
            onClick={() => {
              // Filter the restraunts card and updates the UI
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
        <button
          className="mx-[-20] px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 font-medium"
          onClick={() => {
            filteredList = listOfRestaurant.filter(
              (res) => res?.info?.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
        
      </div>
      <div className="flex flex-wrap place-content-center">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
          {
            restaurant?.info?.aggregatedDiscountInfoV3 ? (
              <AggregatedDiscountOffer resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )
          }
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
