import React from "react";

const btnStyle = {
    border: "2px solid white",
    padding: "0.75rem",
    margin: "0 1rem",
};

function HeadingLinks() {
    return <>
        <div className="d-flex flex-row justify-content-center" style={{ marginTop: "3rem"}}>
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
        </div>
        <div className="d-flex flex-row justify-content-center">
            <a href='https://play.google.com/store/apps/developer?id=LingDocs&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                <img style={{ maxWidth: "15rem", paddingTop: "2rem" }} alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>
            </a>
        </div>
    </>;
}

export default HeadingLinks;