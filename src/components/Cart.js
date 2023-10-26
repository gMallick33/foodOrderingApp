import { useDispatch, useSelector } from "react-redux";
import CategoryMenu from "./CategoryMenu";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div>
            <div className="text-bold text-xl text-center mb-2">
                Cart Items
            </div>
            <div className="w-6/12 m-auto">
                <button className="bg-gray-400 text-bold rounded-md px-4 shadow-lg" onClick={handleClearCart}>Clear</button>
            </div>
            <div className="w-6/12 m-auto">
                <CategoryMenu items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;