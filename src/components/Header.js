import React from "react";

function Header() {
    return (
        <header>
            <h4 className="mb3 f4">
                Expense Tracker by<br />
            <a
                    className="App-link"
                    href="https://github.com/MoazzamAzeemi"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Moazzam Azeemi
            </a>
            <hr className="mw5"></hr>
            </h4>            
        </header>
    );
}
export default Header;