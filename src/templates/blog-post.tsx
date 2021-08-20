/** @jsx jsx */

import React, { FunctionComponent } from 'react';
import { Link, graphql, PageRendererProps } from 'gatsby';
import { Query } from '../graphql-types';
import SEO from '../components/seo';
import { css, jsx } from '@emotion/react';
import { motion } from 'framer-motion';
import Img from 'gatsby-image';
import { darkTheme } from '../utils/themes';

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
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
			/>
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{
					duration: 0.5,
				}}
				css={css`
					max-width: 680px;
					margin: 0 auto;
				`}
			>
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
								/* font-size: 2.5rem; */
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
									/* font-size: 0.9rem; */
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
				</article>
				<Link
					to="/blog"
					css={css`
						transition: all 0.3s ease 0s;
						opacity: 0.6;
						display: inline-block;
						height: 22px;
						margin-bottom: 64px;
						border-bottom: 1px solid ${darkTheme.colours.white};
						&:hover {
							opacity: 0.8;
						}
					`}
				>
					← Browse more posts
				</Link>
			</motion.div>
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
