/** @jsx jsx */

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/seo';
import { css, jsx } from '@emotion/react';
import { motion } from 'framer-motion';

import { MarkdownRemarkEdge, MarkdownRemark } from '../graphql-types';

import PostPreview from '../components/post-preview/post-preview';
import SideBio from '../components/side-bio/side-bio';
import PageContainer from '../components/page-container/page-container';

import mediaQueries from '../styling/breakpoints.utils';

const Blog = ({}) => {
	const data = useStaticQuery(graphql`
		query BlogQuery {
			allMarkdownRemark(
				sort: {
					order: DESC
					fields: [frontmatter___date, frontmatter___title]
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
	return (
		<>
			<SEO title="Blog" />
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
							font-size: 1.2rem;
						`}
					>
						BLOG
					</h1>
				</motion.div>
				<section
					css={css`
						display: flex;
						flex-direction: column;

						${mediaQueries[0]} {
							display: grid;
							grid-template-columns: 2.4fr 1fr;
						}
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
							${mediaQueries[0]} {
								grid-row: 1;
								grid-column: 2;
								padding-left: 64px;
							}
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
									grid-column: 1;
									grid-row: 1;
									display: grid;
									grid-template-columns: 1fr 1fr;
									grid-gap: 32px;
								}
							`}
						>
							{posts.map(({ node }: { node: MarkdownRemark }) => {
								const frontmatter: any = node!.frontmatter!;

								return (
									<li
										key={node.id}
										css={css`
											margin-bottom: 32px;
										`}
									>
										<PostPreview
											thumbnailPath={
												frontmatter.featuredImage
													.publicURL
											}
											title={frontmatter.title}
											description={
												frontmatter.description
											}
											date={frontmatter.date}
											readingTime={
												frontmatter.readingTime
											}
											path={frontmatter.path}
										/>
									</li>
								);
							})}
						</ol>
					</motion.div>
				</section>
			</PageContainer>
		</>
	);
};

export default Blog;
