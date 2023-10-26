import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom"
import Contact from "./Contact";
import Body from "./Body";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
    const [buttonName, setButtonName] = useState("login");
    const onlineStatus = useOnlineStatus();

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between shadow-sm bg-orange-200 my-2">
            <div className="logo-container">
                <img className="w-24" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-10">
                    <li className="px-4">Online-Status: {onlineStatus ? "🟢": "🔴"}</li>
                    <li className="px-4">
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li className="px-4">
                        <Link to={"/contact"}>Contact</Link>
                    </li>
                    <li className="px-4">Login</li>

                    <li className="px-4">
                        <Link to={"/cart"}>Cart ({cartItems.length})</Link>
                    </li>

                    <li className="px-4">
                        <button className="login" onClick={() => {
                            buttonName === "login" ? setButtonName("logout") : setButtonName("login");
                        }}>
                            {buttonName}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;