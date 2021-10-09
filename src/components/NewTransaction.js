import React from "react";

function NewTransaction() {
    return (
        <>
            <h4 className="bb mv3">
                Enter New Transaction
            </h4>
            <div className="fl w-50 pa2 green">
                <input className="" type="radio" vlaue="Income" name="entry" />Income
            </div>
            <div className="fl w-50 pa2 red">
                <input className="" type="radio" vlaue="Expense" name="entry" />Expense<br />
            </div>            
            <button className="f4 link dim ph3 pv2 mb2 dib white bg-dark-gray">Enter Transaction</button>
        </>
    );
}

export default NewTransaction;