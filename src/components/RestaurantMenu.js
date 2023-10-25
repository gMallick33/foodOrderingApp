import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {resid} = useParams();
    const {restaurantInfo, itemList} = useRestaurantMenu(resid);

    if(restaurantInfo == null) return <Shimmer />

    const {name, cuisines, avgRating, costForTwoMessage} = restaurantInfo;
    const filteredList = itemList.map((item) => {
        return (<li key={item.card.info.id}>{item.card.info.name}: Rs {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>)
    })
    return (
        <div>
            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h3>{avgRating}</h3>

            <ul>{filteredList}</ul>
        </div>
    )
}

export default RestaurantMenu;