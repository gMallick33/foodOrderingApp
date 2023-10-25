import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom"
import Contact from "./Contact";
import Body from "./Body";

const Header = () => {
    const [buttonName, setButtonName] = useState("login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/contact"}>Contact</Link>
                    </li>
                    <li>Login</li>
                    <li>Cart</li>
                    <li>
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