import React from "react";

function NewTransaction() {
    return (        
        <div className="ba pa1">
        <h4 className="">
                Enter New Transaction
            </h4>
            <div className="fl w-50 pa2 bg-green mv1">
                <input className="" type="radio" vlaue="Income" name="entry" /> Income
            </div>
            <div className="fl w-50 pa2 bg-red mv1">
                <input className="" type="radio" vlaue="Expense" name="entry" /> Expense<br />
            </div>

            <div class="measure">
                <label for="name" className="fl f3 b db mb1">Detail:</label>
                <input id="name" className="input-reset ba b--black-20 pa1 mb1 db w-100" type="text" aria-describedby="name-desc"  placeholder="Enter detail of transaction" />                
            </div>
            <div class="measure">
                <label for="name" className="fl f3 b db mb1">Amount:</label>
                <input id="name" className="input-reset ba b--black-20 pa1 mb1 db w-100" type="number" aria-describedby="name-desc"  placeholder="Enter Amount" />                
            </div>

            <button className="f4 link dim ph3 pv2 mb2 dib white bg-dark-gray">Enter Transaction</button>
        </div>            
    );
}

export default NewTransaction;