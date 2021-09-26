import React from "react";
import classnames from "classnames";

export default function Page({ className="", top=null, content=null, bottom=null }) {
    return (
        <div className={classnames("Page", className)}>
            <div className="top">{top}</div>
            <div className="content">{content}</div>
            <div className="bottom">{bottom}</div>
        </div>
    )
}
