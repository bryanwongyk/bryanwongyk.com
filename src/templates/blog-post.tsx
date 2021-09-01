/** @jsx jsx */

import React, { FunctionComponent } from 'react';
import { Link, graphql, PageRendererProps } from 'gatsby';
import { Query } from '../graphql-types';
import SEO from '../components/seo';
import { css, jsx } from '@emotion/react';
import GlobalBlogStyle from '../components/global-blog-style/GlobalBlogStyle';

import { motion } from 'framer-motion';
import Img from 'gatsby-image';
import { darkTheme } from '../utils/themes';
import BlogPostContainer from '../components/blog-post-container/blog-post-container';

interface Props extends PageRendererProps {
	data: Query;
}

const BlogPost: FunctionComponent<Props> = props => {
	const data = props.data!;
	const post: any = data.markdownRemark!;
	const featuredImgFluid =
		post.frontmatter.featuredImage.childImageSharp.fluid;

	return (
		<>
			<GlobalBlogStyle />
			<div
				css={css`
					background-color: #fefefe;
					padding: 3rem 0 4rem 0;
				`}
			>
				<SEO
					title={post.frontmatter.title}
					description={post.frontmatter.description || post.excerpt}
				/>
				<BlogPostContainer>
					<article
						className="blog-post"
						itemScope
						itemType="http://schema.org/Article"
					>
						<motion.header
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{
								duration: 0.5,
							}}
						>
							<h1
								css={css`
									margin-bottom: 1rem;
								`}
							>
								{post.frontmatter.title}
							</h1>
							<time>
								<h5
									css={css`
										margin-top: 0;
										margin-bottom: 2rem;
									`}
								>
									{post.frontmatter.date} ⬩{' '}
									{post.frontmatter.readingTime}
								</h5>
							</time>
						</motion.header>
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.8,
								delay: 0.5,
							}}
						>
							<section
								css={css`
									margin: 0 auto 2rem 0;
									max-height: 400px;
								`}
							>
								<Img
									fluid={featuredImgFluid}
									css={css`
										object-fit: cover;
										max-height: 400px;
									`}
								/>
							</section>
							<section
								dangerouslySetInnerHTML={{ __html: post.html }}
								itemProp="articleBody"
							/>
							<Link
								to="/blog"
								css={css`
									transition: all 0.3s ease 0s;
									display: inline-block;
									height: 22px;
									margin-top: 1rem;
									color: ${darkTheme.colours.red};
									&:hover {
										color: ${darkTheme.colours.white};
									}
								`}
							>
								← Browse more posts
							</Link>
						</motion.div>
					</article>
				</BlogPostContainer>
			</div>
		</>
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
