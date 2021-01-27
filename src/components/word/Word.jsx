import React, { useState } from "react";

const Translation = ({ children }) => (
    <div style={{ fontSize: "smaller" }}><em>"{children}"</em></div>
);

const Word = ({ w, children, tails }) => {
    const wrd = children || w; 
    const defaultVersion = Object.keys(wrd).includes("mini") ? "short" : "long";
    let [version, setVersion] = useState(defaultVersion);
    if (typeof wrd === "string") {
        return (
            <div>{wrd}</div>
        );
    }
    if (!wrd.short) {
        return (
            <div>
                <div dir="rtl">{wrd.p}{tails ? "ـ" : ""}</div>
                <div dir="ltr">{wrd.f}{tails ? "–" : ""}</div>
                {wrd.e && <Translation>{wrd.e}</Translation>}
            </div>
        );
    }
    
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                <Word>{wrd[version]}</Word>
                <div>
                    {Object.keys(wrd).filter((k) => k !== "e").map((key, i) => (
                        <div
                            key={i}
                            className="clickable" 
                            style={{
                                fontWeight: key === version ? "bold" : "normal",
                                fontSize: "smaller",
                                border: "0.5px solid grey",
                                borderRadius: "2px",
                                padding: "0 0.2rem",
                                margin: "0.2rem 0",  
                            }}
                            role="button"
                            onClick={() => setVersion(key)}
                        >
                            {key}
                        </div>
                    ))}
                </div>
            </div>
            {wrd.e && <Translation>{wrd.e}</Translation>}
        </div>
    )
};

export default Word;
