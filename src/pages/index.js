import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import homeBackground from "../assets/images/home-bg.jpg";

const BlogIndex = ({ data, location }) => {
  const { title, siteUrl, tagline } = data.site.siteMetadata;
  const posts = data.allMdx.edges;
  const mainImage = `${siteUrl}${homeBackground}`;
  return (
    <Layout location={location} title={title}>
      <SEO
        title="LingDocs - Language, Linguistics, Learning"
        image={mainImage}
      />
      <header className="masthead" style={{ backgroundImage: `url(${homeBackground})` }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>{title}</h1>
                <span className="subheading">{tagline}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="text-center">
              <Link to="/projects">
                <button className="clean-blog-btn btn-outline-secondary mb-4">Projects</button>
              </Link>
            </div>
            <h4 className="mt-4">Blog Posts</h4>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.slug;
              return (
                <div className="post-preview" key={node.frontmatter.title}>
                <Link to={node.slug}>
                  <h2 className="post-title">
                    {title}
                  </h2>
                  <h5 className="post-subtitle">
                    {node.excerpt}
                  </h5>
                </Link>
                <p className="post-meta">{node.frontmatter.date}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        tagline
        siteUrl
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          slug
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
