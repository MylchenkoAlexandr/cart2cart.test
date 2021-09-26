import React from "react";
import Header from "../../components/header";
import {HomeMenu} from "../../components/menu";
import Footers from "../../components/footer";
import Sign from "../../components/sign";

export default function SignPage() {
    return (
        <div className="SignPage">
            <div className="top">
                <Header/>
                <HomeMenu/>
            </div>
            <div className="content">
                <Sign/>
            </div>
            <div className="bottom">
                <Footers.HomeFooter/>
                <Footers.Copyright/>
            </div>
        </div>
    );
}
