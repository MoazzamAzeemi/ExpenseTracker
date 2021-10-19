import React, {useState} from "react";

function Balance(props) {
    let bg = "bg-green";
    if(props.balance===0){bg = "bg-yellow"};
    if(props.balance<0){bg ="bg-red"};
    const {income, setIncome} = useState(45);
    console.log({income});
    const {expense, setExpense} = useState(30);
    return (
        <div className="mv3 ba br3 pl2 pr2 pb4">        
            <h4>
                Current Balance<br/>
                <div className={`f2 br3 ${bg}`}>
                    ${(props.balance).toFixed(2)}/-
                </div>
                <div className="">
                    <div className="fl f4">
                        <h4 className="green">Total Income</h4>
                        <p className="mb3">${income}</p>
                    </div>
                    <div className="fr f4">
                        <h4 className="red">Total Expense</h4>
                        <p className="mb3">${expense}</p>
                    </div>
                </div>
            </h4><br />
        </div>
    );
}

export default Balance;