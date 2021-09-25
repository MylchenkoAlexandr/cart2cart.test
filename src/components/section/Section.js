import React from "react";
import classnames from "classnames";

export default function Section({children, className}) {
    return (
        <div className={classnames( "Section", className )}>
            <div className="wrapper">
                {children}
            </div>
        </div>
    );
}
