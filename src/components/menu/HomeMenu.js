import React from "react";
import Menu from "./Menu";

export default function HomeMenu({items = [ ... HomeMenuItems ]}) {
    return (<Menu items={ items } className="HomeMenu"/>)
}
