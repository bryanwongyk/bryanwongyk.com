/** @jsx jsx */

import React, { FunctionComponent } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import { css, jsx } from '@emotion/react';
import { darkTheme } from '../styling/themes';
import profile from '../content/assets/images/profile-circular.png';
import PostPreviewBasic from '../components/post-preview/post-preview-basic';
import SideProfile from '../components/side-profile/side-profile';

import mediaQueries from '../styling/breakpoints.utils';

const Blog: FunctionComponent<{}> = ({ data }) => {
	const posts = data.allMarkdownRemark.edges;
	return (
		<Layout>
			<SEO title="All posts" />
			<div>
				<h1
					css={css`
						font-size: 1.2rem;
					`}
				>
					BLOG
				</h1>
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
					<div
						css={css`
							${mediaQueries[0]} {
								grid-row: 1;
								grid-column: 2;
								padding-left: 64px;
							}
						`}
					>
						<SideProfile />
					</div>
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
						{posts.map(post => {
							return (
								<li key={post.node.id}>
									<PostPreviewBasic
										thumbnailPath={
											post.node.frontmatter.featuredImage
												.publicURL
										}
										title={post.node.frontmatter.title}
										description={
											post.node.frontmatter.description
										}
										date={post.node.frontmatter.date}
										readingTime={
											post.node.frontmatter.readingTime
										}
										path={post.node.frontmatter.path}
									/>
								</li>
							);
						})}
					</ol>
				</section>
			</div>
		</Layout>
	);
};

export default Blog;

export const pageQuery = graphql`
	query BlogQuery {
		allMarkdownRemark(filter: { frontmatter: { type: { in: ["blog"] } } }) {
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
`;
