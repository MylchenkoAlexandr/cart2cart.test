import React from "react";
import Section from "../section";
import {chain} from "lodash";

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

function HomeMenu({items = []}) {
    const left = bootstrap(items, HomeMenu.MenuItemsPisitions.Left);
    const right = bootstrap(items, HomeMenu.MenuItemsPisitions.Right);

    return (
        <Section className="HomeMenu">
            {left}
            {right}
        </Section>
    );
}

HomeMenu.MenuItemsPisitions = {
    Left: "left",
    Right: "right"
}
export default HomeMenu;
