import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import aboutBackground from "../assets/images/about-bg.jpg";

const projects = [
    {
        title: "Pashto Grammar",
        description: "A Pashto grammar reference. This is extremely new and only in the very beginning stages.",
        link: "https://grammar.lingdocs.com",
        repo: "https://github.com/lingdocs/pashto-grammar",
    },
    {
        title: "Pashto Dictionary",
        description: "A Pashto dicitionary with smart-search and inflection/conjugation",
        link: "https://dictionary.lingdocs.com",
        repo: "https://github.com/lingdocs/pashto-dictionary"
    },
    {
      title: "Pashto Inflector",
      description: "An open source TypeScript/React library for Pashto inflection, verb conjugation, phrase generation, text conversion, and more.",
      link: "https://pashto-inflector.lingdocs.com",
      repo: "https://github.com/lingdocs/pashto-inflector",
    },
    {
        title: "Pashtoodle",
        description: "A Pashto version of the well-loved word guessing game",
        link: "https://pashtoodle.lingdocs.com",
        repo: "https://github.com/lingdocs/pashto-wordle",
    },
    {
        title: "RTL EPUB Maker",
        description: "Easily create EPUB e-book files with proper RTL support. Because right-to-left languages deserve nice e-books too.",
        link: "https://rtl-epub-maker.lingdocs.com",
        repo: "https://github.com/lingdocs/rtl-epub-maker",
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
                    <div>{project.description}</div>
                    <div className="mt-2 text-muted">
                      <a href={project.link}>Website</a> - <a href={project.repo}>Source Code</a>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About;
