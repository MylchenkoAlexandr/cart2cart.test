import React from "react";

export default function Section({children}) {
    return (
        <div className="Section">
            <div className="wrapper">
                {children}
            </div>
        </div>
    );
}
