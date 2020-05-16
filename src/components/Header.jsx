import React from "react";

export const Header = (props) => {
    return (
        <header style={{ backgroundColor: props.color, fontSize: props.fontSize }}>
            <div className="container">
                {props.children}
            </div>
        </header>
    )
}
