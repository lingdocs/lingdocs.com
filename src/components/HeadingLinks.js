import React from "react";

const btnStyle = {
    border: "2px solid white",
    padding: "0.75rem",
    margin: "0 1rem",
};

function HeadingLinks() {
    return <div className="d-flex flex-row justify-content-center" style={{ marginTop: "3rem"}}>
        <a href="https://dictionary.lingdocs.com" className="plain-link">
        <div className="text-center" style={btnStyle}>
            Pashto Dictionary
        </div>
        </a>
        <a href="https://grammar.lingdocs.com" className="plain-link">
        <div className="text-center" style={btnStyle}>
            Pashto Grammar
        </div>
        </a>
    </div>;
}

export default HeadingLinks;