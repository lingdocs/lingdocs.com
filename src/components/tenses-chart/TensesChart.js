import React from "react";
import Word from "../word/Word";
import "./TensesChart.css";

const thinLine = "solid 2px black";
const thickLine = "solid 4px black"
const rb = { borderRight: thinLine };

const forms = [
  ["Present", "Subjunctive"],
  ["Imperf. Future", "Perf. Future"],
  ["Imperf. Imperative", "Perf. Imperative"],
  ["Continuous Past", "Simple Past"],
  ["Perfect"],
];

export default ({ children: content, formula, bigFormula, custom }) => {
  const rows = custom ? custom : forms;
  const customWithoutAspects = custom && (custom[0].length === 1);
  return (
    <div style={{ marginTop: "2rem", marginBottom: "1.5rem" }} className="tenses-chart">
      <table style={{ width: "100%", textAlign: "center", tableLayout: "fixed" }}>
        <tbody>
          {!customWithoutAspects &&
            <tr style={{ borderBottom: thickLine, paddingBottom: "1rem" }}>
              <th style={{...rb, paddingBottom: "1rem"}}><i className="fas fa-video fa-lg" /> Imperfective</th>
              <th style={{ paddingBottom: "1rem" }}><i className="fas fa-camera fa-lg" /> Perfective</th>
            </tr>
          }
          {rows.map((row, i) => {
            const isLastInPresentSection = (!custom) && (rows.length - 3 === i);
            const isPerfectRow = rows[i].length === 1;
            return (
              <tr style={{ borderBottom: isLastInPresentSection ? thickLine : thinLine }} key={i+"row"}>
                {row.map((col, j) => {
                  return (
                    <td
                      valign="top"
                      style={{ textAlign: "center", padding: "0.25rem 0.2rem 0.5rem 0.2rem", ...((j === 0 && !isPerfectRow) ? rb : {})}}
                      colSpan={row.length === 1 ? 2 : 1}
                      key={`${i}cell${j}`}
                    >
                      <div style={{ marginBottom: "0.5rem" }}>
                        <strong>{col}</strong>
                      </div>
                      {content && (
                        <>
                          {content[i][j].image && <div style={{ maxWidth: isPerfectRow ? "50%" : "100%", margin: "0 auto" }}>
                            <img src={content[i][j].image} className="img-fluid" />
                          </div>}
                          {content[i][j].notes && <div style={{ fontSize: "smaller", color: "grey" }}>{content[i][j].notes}</div>}
                          {content[i][j].ex && <Word>{content[i][j].ex}</Word>}
                        </>
                      )}
                      {formula && <div style={(content && ! bigFormula) ? {
                        fontSize: "smaller",
                        color: "grey",
                        marginTop: "0.5rem",
                      } : {}}>{formula[i][j]}</div>} 
                    </td>
                  );
                })}
             </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
