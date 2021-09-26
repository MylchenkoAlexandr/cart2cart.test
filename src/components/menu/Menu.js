import React from "react";
import Section from "../section";
import {chain} from "lodash";
import classnames from "classnames";
import {MenuItemsPositions} from "../../models/constants/menu";

const bootstrap = (items, position) => {
    const createItems = ({title = "", url = "", selected = false }, key) => (
        <a href="/" key={key} data-selected={ selected }>{title}</a>
    ) ;

    const li = chain(items)
        .filter({position})
        .map(createItems)
        .value();

    return (<div key={position} className={position}>{li}</div>)
}

export default function Menu({items = [], className="" }) {
    const left = bootstrap(items, MenuItemsPositions.Left);
    const right = bootstrap(items, MenuItemsPositions.Right);

    return (
        <Section className={classnames( "Menu", className )}>
            {left}
            {right}
        </Section>
    );
}
