import { useDispatch } from "react-redux";
import { IMAGE_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const CategoryMenu = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItems = (item) => {
        dispatch(addItem(item));
    }

    return (
        <div>
            {items.map((item) => (
                <div className="flex justify-between">

                    <div key={item.card.info.id} className="text-left border-gray-300 border-b-2 mx-8 mt-4 w-9/12">
                        <div>
                            <span className="text-bold text-lg">{item.card.info.name}</span>
                            <span>- ₹ {item.card.info.price ? item.card.info.price / 100: item.card.info.defaultPrice / 100}</span>
                        </div>
                        <div>
                            <span className="text-xs">{item.card.info.description}</span>
                        </div>
                    </div>

                    <div className="w-3/12">
                        <div className="absolute">
                            <button className="bg-yellow-400 px-4 rounded-md shadow-lg" onClick={() => handleAddItems(item)}>Add +</button>
                        </div>
                        <img src={IMAGE_URL + item.card.info.imageId} className="w-40 h-32 mb-2 rounded-lg"></img>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CategoryMenu;