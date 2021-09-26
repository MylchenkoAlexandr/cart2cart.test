import React from "react";
import Header from "../../components/header";
import {HomeMenu} from "../../components/menu";
import Footers from "../../components/footer";
import Sign from "../../components/sign";
import IconHomeSvg from "../../../static/images/icon-menu.svg";
import {MenuItemsPositions} from "../../models/constants/menu";
import Button from "../../components/button";
import Page from "../../components/page";

const HomeMenuItems = [
    {title: <IconHomeSvg className="IconHome"/>, url: "/", position: MenuItemsPositions.Left},
    {title: "Supported Carts", url: "/", position: MenuItemsPositions.Left},
    {title: "Services", url: "/", position: MenuItemsPositions.Left},
    {title: "Contact Us", url: "/", position: MenuItemsPositions.Left},
    {title: <Button title="Sign Up"/>, url: "/", position: MenuItemsPositions.Right},
    {title: "Sign In", url: "/", position: MenuItemsPositions.Right},
] ;

export default function SignPage() {
    const top = (
        <>
            <Header/>
            <HomeMenu items={ HomeMenuItems }/>
        </>
    ) ;
    const content = (
        <>
            <Sign/>
        </>
    ) ;
    const bottom = (
        <>
            <Footers.HomeFooter/>
            <Footers.Copyright/>
        </>
    );

    return ( <Page className="SignPage" { ... { top, content, bottom }}/> )
}
