import React, {useReducer, useState} from "react";
//import calculator from "./Calculator";

function NewTransaction() {
    const [debit, setDebit] = useState(true);
    const [detail, setDetail] = useState("");
    const [amount, setAmount] = useState(0);
  //  let [state, dispatch] = useReducer(calculator, amount);    
    return (        
        <div className="ba br3 pa1">
            <h4 className="">
                Enter New Transaction
            </h4>
            <form>
                <div className="fl w-50 pa2 bg-green mv1">
                    <input className="" type="radio" vlaue="Income" name="entry" /> Income
                </div>
                <div className="fl w-50 pa2 bg-red mv1">
                    <input className="" type="radio" vlaue="Expense" name="entry" /> Expense<br />
                </div>
                
                <div class="measure">
                    <label className="fl f3 b db mb1" htmlFor="detail">
                        Detail:
                    </label>
                    <input 
                        className="input-reset ba b--black-20 pa1 mb1 db w-100" 
                        type="text" 
                        id="detail"
                        aria-describedby="name-desc"  
                        placeholder="Enter detail of transaction" 
                    />                
                </div>
                <div class="measure">
                    <label className="fl f3 b db mb1" htmlFor="amount">
                        Amount:
                    </label>
                    <input 
                        className="input-reset ba b--black-20 pa1 mb1 db w-100" 
                        type="number" 
                        min="0"
                        id="amount"
                        aria-describedby="name-desc"  
                        placeholder="Enter Amount" 
                    />                
                </div>
                <button 
                    className="f4 link dim ph3 pv2 mb2 dib white br3 bg-dark-gray" 
                    onClick={()=> {}}>
                        Record Transaction
                </button>
            </form>
        </div>            
    );
}

export default NewTransaction;