import React from "react";

function HeadingLinks() {
    return <div className="d-flex flex-row justify-content-center" style={{ marginTop: "3rem"}}>
        <a href="https://dictionary.lingdocs.com" className="plain-link">
        <div style={{
            border: "2px solid white",
            padding: "0.75rem",
            margin: "0 1rem",
        }}>
            Pashto Dictionary
        </div>
        </a>
        <a href="https://grammar.lingdocs.com" className="plain-link">
        <div style={{
            border: "2px solid white",
            padding: "0.75rem",
            margin: "0 1rem",
        }}>
            Pashto Grammar
        </div>
        </a>
    </div>;
}

export default HeadingLinks;