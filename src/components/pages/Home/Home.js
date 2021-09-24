import React from "react";
import Section from "../../section";
import Header from "../../header";

export default function Home({children}) {
    return (
        <div className="Home">
            <Section>
                <Header/>
            </Section>
            <Section>
                { children }
            </Section>
            <Section>
                footer
            </Section>
        </div>
    );
}
