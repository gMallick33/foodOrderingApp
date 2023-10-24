import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json()
        setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(listOfRestaurants.length === 0){
        return (<Shimmer />)
    }

    return (
        <div className="body">
            <div className="top-res">
                <button className="top-res-btn" type="button" onClick={() => {
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating >= 4);
                    setListOfRestaurants(filteredList);
                }}>Top Restaurants </button>
            </div>
            <div className="restaurant-container">
                {
                    listOfRestaurants.map((resCard) => (
                        <RestaurantCard key={resCard.info.id} resData={resCard}/>
                    )
                )}
                
            </div>
        </div>
    )
}

export default Body;