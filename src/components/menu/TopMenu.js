import React from "react";
import Section from "../section";
import {map} from "lodash";

const Items = [
    { title: "My Migrations List" },
    { title: "Edit Personal Info" },
    { title: "Add Funds" },
    { title: "Contact Us" },
    { title: "Logout" },
    { title: <span className="icon-wallet">$0</span> },
]

function bootstrap ( items ) {
    const li = map( items, ({ title, url="/" }) => (
        <li><a href={ url }>{ title }</a></li>
    )) ;
    return (<ul className="menu-items">{ li }</ul>)
}

export default function TopMenu({ items = [ ... Items ] }) {
    const content = bootstrap( items ) ;
    return (
        <Section className="TopMenu">
            { content }
        </Section>
    );
}
