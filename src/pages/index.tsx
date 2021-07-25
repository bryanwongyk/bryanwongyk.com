/** @jsx jsx */

import React, { FunctionComponent } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { css, jsx, keyframes } from '@emotion/react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { ArrowRight } from 'phosphor-react';

import SEO from '../components/seo';
import { MarkdownRemarkEdge, MarkdownRemark } from '../graphql-types';
import PostPreview from '../components/post-preview/post-preview';
import LinkCTAButton from '../components/buttons/link-cta-button';
import profile from '../content/assets/images/profile-2-circular.png';
import PageContainer from '../components/page-container/page-container';

import { darkTheme } from '../utils/themes';
import mediaQueries from '../utils/breakpoints.utils';

const WorkDiv = styled.div`
	display: flex;
	flex-direction: column;
	transition: color 0.3s ease;

	&:hover {
		color: ${darkTheme.colours.red};
	}

	&:not(:first-of-type) {
		margin-top: 32px;
	}
	${mediaQueries[0]} {
		&:not(:first-of-type) {
			margin-top: 0;
		}
	}
`;

const WorkDescTitle = styled.dt`
	font-family: 'Source Sans Pro', 'serif';
	font-weight: bold;
	font-size: 1.5rem;
	text-align: center;
`;

const WorkDescDetails = styled.dd`
	margin-top: 16px;
	opacity: 50%;
	text-align: center;
	line-height: 24px;
	${mediaQueries[0]} {
		margin-bottom: 0;
	}
`;

const BlogPostList = styled.ol`
	margin: 0 0 24px 0;
	width: 100%;
`;

const BlogPostListRow = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	${mediaQueries[0]} {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 32px;
	}
`;

const ArrowSpan = styled.span`
	top: 4px;
	position: relative;
	margin-left: 8px;
`;

const ScrollDown = keyframes`
	from {
		opacity: 1;
		transform: translateY(0%);
	}
	50% {
		opacity: 1;
	}
	90% {
		opacity: 0.5;
	}
	100% {
		transform: translateY(60%);
		opacity: 0;
	}
`;

const IndexPage: FunctionComponent<{}> = ({}) => {
	const data = useStaticQuery(graphql`
		query LatestBlogPostsQuery {
			allMarkdownRemark(
				sort: {
					order: DESC
					fields: [frontmatter___date, frontmatter___title]
				}
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
		<>
			<SEO title="Home" />
			<section
				css={css`
					text-align: center;
					height: 90vh;
					min-height: 632px;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				`}
			>
				<div
					css={css`
						width: 100%;
						margin-bottom: 128px;
					`}
				>
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							type: 'spring' as any,
							stiffness: '25' as any,
						}}
						css={css`
							margin-bottom: 64px;
							margin-top: 32px;
						`}
					>
						<span
							css={css`
								transform: scale(0.5);
								position: relative;
								display: flex;
								justify-content: center;
								align-items: center;

								@media (min-width: 580px) {
									transform: scale(1);
								}
							`}
						>
							<img
								src={profile}
								css={css`
									width: 230px;
									margin: 0 30px 0 0;
									z-index: -1;
									margin: 0;
									transform: translateX(20px);
								`}
							/>
							<h1
								css={css`
									text-align: center;
									color: ${darkTheme.colours.red};
									font-size: 112px;
									transform: translateX(-20px);
									margin: 8px 0;
								`}
							>
								BRYAN <br />
								WONG
							</h1>
						</span>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							type: 'spring' as any,
							stiffness: '20' as any,
							delay: 0.7,
						}}
					>
						<h2
							css={css`
								text-align: center;
								margin: 0 0 48px 0;
								line-height: 24px;
								font-size: 1rem;
								max-width: 450px;
								display: inline-block;
								font-weight: normal;
							`}
						>
							Hi! I'm a <b>Software Engineer</b> passionate about
							creating user-centered experiences.
						</h2>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 1.4 }}
						css={css`
							display: flex;
							justify-content: center;
						`}
					>
						<div
							css={css`
								display: none;
								height: 42px;
								width: 24px;
								border-radius: 14px;
								transform: none;
								border: 2px solid white;
								top: 170px;

								${mediaQueries[0]} {
									display: block;
								}
							`}
						>
							<div
								css={css`
									height: 100%;
									animation: ${ScrollDown} 1.5s ease-out
										infinite;
								`}
							>
								<div
									css={css`
										height: 5px;
										width: 2px;
										display: block;
										margin: 5px auto;
										background: white;
										position: relative;

										height: 4px;
										width: 4px;
										border: 2px solid #fff;
										border-radius: 8px;
									`}
								/>
							</div>
						</div>
					</motion.div>
				</div>
			</section>
			<PageContainer>
				<h1
					css={css`
						margin-bottom: 64px;
						font-family: 'Source Sans Pro', sans-serif;
						font-weight: bold;
						font-size: 1.5rem;
					`}
				>
					CREATING
				</h1>
				<dl
					css={css`
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;

						${mediaQueries[0]} {
							flex-direction: row;
							justify-content: space-around;
							margin: 0 auto;
						}
					`}
				>
					<WorkDiv>
						<a href="https://github.com/bryanwyk" target="_blank">
							<WorkDescTitle>
								Developer <br /> Portfolio
							</WorkDescTitle>

							<WorkDescDetails>
								View my projects on GitHub
								<ArrowSpan>
									<ArrowRight size={18} />
								</ArrowSpan>
							</WorkDescDetails>
						</a>
					</WorkDiv>
					<WorkDiv>
						<a
							href="https://www.instagram.com/b2uyk/"
							target="_blank"
							css={css`
								display: inline;
							`}
						>
							<WorkDescTitle>Art</WorkDescTitle>
							<WorkDescDetails>
								View my digital art
								<span
									css={css`
										top: 4px;
										position: relative;
										margin-left: 8px;
									`}
								>
									<ArrowRight size={18} />
								</span>
							</WorkDescDetails>
						</a>
					</WorkDiv>
				</dl>
			</PageContainer>

			<PageContainer>
				<h1
					css={css`
						margin-bottom: 56px;
						font-family: 'Source Sans Pro', sans-serif;
						font-weight: bold;
						font-size: 1.5rem;
					`}
				>
					BLOG
				</h1>
				<BlogPostList>
					<BlogPostListRow
						css={css`
							${mediaQueries[2]} {
								grid-template-columns: 1fr 330px;
								grid-gap: 32px;
								margin-bottom: 32px;
							}
						`}
					>
						{latestBlogPosts
							.slice(0, 2)
							.map(({ node }: { node: MarkdownRemark }) => {
								const frontmatter: any = node!.frontmatter!;

								return (
									<li
										key={node.id}
										css={css`
											list-style-type: none;
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
					</BlogPostListRow>
					<BlogPostListRow
						css={css`
							${mediaQueries[2]} {
								grid-template-columns: 330px 1fr;
								grid-gap: 32px;
							}
						`}
					>
						{latestBlogPosts
							.slice(2, 4)
							.map(({ node }: { node: MarkdownRemark }) => {
								const frontmatter: any = node!.frontmatter!;

								return (
									<li
										key={node.id}
										css={css`
											list-style-type: none;
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
					</BlogPostListRow>
				</BlogPostList>
				<div
					css={css`
						display: flex;
						justify-content: center;
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
		</>
	);
};

export default IndexPage;
