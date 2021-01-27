import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import aboutBackground from "../assets/images/about-bg.jpg";

const About = ({ location }) => {
  return (
    <Layout location={location} title="About">
      <SEO title="About" />
      <header className="masthead" style={{ backgroundImage: `url(${aboutBackground})` }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>About</h1>
                {/* <span className="subheading">{tagline}</span> */}
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <p><Link to="/">LingDocs</Link> is a place for things related to <strong>language, linguistics, and learning</strong>. It's goal is to make language simple, accessible, and understandable for everyone.</p>
            <h4>Why LingDocs?</h4>
            <p>While learning computer programming, I have been amazed to see how easily accessible information is. Programming languages are very well <strong>doc</strong>umented, and the answer to any question or confusing bit of syntax is always just one quick search away. Blogging thrives among software developers, and there are tons of people out there helping each other understand how to communicate with computers.</p>
            <p>LingDocs is just beginning as an attempt to do the same thing for human languages, especially less explored ones. What if we had dictionaries that fully harnessed the powers of modern fuzzy-search interfaces? What if we had grammar reference books that were as searchable and accessible as the technical docs used for programming languages or tools?</p>
            <p>LingDocs <em>is just starting</em> and exists as a tiny little experiment in seeing what that might look like, and to help people understand aspects of language that have often been difficult to grasp or understand.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About;
