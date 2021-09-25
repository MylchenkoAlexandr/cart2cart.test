import React from "react";
import {PHONE_NUMBER, WORK_TIME} from "../../models/constants/common";
import Section from "../section";

export default function Header() {
    return (
        <Section className="Header">
            <a href="/" className="logo">
                <img alt="logo" src="/static/images/header-logo.png"/>
            </a>
            <ul className="contacts">
                <li>
                    {WORK_TIME}
                    <span className="separator">|</span>
                    <span className="phone">{PHONE_NUMBER}</span>
                </li>
                <li>US & Canada Toll Free</li>
            </ul>
        </Section>
    );
}
