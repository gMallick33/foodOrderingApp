import { IMAGE_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {name, cuisines, avgRating, costForTwo} = resData?.info;
    const {slaString} = resData?.info?.sla;
    return (
        <div className="restaurant-card">
            <img className="res-logo" alt= "res-logo" src = {IMAGE_URL + resData.info.cloudinaryImageId}/>
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating + "stars"}</h5>
            <h5>{slaString}</h5>
            <h5>{costForTwo}</h5>
            
        </div>
    )
}

export default RestaurantCard;