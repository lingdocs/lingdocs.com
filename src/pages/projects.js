import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import aboutBackground from "../assets/images/about-bg.jpg";

const projects = [
    {
      title: "Pashto Dictionary",
      description: "A dictionary of the Pashto language with smart-search and inflection/conjugation",
      link: "https://dictionary.lingdocs.com",
    },
    {
        title: "Pashto Verb Explorer",
        description: "An interactive playground for exploring and learning about how Pashto verbs are conjugated. This is based on a verb conjugation engine that runs in the browser.",
        link: "https://verbs.lingdocs.com",
    },
    {
        title: "Pashto Grammar",
        description: "A Pashto grammar reference. This is extremely new and only in the very beginning stages.",
        link: "https://grammar.lingdocs.com",
    },
    {
        title: "Pashto Dictionary",
        description: "A Pashto dicitionary with smart-search and inflection/conjugation",
        link: "https://dictionary.lingdocs.com",
    },
];

const About = ({ location }) => {
  return (
    <Layout location={location} title="About">
      <SEO title="Projects" />
      <header className="masthead" style={{ backgroundImage: `url(${aboutBackground})` }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>Projects</h1>
                {/* <span className="subheading">{tagline}</span> */}
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            {projects.map((project) => (
                <div key={project.title}>
                    <a href={project.link}>
                        <h2 className="post-title">{project.title}</h2>
                    </a>
                    <p>{project.description}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About;
