/** @jsx jsx */

import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { css, jsx, keyframes } from '@emotion/react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { ArrowRight, Lightning, LightbulbFilament } from 'phosphor-react';
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
			margin-top: 32px;
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
	top: 3px;
	position: relative;
	margin-left: 8px;
`;

const IndexPage: FunctionComponent<{}> = ({}) => {
	const data = useStaticQuery(graphql`
		query LatestBlogPostsQuery {
			allMarkdownRemark(
				sort: [
					{ frontmatter: { dateReverseOrder: DESC } }
					{ frontmatter: { title: ASC } }
				]
				filter: { frontmatter: { type: { in: "blog" } } }
				limit: 4
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
						margin-top: 128px;
						margin-bottom: 180px;
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
									transform: translateY(-120px);
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
					<h4
						css={css`
							text-align: right;
							margin: 0;
							line-height: 24px;
							max-width: 450px;
							display: inline-block;
							transform: translateX(13px);

							@media (min-width: 500px) {
								transform: translateX(62px);
							}

							@media (min-width: 840px) {
								transform: translate(276px, -130px);
							}
						`}
					>
						Software Engineer. <br />
						Creator. <br />
						Based in Australia. <br />
					</h4>
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
					<h4
						css={css`
							margin-bottom: 2.5rem;
						`}
					>
						<Lightning
							size={18}
							color={darkTheme.colours.orange}
							css={css`
								position: relative;
								top: 4px;
								margin-right: 0.8rem;
							`}
						/>
						CREATING
					</h4>
					<dl
						css={css`
							display: flex;
							flex-direction: column;
							justify-content: space-around;
							align-items: center;
							text-align: center;
						`}
					>
						<WorkDiv>
							<Link to="/blog">
								<WorkDescTitle>
									BLOG
									<ArrowSpan>
										<ArrowRight size={18} />
									</ArrowSpan>
								</WorkDescTitle>

								<WorkDescDetails>
									Engineering, business & life
								</WorkDescDetails>
							</Link>
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
					<h4
						css={css`
							margin-bottom: 2.5rem;
						`}
					>
						<LightbulbFilament
							size={18}
							color={darkTheme.colours.orange}
							css={css`
								position: relative;
								top: 4px;
								margin-right: 0.8rem;
							`}
						/>
						LATEST POSTS
					</h4>
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
							margin-top: 4rem;
						`}
					>
						<LinkCTAButton link="/blog" isInternalLink={true}>
							<b
								css={css`
									font-size: 0.694rem;
								`}
							>
								VIEW ALL POSTS
							</b>
							<ArrowSpan>
								<ArrowRight size={14} />
							</ArrowSpan>
						</LinkCTAButton>
					</div>
				</SectionContainer>
			</motion.div>
		</PageContainer>
	);
};

export default IndexPage;
