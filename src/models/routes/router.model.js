import React from 'react';
import {Route} from "react-router-dom";
import RoutesModel from "./routes.model";
import Application from "../../containers/Application";

const factory = ({model, onRouteRendering}, collection = []) => {
    for (let item of model) {
        const {id, Component, children} = item;
        if (children && children.length) factory({model: children, onRouteRendering}, collection);
        const props = {
            key: id,
            path: `/${id}`,
            render: onRouteRendering({id, Component})
        };

        collection.push(<Route {...props} />)
    }
    return collection;
}

export default function Routes() {
    const onRouteRendering = ({id, Component}) => (route) => {
        const { history } = route ;
        return <Component id={ id } history={ history } />
    }
    const routes = factory({model: RoutesModel, onRouteRendering});
    routes.push(<Route key="/" path="/" exact={true} render={onRouteRendering({id: "/", Component: Application})}/>)

    return (
        <>
            { routes }
        </>
    ) ;
}
