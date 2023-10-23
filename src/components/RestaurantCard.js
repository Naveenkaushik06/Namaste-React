import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData.info);
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId,
    areaName,
    sla,
  } = resData.info;
  return (
    <div className="m-4 p-4 w-[250] h-[330] rounded-xl bg-green-50 hover:bg-gray-200">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId} alt="" />
      <h3 className="font-bold py-3 text-xl">{name}</h3>
      <h4 className="font-medium">{avgRating} stars • {sla.slaString}</h4>
      <h4 className="text-sm font-light">{cuisines.join(", ")}</h4>
      {/* <h4 className="font-light">{costForTwo}</h4> */}
      <h4 className="font-light">{areaName}</h4>
    </div>
  );
};

// Higher Order Component
// input - RestaurantCard => PromotedRestaurantCard ~ aggregatedDiscountInfoV3

export const withAggregateDiscount = (RestaurantCard) => {
  return (props) => {
    // console.log(props);
    const { header, subHeader } = props.resData.info.aggregatedDiscountInfoV3;
    return (
      <div className="relative">
        <label className="text-white m-2 p-2 absolute top-28 left-6 font-extrabold text-xl ">
          {header} {subHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
