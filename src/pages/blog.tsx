/** @jsx jsx */

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';
import { css, jsx } from '@emotion/react';
import { motion } from 'framer-motion';

import { MarkdownRemarkEdge, MarkdownRemark } from '../graphql-types';

import PostPreviewBlog from '../components/post-preview-blog/post-preview-blog';
import SideBio from '../components/side-bio/side-bio';
import PageContainer from '../components/page-container/page-container';
import GlobalBlogStyle from '../components/global-blog-style/GlobalBlogStyle';

import mediaQueries from '../utils/breakpoints.utils';

const Blog = ({}) => {
	const data = useStaticQuery(graphql`
		query BlogQuery {
			allMarkdownRemark(
				sort: {
					order: DESC
					fields: [
						frontmatter___dateReverseOrder
						frontmatter___title
					]
				}
				filter: { frontmatter: { type: { in: ["blog"] } } }
			) {
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
							readingTime
							featuredImage {
								publicURL
							}
						}
					}
				}
			}
		}
	`);
	const posts: MarkdownRemarkEdge[] = data.allMarkdownRemark.edges;
	console.log(posts);
	return (
		<>
			<SEO title="Blog" />
			<GlobalBlogStyle />
			<div
				css={css`
					background-color: #fefefe;
					padding: 3rem 0 4rem 0;
				`}
			>
				<PageContainer>
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{
							duration: 0.5,
						}}
					>
						<h1
							css={css`
								font-size: 1rem;
								margin-top: 0;
							`}
						>
							BLOG
						</h1>
					</motion.div>
					<section
						css={css`
							display: flex;
							flex-direction: column;
						`}
					>
						<motion.div
							initial={{ opacity: 0, y: 60 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.8,
								delay: 0.3,
							}}
							css={css`
								margin-bottom: 24px;
							`}
						>
							<SideBio />
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.8,
								delay: 0.7,
							}}
						>
							<ol
								css={css`
									list-style: none;
									margin: 0;
									${mediaQueries[0]} {
										display: grid;
										grid-template-columns: repeat(2, 1fr);
										grid-gap: 1rem;
									}
								`}
							>
								{posts.map(
									({ node }: { node: MarkdownRemark }) => {
										const frontmatter: any =
											node!.frontmatter!;

										return (
											<li
												key={node.id}
												css={css`
													margin-bottom: 2.5rem;
												`}
											>
												<PostPreviewBlog
													title={frontmatter.title}
													description={
														frontmatter.description
													}
													thumbnailPath={
														frontmatter
															.featuredImage
															.publicURL
													}
													date={frontmatter.date}
													readingTime={
														frontmatter.readingTime
													}
													path={frontmatter.path}
												/>
											</li>
										);
									},
								)}
							</ol>
						</motion.div>
					</section>
				</PageContainer>
			</div>
		</>
	);
};

export default Blog;
