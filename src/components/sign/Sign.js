import React, {useState} from "react";
import {Tabs} from 'antd';
import * as TabComponents from '../sign/tabs';
import Section from "../section";
import {find, first, map} from "lodash";

function bootstrap(items) {
    return map(items, ({id, title, Component}) => {
        return (
            <Tabs.TabPane key={id} tab={ title }>
                <Component {...{id, title}}/>
            </Tabs.TabPane>
        )
    });
}

const TabItems = [
    {id: "si", title: "Sign In", Component: TabComponents.SignIn},
    {id: "su", title: "Sign Up", Component: TabComponents.SignUp},
    {id: "fyp", title: "Forgot Your Password?", Component: TabComponents.ForgotYourPassword},
]

export default function Sign({items = [...TabItems]}) {
    const tabs = bootstrap(TabItems);
    const [activeTab, setTab] = useState(first(items));
    const onTabChange = (id) => setTab(find(items, {id}));

    return (
        <Section className="Sign">
            <h1>{ activeTab.title }</h1>
            <Tabs type="card" activeKey={activeTab.id} className="SignTabs" onChange={onTabChange} centered={true}>
                {tabs}
            </Tabs>
        </Section>
    );
}
