import React from "react";
import classnames from "classnames";

export default function Button({onClick, title="", className=""}) {
    return (
        <button className={ classnames( "Button", className ) } onClick={ onClick }>
            {title}
        </button>
    );
}
