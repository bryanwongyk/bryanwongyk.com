import React, { FunctionComponent } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { css } from '@emotion/react';
import Img from 'gatsby-image';

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
	const featuredImgFluid =
		post.frontmatter.featuredImage.childImageSharp.fluid;

	return (
		<Layout>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
			/>
			<div>
				<Link to="/blog">Go Back</Link>
				<hr />
				<article
					className="blog-post"
					itemScope
					itemType="http://schema.org/Article"
				>
					<time>
						<h4
							css={css`
								font-style: italic;
								opacity: 0.8;
								text-align: center;
							`}
						>
							{post.frontmatter.date}
						</h4>
					</time>
					<header
						css={css`
							margin: 20px 0;
							text-align: center;
						`}
					>
						<h1>{post.frontmatter.title}</h1>
					</header>
					<section>
						<Img
							fluid={featuredImgFluid}
							css={css`
								object-fit: cover;
								max-height: 200px;
								max-width: 90%;
								margin: 0 auto;
							`}
						></Img>
					</section>
					<section
						dangerouslySetInnerHTML={{ __html: post.html }}
						itemProp="articleBody"
						css={css`
							padding: 40px 9%;
						`}
					/>
				</article>
			</div>
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
				featuredImage {
					childImageSharp {
						fluid(maxWidth: 900) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;
