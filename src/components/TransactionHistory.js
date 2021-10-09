import React from "react";

function TransactionHistory(props) {
    var detail = "milk";
    var val = 50
    return (
        <>
            <h4 className="ba br3 mb3 h5 overflow-y-auto">
            Transaction History<br />
            <h3>{detail} {val}</h3>
            </h4>
        </>
    );
}

export default TransactionHistory;