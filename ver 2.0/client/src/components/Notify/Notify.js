import React from "react";
import ICON_ME from "../../assets/img/ICON_ME.png";

function Notify(props) {
    const { children } = props;
    return (
        <div className="Notify clearfix">
            <img src={ICON_ME} alt="icon" />
            <span className="error_message">{children}</span>
        </div>
    );
}

export default Notify;
