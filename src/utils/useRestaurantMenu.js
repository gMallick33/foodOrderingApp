import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resid) => {
    const [itemList, setItemList] = useState(null);
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    
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

    return {restaurantInfo, itemList};
}

export default useRestaurantMenu;