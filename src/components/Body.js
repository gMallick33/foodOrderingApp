import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                search
            </div>
            <div className="restaurant-container">
                {
                    resList.map((resCard) => (
                        <RestaurantCard key={resCard.info.id} resData={resCard}/>
                    )
                )}
                
            </div>
        </div>
    )
}

export default Body;