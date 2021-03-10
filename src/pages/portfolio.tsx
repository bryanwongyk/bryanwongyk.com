import React, { FunctionComponent } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { css } from '@emotion/react';
import { darkTheme } from '../styling/themes';
import profile from '../content/assets/images/profile.png';
import mediaQueries from '../styling/breakpoints.utils';

const Portfolio: FunctionComponent<{}> = ({ data }) => {
	const projects = data.allMarkdownRemark.edges;
	return (
		<Layout>
			<SEO title="Portfolio" />
			<div
				css={css`
					padding: 0 1.0875rem 1.45rem;
				`}
			>
				<h1
					css={css`
						text-align: center;
						border-bottom: 3px solid ${darkTheme.colours.white};
						height: 50px;
						width: 270px;
						margin: 0 auto;
					`}
				>
					PORTFOLIO
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
						These are my latest projects.
					</p>
				</section>
				<ol
					css={css`
						list-style: none;
						margin: 0 auto;
						display: flex;
						justify-content: center;
						flex-direction: column;
						${mediaQueries[1]} {
							flex-direction: row;
							justify-content: space-around;
						}
					`}
				>
					{projects.map(project => {
						const title = project.node.frontmatter.title;
						const imgSrc =
							project.node.frontmatter.featuredImage.publicURL;
						return (
							<li
								key={project.node.id}
								css={css`
									margin-bottom: 80px;
									${mediaQueries[1]} {
										max-width: 33%;
									}
								`}
							>
								<Link
									to={project.node.frontmatter.path}
									css={css`
										&:hover {
											img {
												transform: scale(1.01);
											}
											h2 {
												color: ${darkTheme.colours
													.gold};
												opacity: 0.9;
											}
										}
									`}
								>
									<img
										src={imgSrc}
										css={css`
											transition: transform 0.3s ease;
										`}
									/>
									<article
										className="project-list-item"
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
												itemProp="description"
												css={css`
													color: ${darkTheme.colours
														.grey};
													margin: 10px 0;
												`}
											>
												{
													project.node.frontmatter
														.description
												}{' '}
												<br />
												Technologies used:{' '}
												{
													project.node.frontmatter
														.technologies
												}
											</p>
										</section>
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

export default Portfolio;

export const pageQuery = graphql`
	query PortfolioQuery {
		allMarkdownRemark(
			filter: { frontmatter: { type: { in: ["portfolio"] } } }
		) {
			edges {
				node {
					id
					excerpt
					frontmatter {
						title
						featuredImage {
							publicURL
						}
						description
						technologies
						linkToProject
						linkToGithub
						path
					}
				}
			}
		}
	}
`;
