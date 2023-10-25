import { useState, useEffect } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {

    const [itemList, setItemList] = useState(null);
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    const {resid} = useParams();
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const menu = await fetch(MENU_URL + resid);
        const json = await menu.json();
        setRestaurantInfo(json?.data?.cards[0]?.card?.card?.info);
        setItemList(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        // console.log(itemList);
        // console.log(restaurantInfo);
    }


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