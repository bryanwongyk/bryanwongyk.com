import React, { FunctionComponent } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

interface BlogPostData {
    markdownRemark: {
        html: string
        frontmatter: {
            path: string
            title: string
            author: string
            date: string
        }
    }
}

const BlogPost: FunctionComponent<{}> = ({ data }) => {
    const post = data.markdownRemark

    return (
        <div>
            <Link to="/blog">Go Back</Link>
            <hr/>
            <h1>{post.frontmatter.title}</h1>
            <h4>Posted by {post.frontmatter.author} on {post.frontmatter.date}</h4>
            <div dangerouslySetInnerHTML={{__html: post.html}}/>
        </div>
    )
}

export default BlogPost

export const pageQuery = graphql`
query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: {eq: $path} }){
        html
        frontmatter {
            path
            title
            author
            date
        }
    }
}
`
