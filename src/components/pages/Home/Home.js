import React from "react";
import Section from "../../section";
import Header from "../../header";
import {HomeMenu} from "../../menu";
import Footers from "../../footer";

export default function Home({children}) {
    return (
        <div className="Home">
            <div className="top">
                <Header/>
                <HomeMenu/>
            </div>
            <div className="content">
                <Section>
                    {children}
                </Section>
            </div>
            <div className="bottom">
                <Footers.HomeFooter/>
                <Footers.Copyright/>
            </div>
        </div>
    );
}
