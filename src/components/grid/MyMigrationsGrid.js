import React from "react";
import Grid from "./Grid";

export default function MyMigrationsGrid({ headers=[], data=[], config={} }) {
    return (<Grid className="MyMigrationsGrid" data={ data } headers={ headers } config={config}/>);
}
