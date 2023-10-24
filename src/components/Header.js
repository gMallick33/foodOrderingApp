import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const [buttonName, setButtonName] = useState("login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
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