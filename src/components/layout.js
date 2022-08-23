import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import "./css/bootstrap/bootstrap.min.css";
import "./css/clean-blog.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { Navbar, Nav } from "react-bootstrap";

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          tagline
          author {
            name
          }
          social {
            twitter
            github
          }
        }
      }
    }
  `);
  const { twitter, github } = data.site.siteMetadata.social;
  return (
    <>
      <Navbar id="mainNav" expand="lg" className="fixed-top">
        <Link to="/">
          <Navbar.Brand>{data.site.siteMetadata.title}</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav navbarRepsonsive">
          <Nav className="ml-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="https://www.youtube.com/channel/UC1-yjDec5VDtia5s1gcMw4A" className="nav-link">YouTube</Link>
              </li>
              <li className="nav-item">
                <Link to="https://www.twitter.com/@lingdocs" className="nav-link">Twitter</Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link">Projects</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">Blog</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {children}
      <hr/>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <a href="https://www.youtube.com/channel/UC1-yjDec5VDtia5s1gcMw4A">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-youtube fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={`https://twitter.com/${twitter}`}>
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <Link to="/">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fas fa-home fa-stack-1x fa-inverse"></i>
                    </span>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <a href={`https://github.com/${github}`}>
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
              </ul>
              <p className="copyright text-muted">Copyright © <Link to="/">{data.site.siteMetadata.author.name}</Link> {new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;
