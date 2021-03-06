import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "@/components/layout"
import SEO from "@/components/seo"

const Blog = ({ data }) => {
  const posts = data.posts.nodes

  return (
    <Layout>
      <SEO title="Blog" />
      <div className="container">
        <h1 className="text-center m-0 mb-6">Blog Posts</h1>
        <section className="space-y-5 sm:-mx-4">
          {posts.map(post => (
            <Link
              className="card block"
              key={post.frontmatter.title}
              to={post.fields.slug}
            >
              <div className="text-xl font-semibold">
                {post.frontmatter.title}
              </div>
              <div className="mb-3 opacity-80">{post.excerpt}</div>
              <div className="text-sm opacity-50">
                {post.frontmatter.date} - {post.timeToRead} min read
              </div>
            </Link>
          ))}
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    posts: allMarkdownRemark(
      filter: { fields: { collection: { eq: "posts" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        excerpt
        timeToRead
        frontmatter {
          title
          date(formatString: "D MMMM YYYY")
        }
        fields {
          slug
        }
      }
    }
  }
`

export default Blog
