import React, { FunctionComponent } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { css } from '@emotion/react';
import { darkTheme } from '../styling/themes';
import profile from '../content/assets/images/profile.png';
import mediaQueries from '../styling/breakpoints.utils';
import Button from '../components/button/button';


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
						border-bottom: 3px solid ${darkTheme.colours.gold};
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
						These are my latest projects.{' '}
						Click on them to view more information.
					</p>
				</section>
				<ol
					css={css`
						list-style: none;
						margin: 0 auto;

						display: flex;
						justify-content: center;
						flex-direction: column;
						${mediaQueries[0]} {
							flex-direction: row;
							justify-content: space-around;
						}
						${mediaQueries[2]} {
							max-width: 1280px;
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
										max-width: 30%;
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
													text-align: center;
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
														.white};
													opacity: 0.49;
													margin: 10px 0;
													line-height: 1.7;
													text-align: center;
												`}
											>
												{
													project.node.frontmatter
														.description
												}{' '}
												<br />
												<br />
											</p>
										</section>
									</article>
								</Link>
								<section
									css={css`
										display: flex;
										justify-content: space-around;
									`}
								>
									{project.node.frontmatter.linkToProject ===
									'null' ? null : (
										<a
											href={
												project.node.frontmatter
													.linkToProject
											}
										>
											<Button>View website</Button>
										</a>
									)}
									<a
										href={
											project.node.frontmatter
												.linkToGithub
										}
									>
										<Button>View code</Button>
									</a>
								</section>
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
						linkToProject
						linkToGithub
						path
					}
				}
			}
		}
	}
`;
