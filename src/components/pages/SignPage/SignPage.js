import React from "react";
import Home from "../../../containers/HomePage";
import Sign from "../../sign";
import Section from "../../section";

export default function SignPage() {
    return (
        <Home>
            <Section className="SignPage">
                <Sign/>
            </Section>
        </Home>
    );
}
