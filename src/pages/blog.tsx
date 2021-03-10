import React, { FunctionComponent } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { css } from '@emotion/react';
import { darkTheme } from '../styling/themes';
import profile from '../content/assets/images/profile.png';

const Blog: FunctionComponent<{}> = ({ data }) => {
	const posts = data.allMarkdownRemark.edges;
	return (
		<Layout>
			<SEO title="All posts" />
			<div
				css={css`
					padding: 0 1.0875rem 1.45rem;
				`}
			>
				<h1
					css={css`
						text-align: center;
						border-bottom: 3px solid ${darkTheme.colours.gold};
						height: 50px;
						width: 135px;
						margin: 0 auto;
					`}
				>
					BLOG
				</h1>
				<section
					css={css`
						display: flex;
						justify-content: center;
						align-items: center;
						margin: 50px auto;
					`}
				>
					<img
						src={profile}
						css={css`
							width: 50px;
							margin: 0 30px 0 0;
						`}
					></img>
					<p
						css={css`
							color: ${darkTheme.colours.white};
							opacity: 0.8;
							margin: 0;
						`}
					>
						Below lives a collection of my thoughts.
					</p>
				</section>
				<ol style={{ listStyle: `none` }}>
					{posts.map(post => {
						const title = post.node.frontmatter.title;

						return (
							<li key={post.node.id}>
								<Link
									to={post.node.frontmatter.path}
									css={css`
										&:hover {
											h2 {
												color: ${darkTheme.colours
													.gold};
												opacity: 0.9;
											}
										}
									`}
								>
									<article
										className="post-list-item"
										itemScope
										itemType="http://schema.org/Article"
									>
										<header>
											<h2
												css={css`
													color: ${darkTheme.colours
														.white};
													transition: color 0.3s ease;
													margin-bottom: 0;
												`}
											>
												<span itemProp="headline">
													{title}
												</span>
											</h2>
										</header>
										<section>
											<p
												dangerouslySetInnerHTML={{
													__html:
														post.node.frontmatter
															.description ||
														post.node.excerpt,
												}}
												itemProp="description"
												css={css`
													color: ${darkTheme.colours
														.grey};
													margin: 10px 0;
												`}
											/>
										</section>
										<footer
											css={css`
												color: ${darkTheme.colours
													.grey};
												opacity: 0.5;
											`}
										>
											{post.node.frontmatter.date} //{' '}
											{post.node.frontmatter.readingTime}
										</footer>
									</article>
								</Link>
							</li>
						);
					})}
				</ol>
			</div>
		</Layout>
	);
};

export default Blog;

export const pageQuery = graphql`
	query BlogQuery {
		allMarkdownRemark {
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
					}
				}
			}
		}
	}
`;
