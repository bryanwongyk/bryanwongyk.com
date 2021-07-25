import React, { FunctionComponent } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import { css } from '@emotion/react';
import Img from 'gatsby-image';
import { darkTheme } from '../styling/themes';
import mediaQueries from '../styling/breakpoints.utils';

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
			<article
				className="blog-post"
				itemScope
				itemType="http://schema.org/Article"
			>
				<header
					css={css`
						margin: 20px 0;
					`}
				>
					<h1
						css={css`
							margin-bottom: 16px;
							font-size: 2.5rem;
						`}
					>
						{post.frontmatter.title}
					</h1>
					<time>
						<h5
							css={css`
								opacity: 0.5;
								margin-top: 0;
								margin-bottom: 32px;
								font-size: 1rem;
							`}
						>
							{post.frontmatter.date} ⬩{' '}
							{post.frontmatter.readingTime}
						</h5>
					</time>
				</header>
				<section
					css={css`
						margin: 0 auto 32px 0;
					`}
				>
					<Img
						fluid={featuredImgFluid}
						css={css`
							object-fit: cover;
						`}
					/>
				</section>
				<section
					dangerouslySetInnerHTML={{ __html: post.html }}
					itemProp="articleBody"
					css={css`
						margin-bottom: 60px;
					`}
				/>
			</article>
			<Link
				to="/blog"
				css={css`
					transition: all 0.3s ease 0s;
					opacity: 0.8;
					display: inline-block;
					height: 22px;
					margin-bottom: 64px;
					border-bottom: 1px solid ${darkTheme.colours.white};
					&:hover {
						opacity: 0.6;
					}
				`}
			>
				← Browse more posts
			</Link>
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
