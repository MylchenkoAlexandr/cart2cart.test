import React from "react";
import Section from "../section";
import {map} from "lodash";

const Sections = [
    "Cart2Cart Site",
    "Terms of Service",
    "Partner Program",
    "FAQ",
    "Contact Us"
]

function bootstrap( items=[] ) {
    return (
        <ul className="footer-items">
            {map( items, ( title ) => (
                <li><a href="/">{ title }</a></li>
            ))}
        </ul>
    )
}

export default function WizardFooter({ items=[ ... Sections ] }) {
    return (
        <Section className="WizardFooter">
            { bootstrap( items ) }
        </Section>
    );
}
