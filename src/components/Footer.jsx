import React from "react";

const styles = {backgroundColor: "rgb(150, 150, 150)"};

export const Footer = (props) => {
    const year = (new Date()).getFullYear();
    return (
        <footer style={styles}>
            Copywrite {year} Brandon Harris
        </footer>
    );
}