import React from "react";

function Balance(props) {
    return (        
        <h4 className="mv3">
            Current Balance<br/>
            <div className="f2">
                ${(props.balance).toFixed(2)}
            </div>
            <div className="">

            </div>

        </h4>
    );
}

export default Balance;