import React from "react";
import Section from "../section";

export default function Copyright() {
    return (
        <Section className="Copyright">
            <small><a href="http://magneticone.com/" target="_blank" title="MagneticOne">MagneticOne</a> © 2008-2021</small>
            <small><a href="https://www.shopping-cart-migration.com/release-notes" className="version">Service Version: 6.0.16324 (Sep 24, 2021)</a></small>
        </Section>
    );
}
