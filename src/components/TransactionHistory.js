import React from "react";

function TransactionHistory(props) {
    let detail = "Milk ";
    let val = 50
    
    return (
        <>
            <h4>
                Transaction History
            </h4>                
            <div className="ba br3 mb3 h5 overflow-y-auto">                
                <ul className="ba h2">
                    <li className="dib fl">{detail}:</li>
                    <li className="dib fr pr3">${val}</li>
                </ul>
                <ul className="ba h2">
                    <li className="dib fl">{detail}:</li>
                    <li className="dib fr pr3">${val}</li>
                </ul>
                <ul className="ba h2">
                    <li className="dib fl">{detail}:</li>
                    <li className="dib fr pr3">${val}</li>
                </ul>
                <ul className="ba h2">
                    <li className="dib fl">{detail}:</li>
                    <li className="dib fr pr3">${val}</li>
                </ul>
                <ul className="ba h2">
                    <li className="dib fl">{detail}:</li>
                    <li className="dib fr pr3">${val}</li>
                </ul>
            </div>
        </>
    );
}

export default TransactionHistory;