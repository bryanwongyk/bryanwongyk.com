/** @jsx jsx */

import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { css, jsx, keyframes } from '@emotion/react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { ArrowRight } from 'phosphor-react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import SEO from '../components/seo';
import { MarkdownRemarkEdge, MarkdownRemark } from '../graphql-types';
import PostPreview from '../components/post-preview/post-preview';
import LinkCTAButton from '../components/buttons/link-cta-button';
import profile from '../content/assets/images/profile-2.jpg';
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
	font-size: 0.95rem;
`;

const WorkDescDetails = styled.dd`
	font-family: 'IBM Plex Mono';
	font-size: 0.9rem;
	margin: 0;
	opacity: 50%;
	line-height: 24px;
	${mediaQueries[0]} {
		margin-bottom: 0;
	}
`;

const BlogPostList = styled.ol`
	max-width: 600px;
	margin: 0 auto;
`;

const BlogPostListRow = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	${mediaQueries[0]} {
		/* display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 32px; */
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
				limit: 3
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
		<>
			<SEO title="Home" />
			<section
				css={css`
					text-align: center;
					display: flex;
					flex-direction: column;

					@media (min-width: 840px) {
						margin-top: 96px;
						margin-bottom: 156px;
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
						Thinker
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
				<PageContainer>
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
								grid-template-columns: repeat(3, 1fr);
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
									Thoughts on business, programming, and life
								</WorkDescDetails>
							</Link>
						</WorkDiv>
						<WorkDiv>
							<OutboundLink
								href="https://github.com/bryanwyk"
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
					</dl>
				</PageContainer>

				<PageContainer>
					<h2
						css={css`
							margin-bottom: 48px;
							font-size: 1rem;
						`}
					>
						LATEST POSTS
					</h2>
					<BlogPostList>
						<BlogPostListRow>
							{latestBlogPosts.map(
								({ node }: { node: MarkdownRemark }) => {
									const frontmatter: any = node!.frontmatter!;

									return (
										<li
											key={node.id}
											css={css`
												list-style-type: none;
												text-align: center;
												margin-top: 48px;

												h4 {
													font-size: 1rem !important;
												}

												&:first-of-type {
													margin-top: 0;
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
												path={frontmatter.path}
											/>
										</li>
									);
								},
							)}
						</BlogPostListRow>
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
				</PageContainer>
			</motion.div>
		</>
	);
};

export default IndexPage;
