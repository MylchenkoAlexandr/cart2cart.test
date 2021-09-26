import React from "react";
import Section from "../section";
import Button from "../button";
import {MyMigrationsGrid} from "../grid";
import {PlayCircleFilled, CaretRightFilled} from "@ant-design/icons";

function GridNameCellRenderer({ id="", status="", from="", to=""}) {
    function getBrandImage( name ) {
        switch ( name ) {
            case "shopify": return <img src="/static/images/brand-shopify.gif"/>
            case "magento": return <img src="/static/images/brand-magento.gif"/>
        }
    }
    return (
        <>
            <div className="status">
                <PlayCircleFilled />
                <p data-field="id">#{id}</p>
                <p data-field="status">{status}</p>
            </div>
            <div className="direction">
                { getBrandImage( from ) }
                <CaretRightFilled />
                { getBrandImage( to ) }
            </div>
            <div className="details">
                <a href="/">
                    <p className="sprite icon-details"/>Show Details
                </a>
                <a href="/">
                    <p className="sprite icon-migration-log"/>Migration Log
                </a>
            </div>
        </>
    )
}
function GridDateCellRenderer({created="", modified=""}) {
    return (
        <>
            <div className="updates">
                <p href="/">
                    <p className="sprite icon-created"/>{created}
                </p>
                <p href="/">
                    <p className="sprite icon-modified"/>{modified}
                </p>
            </div>
        </>
    )
}
function GridAvailableActionsCellRenderer( actions=[] ) {
    return (
        <div className="actions">
            <Button title="Continue Migration" className="continue-migration"/>
            <Button title="Edit Migration" className="edit-migration"/>
        </div>
    )
}

const GridRendererConfig = {
    "name": {
        span: 12,
        Renderer: GridNameCellRenderer
    },
    "date": {
        span: 6,
        Renderer: GridDateCellRenderer
    },
    "available actions": {
        span: 6,
        Renderer: GridAvailableActionsCellRenderer
    },
}

export default function MyMigrations({ dataset=[] }) {
    return (
        <Section className="MyMigrations">
            <div className="header">
                <h1>MY MIGRATIONS</h1>
                <Button title="Create New Migration" className="create-migration"/>
            </div>
            <MyMigrationsGrid data={ dataset } headers={[ "name", "date", "available actions" ]} config={GridRendererConfig} />
            <div className="paginator">
                <div className="count">Page 1 of 1:</div>
                <ul className="pages">
                    <li>
                        <a href="/" data-active-page="true">1</a>
                    </li>
                </ul>
            </div>
        </Section>
    );
}
