import React from "react";
import Header from "../../components/header";
import {MyMigrationsMenu, TopMenu} from "../../components/menu";
import Footers from "../../components/footer";
import Wizard from "../../components/wizard";
import Page from "../../components/page";
import {MenuItemsPositions} from "../../models/constants/menu";

const MyMigrationsMenuItems = [
    {title: "Create Migration", url: "/", position: MenuItemsPositions.Left},
    {title: "My Migrations", url: "/", position: MenuItemsPositions.Left},
    {title: "My Payments", url: "/", position: MenuItemsPositions.Left},
    {title: <span className="profile-submenu">Hi, UserName <p className="fa-icon angle-down"/></span>, url: "/", position: MenuItemsPositions.Right, selected: true },
] ;

export default function WizardPaqe() {
    const top = (
        <>
            <TopMenu/>
            <Header/>
            <MyMigrationsMenu items={ MyMigrationsMenuItems }/>
        </>
    ) ;
    const content = (
        <>
            <Wizard/>
        </>
    ) ;
    const bottom = (
        <>
            <Footers.WizardFooter/>
            <Footers.Copyright/>
        </>
    );

    return ( <Page className="Wizard" { ... { top, content, bottom }}/> )
}

