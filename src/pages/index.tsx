/** @jsx jsx */

import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { css, jsx, keyframes } from '@emotion/react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { ArrowRight } from 'phosphor-react';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

import SEO from '../components/seo';
import { MarkdownRemarkEdge, MarkdownRemark } from '../graphql-types';
import PostPreview from '../components/post-preview/post-preview';
import LinkCTAButton from '../components/buttons/link-cta-button';
import profile from '../content/assets/images/profile-2.jpg';
import SectionContainer from '../components/section-container/section-container';
import PageContainer from '../components/page-container/page-container';

import { darkTheme } from '../utils/themes';
import mediaQueries from '../utils/breakpoints.utils';

const WorkDiv = styled.div`
	width: 100%;

	/* @media (min-width: 500px) {
		width: 300px;
	} */

	&:hover dt {
		transition: color 0.3s ease;
		color: ${darkTheme.colours.red};
	}

	&:hover {
		transform: translateY(-1px);
	}

	&:not(:first-of-type) {
		margin-top: 32px;
	}
	${mediaQueries[0]} {
		width: 80%;
		&:not(:first-of-type) {
			margin-top: 0;
		}
	}
`;

const WorkDescTitle = styled.dt`
	font-family: 'Work Sans';
	font-weight: bold;
	font-size: 1rem;
`;

const WorkDescDetails = styled.dd`
	font-family: 'IBM Plex Mono';
	font-size: 0.833rem;
	margin: 0;
	opacity: 50%;
	line-height: 24px;
	${mediaQueries[0]} {
		margin-bottom: 0;
	}
`;

const BlogPostList = styled.ol`
	list-style: none;
	margin: 0;
	${mediaQueries[0]} {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 1rem;
	}
`;

const ArrowSpan = styled.span`
	top: 4px;
	position: relative;
	margin-left: 8px;
`;

const IndexPage: FunctionComponent<{}> = ({}) => {
	const data = useStaticQuery(graphql`
		query LatestBlogPostsQuery {
			allMarkdownRemark(
				sort: {
					order: DESC
					fields: [
						frontmatter___dateReverseOrder
						frontmatter___title
					]
				}
				filter: { frontmatter: { type: { in: "blog" } } }
				limit: 2
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
	const latestBlogPosts: MarkdownRemarkEdge[] = data.allMarkdownRemark.edges;
	return (
		<PageContainer>
			<SEO title="Home" />
			<section
				css={css`
					text-align: center;
					display: flex;
					flex-direction: column;
					margin-top: 40px;
					@media (min-width: 840px) {
						margin-top: 118px;
						margin-bottom: 160px;
						padding-top: 72px;
					}
				`}
			>
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						type: 'spring' as any,
						stiffness: '25' as any,
					}}
				>
					<span
						css={css`
							position: relative;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
						`}
					>
						<h1
							css={css`
								text-align: center;
								color: ${darkTheme.colours.red};
								font-size: 36px;
								margin: 0;

								@media (min-width: 500px) {
									font-size: 56px;
								}
								@media (min-width: 840px) {
									transform: translateY(-100px);
									font-size: 112px;
								}
							`}
						>
							BRYAN WONG
						</h1>
						<img
							src={profile}
							css={css`
								width: 200px;
								margin: 24px 0;
								z-index: -1;

								@media (min-width: 500px) {
									width: 300px;
								}
								@media (min-width: 840px) {
									/* width: 300px; */
									position: absolute;
									transform: translateY(40px);
								}
							`}
						/>
					</span>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						type: 'spring' as any,
						stiffness: '20' as any,
						delay: 0.6,
					}}
				>
					<h3
						css={css`
							text-align: right;
							margin: 0;
							line-height: 24px;
							font-size: 1rem;
							max-width: 450px;
							display: inline-block;
							transform: translateX(13px);

							@media (min-width: 500px) {
								transform: translateX(62px);
							}

							@media (min-width: 840px) {
								transform: translate(276px, -110px);
							}
						`}
					>
						Software Engineer, <br />
						Creator, <br />
						Thinker.
					</h3>
				</motion.div>
			</section>
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					type: 'spring' as any,
					stiffness: '20' as any,
					delay: 1,
				}}
			>
				<SectionContainer>
					<h2
						css={css`
							margin-bottom: 48px;
							font-size: 1rem;
						`}
					>
						CREATING
					</h2>
					<dl
						css={css`
							display: flex;
							flex-direction: column;
							justify-content: space-around;
							align-items: center;
							padding-left: 48px;

							${mediaQueries[0]} {
								display: grid;
								align-items: start;
								grid-template-columns: repeat(2, 1fr);
								grid-gap: 48px;
								margin: 0 auto;
							}
						`}
					>
						<WorkDiv>
							<Link to="/blog">
								<WorkDescTitle>
									BLOG{' '}
									<ArrowSpan>
										<ArrowRight size={18} />
									</ArrowSpan>
								</WorkDescTitle>

								<WorkDescDetails>
									View my articles on web development
								</WorkDescDetails>
							</Link>
						</WorkDiv>
						<WorkDiv>
							<OutboundLink
								href="https://github.com/bryanwongyk"
								target="_blank"
							>
								<WorkDescTitle>
									PORTFOLIO{' '}
									<ArrowSpan>
										<ArrowRight size={18} />
									</ArrowSpan>
								</WorkDescTitle>

								<WorkDescDetails>
									View my projects on GitHub
								</WorkDescDetails>
							</OutboundLink>
						</WorkDiv>
						<WorkDiv>
							<OutboundLink
								href="https://www.instagram.com/b2uyk/"
								target="_blank"
								css={css`
									display: inline;
								`}
							>
								<WorkDescTitle>
									ART{' '}
									<ArrowSpan>
										<ArrowRight size={18} />
									</ArrowSpan>
								</WorkDescTitle>
								<WorkDescDetails>
									View my digital art
								</WorkDescDetails>
							</OutboundLink>
						</WorkDiv>
						<WorkDiv>
							<OutboundLink
								href="https://soundcloud.com/bwyk"
								target="_blank"
								css={css`
									display: inline;
								`}
							>
								<WorkDescTitle>
									MUSIC{' '}
									<ArrowSpan>
										<ArrowRight size={18} />
									</ArrowSpan>
								</WorkDescTitle>
								<WorkDescDetails>
									View my electronic music
								</WorkDescDetails>
							</OutboundLink>
						</WorkDiv>
					</dl>
				</SectionContainer>

				<SectionContainer>
					<h2
						css={css`
							margin-bottom: 48px;
							font-size: 1rem;
						`}
					>
						LATEST POSTS
					</h2>
					<BlogPostList>
						{latestBlogPosts.map(
							({ node }: { node: MarkdownRemark }) => {
								const frontmatter: any = node!.frontmatter!;

								return (
									<li
										key={node.id}
										css={css`
											h4 {
												font-size: 1rem !important;
											}
										`}
									>
										<PostPreview
											title={frontmatter.title}
											description={
												frontmatter.description
											}
											date={frontmatter.date}
											readingTime={
												frontmatter.readingTime
											}
											thumbnailPath={
												frontmatter.featuredImage
													.publicURL
											}
											path={frontmatter.path}
										/>
									</li>
								);
							},
						)}
					</BlogPostList>
					<div
						css={css`
							display: flex;
							justify-content: center;
							margin-top: 56px;
						`}
					>
						<LinkCTAButton link="/blog" isInternalLink={true}>
							<b>View all posts </b>

							<ArrowSpan>
								<ArrowRight size={18} />
							</ArrowSpan>
						</LinkCTAButton>
					</div>
				</SectionContainer>
			</motion.div>
		</PageContainer>
	);
};

export default IndexPage;
