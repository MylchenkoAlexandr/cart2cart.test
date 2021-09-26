import React from "react";
import Header from "../../components/header";
import {MyMigrationsMenu, TopMenu} from "../../components/menu";
import Footers from "../../components/footer";
import MyMigrations from "../../components/my_migrations";
import Page from "../../components/page";
import {MenuItemsPositions} from "../../models/constants/menu";

const MyMigrationsMenuItems = [
    {title: "Create Migration", url: "/", position: MenuItemsPositions.Left},
    {title: "My Migrations", url: "/", position: MenuItemsPositions.Left},
    {title: "My Payments", url: "/", position: MenuItemsPositions.Left},
    {title: <span className="profile-submenu">Hi, UserName <p className="fa-icon angle-down"/></span>, url: "/", position: MenuItemsPositions.Right, selected: true },
] ;
const MyMigrationsDatasetItem = {
    "name": {
        id: 244314,
        status: "new",
        from: "magento",
        to: "shopify",
    },
    "date": {
        created: "2021-09-24 17:36",
        modified: "2021-09-24 17:36"
    },
    "available actions": [ "continue", "edit" ]
}
const MyMigrationsDataset = [
    MyMigrationsDatasetItem,
    //  MyMigrationsDatasetItem,
    //  MyMigrationsDatasetItem
] ;

export default function MyMigrationsPage() {
    const top = (
        <>
            <TopMenu/>
            <Header/>
            <MyMigrationsMenu items={ MyMigrationsMenuItems }/>
        </>
    ) ;
    const content = (
        <>
            <MyMigrations dataset={ MyMigrationsDataset }/>
        </>
    ) ;
    const bottom = (
        <>
            <Footers.HomeFooter/>
            <Footers.Copyright/>
        </>
    );

    return ( <Page className="MyMigrationsPage" { ... { top, content, bottom }}/> )
}
