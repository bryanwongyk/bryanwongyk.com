/** @jsx jsx */

import React, { FunctionComponent, useEffect, useState, useRef } from 'react';
import { Link, graphql } from 'gatsby';
import { css, jsx, keyframes } from '@emotion/react';
import { darkTheme } from '../styling/themes';
import styled from '@emotion/styled';
import { CaretRight, ArrowRight } from 'phosphor-react';

import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import SEO from '../components/seo';
import { BlogData } from '../typings/blog';
import PostPreviewBasic from '../components/post-preview/post-preview-basic';
import AnchorButton from '../components/anchor-button/anchor-button';

import mediaQueries from '../styling/breakpoints.utils';

const Section = styled.section`
	margin-bottom: 256px;

	${mediaQueries[0]} {
		max-width: 1220px;
		padding: 0 64px;
		margin-left: auto;
		margin-right: auto;
	}
`;

const HeroHeading = styled.h1`
	text-align: center;
	color: ${darkTheme.colours.red};
	font-size: 112px;
	margin-bottom: 64px;
	${mediaQueries[0]} {
		font-size: 144px;
	}
`;

const HeroSubHeading = styled.h2`
	text-align: center;
	margin: 0 0 64px 0;
	line-height: 24px;
`;

const WorkDiv = styled.div`
	display: flex;
	flex-direction: column;
	transition: color 0.3s ease;

	&:hover {
		color: ${darkTheme.colours.red};
	}

	&:not(:first-of-type) {
		margin-top: 160px;
	}
`;

const WorkDescTitle = styled.dt`
	font-family: 'Roboto', 'serif';
	font-size: 3rem;
	text-align: center;
`;

const WorkDescDetails = styled.dd`
	margin-top: 16px;
	opacity: 50%;
	text-align: center;
	line-height: 24px;
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

const ContactHeader = styled.h3`
	font-size: 4rem;
	color: #fdfdfd;
	opacity: 1;
	display: flex;
	flex-direction: column;
	align-items: center;

	&:before {
		content: 'CONTACT';
		color: ${darkTheme.colours.black};
		text-shadow: -1px 1px 0 #fdfdfd, 1px 1px 0 #fdfdfd, 1px -1px 0 #fdfdfd,
			-1px -1px 0 #fdfdfd;
	}

	&:after {
		content: 'CONTACT';
		color: ${darkTheme.colours.black};
		text-shadow: -1px 1px 0 #fdfdfd, 1px 1px 0 #fdfdfd, 1px -1px 0 #fdfdfd,
			-1px -1px 0 #fdfdfd;
	}

	${mediaQueries[0]} {
		align-items: start;
		font-size: 5rem;
	}

	${mediaQueries[2]} {
		font-size: 6rem;
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

const IndexPage: FunctionComponent<BlogData> = ({ data }) => {
	const latestBlogPosts = data.allMarkdownRemark.edges;

	return (
		<Layout>
			<SEO title="Home" />
			<section
				id="about"
				css={css`
					text-align: center;
					height: 90vh;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				`}
			>
				<div>
					<div
						css={css`
							margin-bottom: 128px;
						`}
					>
						<HeroHeading>
							BRYAN <br />
							WONG
						</HeroHeading>
						<HeroSubHeading>
							Hi! I'm a <b>Software Engineer</b> in Australia
							passionate about creating <br /> user-centered
							experiences.
						</HeroSubHeading>
						<div
							css={css`
								display: flex;
								justify-content: center;
							`}
						>
							<div
								css={css`
									height: 42px;
									width: 24px;
									border-radius: 14px;
									transform: none;
									border: 2px solid white;
									top: 170px;
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
						</div>
					</div>
				</div>
			</section>
			<Container>
				<Section id="work">
					<h3
						css={css`
							margin-bottom: 120px;
						`}
					>
						CREATING
					</h3>
					<dl
						css={css`
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
						`}
					>
						<WorkDiv>
							<Link to="/portfolio">
								<WorkDescTitle>
									Developer <br /> Portfolio
								</WorkDescTitle>

								<WorkDescDetails>
									View my projects and <br /> who I have
									worked with
									<ArrowSpan>
										<ArrowRight size={18} />
									</ArrowSpan>
								</WorkDescDetails>
							</Link>
						</WorkDiv>
						<WorkDiv>
							<a
								href="https://www.instagram.com/b2uyk/"
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
				</Section>

				<Section>
					<h3
						css={css`
							margin-bottom: 56px;
						`}
					>
						BLOG
					</h3>
					<BlogPostList>
						<BlogPostListRow
							css={css`
								${mediaQueries[2]} {
									grid-template-columns: 1fr 330px;
									grid-gap: 32px;
								}
							`}
						>
							{latestBlogPosts.slice(0, 2).map(post => {
								return (
									<li
										key={post.node.id}
										css={css`
											list-style-type: none;
										`}
									>
										<PostPreviewBasic
											thumbnailPath={
												post.node.frontmatter
													.featuredImage.publicURL
											}
											title={post.node.frontmatter.title}
											description={
												post.node.frontmatter
													.description
											}
											path={post.node.frontmatter.path}
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
							{latestBlogPosts.slice(2, 4).map(post => {
								return (
									<li
										key={post.node.id}
										css={css`
											list-style-type: none;
										`}
									>
										<PostPreviewBasic
											thumbnailPath={
												post.node.frontmatter
													.featuredImage.publicURL
											}
											title={post.node.frontmatter.title}
											description={
												post.node.frontmatter
													.description
											}
											path={post.node.frontmatter.path}
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
						<AnchorButton link="/blog" isInternalLink={true}>
							<b>View all posts </b>

							<ArrowSpan>
								<ArrowRight size={18} />
							</ArrowSpan>
						</AnchorButton>
					</div>
				</Section>
				<Section>
					<div
						css={css`
							display: flex;
							flex-direction: column;
							align-items: center;

							${mediaQueries[1]} {
								display: grid;
								grid-template-columns: repeat(2, 1fr);
							}
						`}
					>
						<ContactHeader>CONTACT</ContactHeader>
						<div
							css={css`
								display: flex;
								align-items: center;
							`}
						>
							<p
								css={css`
									font-size: 1.5rem;
									font-weight: bold;
									margin-top: 24px;
									${mediaQueries[1]} {
										margin-top: 0;
										margin-left: 50px;
									}
									${mediaQueries[2]} {
										margin-left: 100px;
										font-size: 2.5rem;
									}
								`}
							>
								Want to work together?
								<br />
								<br />
								<Link
									to="/contact"
									css={css`
										display: flex;
										align-items: center;
										transition: all 0.3s ease;
										&:hover {
											color: ${darkTheme.colours.red};
											span {
												border-bottom: 1px solid
													${darkTheme.colours.red};
											}
										}
									`}
								>
									<span
										css={css`
											border-bottom: 1px solid #f2f2f2;
										`}
									>
										Let's chat.
									</span>

									<ArrowRight
										size={40}
										css={css`
											margin-left: 16px;
											position: relative;
											top: 3px;
										`}
									/>
								</Link>
							</p>
						</div>
					</div>
				</Section>
			</Container>
		</Layout>
	);
};

export default IndexPage;

export const pageQuery = graphql`
	query LatestBlogPostsQuery {
		allMarkdownRemark(
			sort: { order: DESC, fields: frontmatter___date }
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
`;
