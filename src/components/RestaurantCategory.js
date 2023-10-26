import CategoryMenu from "./CategoryMenu";
import { useState } from "react";

export const RestaurantCategory = ({data}) => {
    console.log(data);

    const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
        setShowItems(!showItems);
    }

    return (
        <div>
            <div className="bg-gray-200 w-6/12 mx-auto my-2 p-2 shadow-lg" onClick={handleClick}>
                <div className="flex justify-between mb-4 cursor-pointer">
                    <span className="font-bold text-lg">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span>
                        ⬇️
                    </span>
                </div>

                <div>
                    {showItems && <CategoryMenu items={data.itemCards}/>}
                </div>
            </div>
        </div>
    )
}

export default RestaurantCategory;