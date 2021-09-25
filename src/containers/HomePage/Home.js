import React from "react";
import Header from "../../components/header";
import {HomeMenu} from "../../components/menu";
import Footers from "../../components/footer";

export default function Home({children}) {
    return (
        <div className="Home">
            <div className="top">
                <Header/>
                <HomeMenu/>
            </div>
            <div className="content">
                {children}
            </div>
            <div className="bottom">
                <Footers.HomeFooter/>
                <Footers.Copyright/>
            </div>
        </div>
    );
}
