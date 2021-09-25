import React from "react";
import Section from "../section";
import Button from "../button";
import {chain} from "lodash";
import IconMenuSVG from "../../../static/images/icon-menu.svg";

const MenuItemsPositions = {
    Left: "left",
    Right: "right"
}

const HomeMenuItems = [
    {title: <IconMenuSVG className="IconHome"/>, url: "/", position: MenuItemsPositions.Left},
    {title: "Supported Carts", url: "/", position: MenuItemsPositions.Left},
    {title: "Services", url: "/", position: MenuItemsPositions.Left},
    {title: "Contact Us", url: "/", position: MenuItemsPositions.Left},
    {title: <Button title="Sign Up"/>, url: "/", position: MenuItemsPositions.Right},
    {title: "Sign In", url: "/", position: MenuItemsPositions.Right},
] ;
const bootstrap = (items, position) => {
    const createItems = ({title = "", url = ""}, key) => {
        return (
            <a href="/" key={key}>
                {title}
            </a>
        )
    }
    const li = chain(items)
        .filter({position})
        .map(createItems)
        .value();

    return (<div key={position} className={position}>{li}</div>)
}

function HomeMenu({items = HomeMenuItems}) {
    const left = bootstrap(items, HomeMenu.MenuItemsPositions.Left);
    const right = bootstrap(items, HomeMenu.MenuItemsPositions.Right);

    return (
        <Section className="HomeMenu">
            {left}
            {right}
        </Section>
    );
}

HomeMenu.MenuItemsPositions = MenuItemsPositions ;
export default HomeMenu;
