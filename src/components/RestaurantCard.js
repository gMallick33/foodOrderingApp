import { IMAGE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {name, cuisines, avgRating, costForTwo} = resData?.info;
    const {slaString} = resData?.info?.sla;
    return (
        <div className="p-4 m-4 w-[200px] bg-gray-200 rounded-lg hover:bg-gray-400">
            <img className="h-[200px] w-[180px] rounded-lg" alt= "res-logo" src = {IMAGE_URL + resData.info.cloudinaryImageId}/>
            <h3 className="font-bold text-lg py-1">{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating + "stars"}</h5>
            <h5>{slaString}</h5>
            <h5>{costForTwo}</h5>
            
        </div>
    )
}

export const RestaurantCardPromoted = (RestaurantCard) => {
    return (props) => {
        <div>
            <h3>Promoted</h3>
            <RestaurantCard resData = {...props}/>
        </div>
    }
}

export default RestaurantCard;