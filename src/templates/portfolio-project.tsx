import React, { FunctionComponent } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import { css } from '@emotion/react';
import { darkTheme } from '../styling/themes';
import projectSignature from '../content/assets/images/post-signature.png';
import mediaQueries from '../styling/breakpoints.utils';
import Button from '../components/button/button';

interface PortfolioProjectData {
	data : {
		markdownRemark: {
			html: string;
			frontmatter: {
				title: string;
				description: string;
				linkToProject: string;
				linkToGithub: string;
				path: string;
			};
			excerpt: string;
		};
	};
}

const PortfolioProject: FunctionComponent<PortfolioProjectData> = ({ data }) => {
	const project = data.markdownRemark;

	return (
		<Layout>
			<SEO
				title={project.frontmatter.title}
				description={project.frontmatter.description || project.excerpt}
			/>
			<div
				css={css`
					margin: 0 auto;
					width: 80%;
					${mediaQueries[1]} {
						max-width: 1280px;
					}
				`}
			>
				<Link
					to="/portfolio"
					css={css`
						margin-left: 9%;
						transition: all 0.3s ease 0s;
						opacity: 0.8;
						display: inline-block;
						height: 22px;
						&:hover {
							opacity: 0.6;
							border-bottom: 1px solid ${darkTheme.colours.white};
						}
					`}
				>
					Go Back
				</Link>
				<hr />
				<article
					className="portfolio-project"
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
							{project.frontmatter.date}
						</h4>
					</time>
					<header
						css={css`
							margin: 20px 0;
							text-align: center;
						`}
					>
						<h1>{project.frontmatter.title}</h1>
					</header>
					<section
						dangerouslySetInnerHTML={{ __html: project.html }}
						itemProp="articleBody"
						css={css`
							padding: 40px 9% 12px 9%;
						`}
					/>
					<section
					css={css`
					padding: 0px 9% 50px 9%;
					text-align: center;
					`}>
						{project.frontmatter.linkToProject ===
										'null' ? null : (
											<a
												href={
													project.frontmatter
														.linkToProject
												}
												css={css`margin-right: 30px;
												&:hover {
													opacity: 1;
												}`}
											>
												<Button>View website</Button>
											</a>
										)}
						<a
							href={
								project.frontmatter
									.linkToGithub
							}
							css={css`					&:hover {
								opacity: 1;
							}`}
						>
							<Button>View code</Button>
						</a>
					</section>
					<address
						css={css`
							text-align: center;
						`}
					>
						<img
							src={projectSignature}
							alt="Bryan's project Ending Signature"
							css={css`
								height: 45px;
							`}
						></img>
					</address>
				</article>
			</div>
		</Layout>
	);
};

export default PortfolioProject;

export const pageQuery = graphql`
	query PortfolioProjectByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				title
				description
				linkToProject
				linkToGithub
				path
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
