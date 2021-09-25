import React from "react";
import Section from "../../section";
import Header from "../../header";
import Button from "../../button";
import HomeMenu from "../../menu/HomeMenu";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeMenuItems = [
    {title:  <FontAwesomeIcon icon={faHome} />, url: "/", position: HomeMenu.MenuItemsPisitions.Left},
    {title: "Supported Carts", url: "/", position: HomeMenu.MenuItemsPisitions.Left},
    {title: "Services", url: "/", position: HomeMenu.MenuItemsPisitions.Left},
    {title: "Contact Us", url: "/", position: HomeMenu.MenuItemsPisitions.Left},
    {title: <Button title="Sign Up"/>, url: "/", position: HomeMenu.MenuItemsPisitions.Right},
    {title: "Sign In", url: "/", position: HomeMenu.MenuItemsPisitions.Right},
]

export default function Home({children}) {
    return (
        <div className="Home">
            <Header/>
            <HomeMenu items={HomeMenuItems}/>
            <Section>
                {children}
            </Section>
            <Section>
                footer
            </Section>
        </div>
    );
}
