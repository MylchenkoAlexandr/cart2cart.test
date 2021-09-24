import React from "react";
import imgHeaderLogo from "../../static/images/header-logo.png";

export default function Header( props ) {
    return (
        <div className="Header">
            <a href="/" className="logo">
                <img alt="logo" src={ imgHeaderLogo }/>
            </a>
            <ul className="contacts">
                <li>
                    24/7
                    <span className="separator">|</span>
                    <span className="phone">1-800-224-1462</span>

                </li>
                <li>US & Canada Toll Free</li>
            </ul>
        </div>
    );
}
