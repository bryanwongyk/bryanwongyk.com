import React, { FunctionComponent } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

interface BlogPostData {
	markdownRemark: {
		html: string;
		frontmatter: {
			path: string;
			title: string;
			author: string;
			date: string;
		};
	};
}

const BlogPost: FunctionComponent<{}> = ({ data }) => {
	const post = data.markdownRemark;

	return (
		<Layout>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
			/>
			<Link to="/blog">Go Back</Link>
			<hr />
			<article
				className="blog-post"
				itemScope
				itemType="http://schema.org/Article"
			>
				<header>
					<h1>{post.frontmatter.title}</h1>
				</header>
				<section
					dangerouslySetInnerHTML={{ __html: post.html }}
					itemProp="articleBody"
				/>
				<footer>
					<h4>
						Posted by {post.frontmatter.author} on{' '}
						{post.frontmatter.date}
					</h4>
				</footer>
			</article>
		</Layout>
	);
};

export default BlogPost;

export const pageQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date
				title
				description
				path
				author
				readingTime
			}
		}
	}
`;
