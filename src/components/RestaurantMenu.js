import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { RestaurantCategory } from "./RestaurantCategory";

const RestaurantMenu = () => {

    const {resid} = useParams();
    const {restaurantInfo, categoryList} = useRestaurantMenu(resid);

    if(restaurantInfo == null) return <Shimmer />

    const {name, cuisines, avgRating, costForTwoMessage} = restaurantInfo;
    // const filteredList = itemList.map((item) => {
    //     return (<li key={item.card.info.id}>{item.card.info.name}: Rs {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>)
    // })
    
    const foodCategories = categoryList.filter((cat) => {
       return cat.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    })
    console.log(categoryList);
    console.log(foodCategories);

    return (
        <div className="text-center">
            <h2 className="text-xl font-bold">{name}</h2>
            <h3 className="text-lg font-medium mt-4">{cuisines.join(",")}</h3>
            <h3 className="text-base font-medium">{costForTwoMessage}</h3>
            <h3 className="text-base font-medium">{avgRating} Stars</h3>
            {foodCategories.map((category) => <RestaurantCategory data={category.card.card} />)}
        </div>
    )
}

export default RestaurantMenu;