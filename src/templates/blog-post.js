import React from "react";
import { 
  Link,
  graphql,
} from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { DiscussionEmbed } from 'disqus-react';
import HeadingLinks from "../components/HeadingLinks";

import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx;
  const { siteTitle, siteUrl } = data.site.siteMetadata;
  // const { previous, next } = pageContext;
  const mainImage = `${siteUrl}${post.frontmatter.image.publicURL}`;
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={mainImage}
      />
      <header className="masthead" style={{ backgroundImage: `url("${post.frontmatter.image.publicURL}")`}}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="post-heading">
                <h1>{post.frontmatter.title}</h1>
                <h2 className="subheading">{post.frontmatter.description}</h2>
                <span className="meta">{post.frontmatter.date}</span>
                <HeadingLinks />
              </div>
            </div>
          </div>
        </div>
      </header>
      <article>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto blog-post">
              <MDXRenderer>{post.body}</MDXRenderer>
              <hr />
              <div className="mb-4">
                <div className="copyright text-muted mb-3" style={{ fontSize: "smaller" }}>Copyright © <Link to="/">{data.site.siteMetadata.author.name}</Link> {new Date().getFullYear()} This work is licensed under a <a rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.</div>
                <a rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style={{ borderWidth: 0, marginBottom: 0 }} src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a>
              </div>
              <hr />
              <h4>Comments</h4>
              {/* <Commento host={commentoUrl} /> */}
              <DiscussionEmbed
                shortname={data.site.siteMetadata.disqusShortname}
                config={{
                  url: `${siteUrl}/${post.slug}`,
                  identifier: post.id,
                  title: post.frontmatter.title,
                }}
              />
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
        commentoUrl
        author {
          name
        }
        disqusShortname
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      slug
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image {
          publicURL
        }
      }
    }
  }
`
