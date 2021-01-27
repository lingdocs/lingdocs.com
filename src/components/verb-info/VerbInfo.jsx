import React from "react";
import Word from "../word/Word";
import "./VerbInfo.css";

const indentR = {
    paddingLeft: "1rem",
};

const title = {
    fontWeight: "bolder",
    marginBottom: "0.5rem",
};

export default ({ children: info }) => {
    return (
        <div className="verb-info" style={{ textAlign: "center", maxWidth: "500px", margin: "0 auto" }}>
            <div style={{
                fontSize: "larger",
            }}>
                {info.def}
            </div>
            {info.subDef &&
                <div style={{ fontSize: "smaller", color: "grey" }}>
                    {info.subDef}
                </div>
            }
            <div style={{
                border: "2px solid black",
                padding: "1rem",
                margin: "0.25rem",
            }}>
                <div style={{ 
                    display: "flex",
                    flex: "1 1 0",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    textAlign: "left",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        marginRight: "0.5rem",
                    }}>
                        <div>
                            <div style={title}>Imperfective Root</div>
                            <div style={indentR}>
                                <Word>{info.infinitive}</Word>
                            </div>
                        </div>
                        <div style={{ marginBottom: "0.5rem" }}>
                            <div style={title}>Imperfective Stem</div>
                            <div style={indentR}>
                                <Word tails>{info.presStem}</Word>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <div>
                            <div style={title}>Perfective Root</div>
                            <div style={indentR}>
                                <Word>{info.perfRoot}</Word>
                            </div>
                        </div>
                        <div style={{ marginBottom: "0.5rem" }}>
                            <div style={title}>Perfective Stem</div>
                            <div style={indentR}>
                                <Word tails>{info.subjStem}</Word>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: "center" }}>
                    <div style={title}>Past Participle</div>
                    <Word>{info.pastPart}</Word>
                </div>
            </div>
        </div>
    );
}