import RestaurantCard, {RestaurantCardPromoted} from "./RestaurantCard";
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


    // const promotedRestaurantCard = RestaurantCardPromoted(RestaurantCard);

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
            <div className="flex">
               <input className="p-2 m-2 border border-solid border-black" type="text" value={searchText} onChange={(e) => {
                setSearchText(e.target.value);
               }} />

               <button className="px-3 py-1 mb-2 bg-green-200 rounded-lg" type="button" onClick={() => {
                const resultList = listOfRestaurants.filter((restaurant) => {
                    return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
                });
                setFilteredList(resultList);
               }} >Search</button>
               <div className="flex items-center">
                <button className="px-3 py-1 mb-2 ml-20 bg-gray-300 rounded-lg" type="button" onClick={() => {
                    const resultList = listOfRestaurants.filter((res) => res.info.avgRating >= 4);
                    setFilteredList(resultList);
                }}>Top Restaurants </button>
            </div>
            </div>
            
            <div className="flex flex-wrap ml-14">
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