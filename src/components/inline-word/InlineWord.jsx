import React from "react";

export default function({ w }) {
    return (
        <span>
            <span dir="rtl">{w.p}</span>
            {(w.p && w.f) && " - "}
            <span dir="ltr">{w.f}</span>
            {w.e && <> (<span dir="ltr">{w.e}</span>)</>}
        </span>
    );
};