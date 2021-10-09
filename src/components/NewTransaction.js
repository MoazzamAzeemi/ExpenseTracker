import React, {useState} from "react";

function NewTransaction() {
    const {detail, setDetail} = useState("");
    const {amount, setAmount} = useState(0);
    return (        
        <div className="ba br3 pa1">
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
                <label className="fl f3 b db mb1">Detail:</label>
                <input className="input-reset ba b--black-20 pa1 mb1 db w-100" type="text" aria-describedby="name-desc"  placeholder="Enter detail of transaction" />                
            </div>
            <div class="measure">
                <label className="fl f3 b db mb1">Amount:</label>
                <input className="input-reset ba b--black-20 pa1 mb1 db w-100" type="number" min="0" aria-describedby="name-desc"  placeholder="Enter Amount" />                
            </div>

            <button className="f4 link dim ph3 pv2 mb2 dib white br3 bg-dark-gray" onClick={detail="new detail"}>Record Transaction</button>
        </div>            
    );
}

export default NewTransaction;