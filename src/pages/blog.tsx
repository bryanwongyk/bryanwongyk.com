import React, {FunctionComponent} from 'react'
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog: FunctionComponent<{}> = ({ data }) => {
    const posts = data.allMarkdownRemark.edges
    return (
        <Layout>
          <SEO title="All posts" />
          <ol style={{ listStyle: `none` }}>
            {posts.map(post => {
              const title = post.node.frontmatter.title
    
              return (
                <li key={post.node.id}>
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      <h2>
                          <span itemProp="headline">{title}</span>
                      </h2>
                      <small>{post.node.frontmatter.date}</small>
                    </header>
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.node.frontmatter.description || post.node.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                    <footer>
                        <Link to={post.node.frontmatter.path}>
                          Read More
                        </Link>
                    </footer>
                  </article>
                </li>
              )
            })}
          </ol>
        </Layout>
      )
    }

export default Blog;

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark {
        edges {
            node {
                id
                excerpt
                frontmatter {
                  date
                  title
                  description
                  path
                  author
                }
            }
        }
    }
}
`