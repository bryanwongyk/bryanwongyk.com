import React, { FunctionComponent } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { css } from '@emotion/react';
import Img from 'gatsby-image';
import { darkTheme } from '../styling/themes';
import projectSignature from '../content/assets/images/post-signature.png';

interface PortfolioProjectData {
	markdownRemark: {
		html: string;
		frontmatter: {
			title: string;
			description: string;
			technologies: string;
			linkToProject: string;
			linkToGithub: string;
			path: string;
		};
	};
}

const PortfolioProject: FunctionComponent<{}> = ({ data }) => {
	const project = data.markdownRemark;
	const featuredImgFluid =
		project.frontmatter.featuredImage.childImageSharp.fluid;

	return (
		<Layout>
			<SEO
				title={project.frontmatter.title}
				description={project.frontmatter.description || project.excerpt}
			/>
			<div>
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
					<header
						css={css`
							margin: 20px 0;
							text-align: center;
						`}
					>
						<h1>{project.frontmatter.title}</h1>
					</header>
					<section>
						<Img
							fluid={featuredImgFluid}
							css={css`
								object-fit: cover;
								max-height: 200px;
								max-width: 90%;
								margin: 0 auto;
							`}
						></Img>
					</section>
					<section
						dangerouslySetInnerHTML={{ __html: project.html }}
						itemProp="articleBody"
						css={css`
							padding: 40px 9% 12px 9%;
						`}
					/>
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
				technologies
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
