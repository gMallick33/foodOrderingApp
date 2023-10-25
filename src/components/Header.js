import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom"
import Contact from "./Contact";
import Body from "./Body";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [buttonName, setButtonName] = useState("login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between shadow-sm bg-yellow-100 my-2">
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
                    <li className="px-4">Cart</li>
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