import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredList, setFilteredList] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json()
        setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }


    const onlineStatus = useOnlineStatus();
    if(onlineStatus == false) return (<h1>Looks like you are offline.</h1>)

    if(listOfRestaurants.length === 0){
        return (<Shimmer />)
    }

    return (
        <div className="body">
            <div className="filter">
               <input className="search-box" type="text" value={searchText} onChange={(e) => {
                setSearchText(e.target.value);
               }} />

               <button className="search-button" type="button" onClick={() => {
                const resultList = listOfRestaurants.filter((restaurant) => {
                    return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
                });
                setFilteredList(resultList);
               }} >Search</button>
            </div>
            <div className="top-res">
                <button className="top-res-btn" type="button" onClick={() => {
                    const resultList = listOfRestaurants.filter((res) => res.info.avgRating >= 4);
                    setFilteredList(resultList);
                }}>Top Restaurants </button>
            </div>
            <div className="restaurant-container">
                {
                    filteredList.map((resCard) => (
                        <Link key={resCard.info.id} to={"/restaurants/" + resCard.info.id}><RestaurantCard resData={resCard}/></Link>
                    )
                )}
                
            </div>
        </div>
    )
}

export default Body;