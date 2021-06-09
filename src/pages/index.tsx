/** @jsx jsx */

import React, { FunctionComponent } from 'react';
import { Link, graphql } from 'gatsby';
import { css, jsx } from '@emotion/react';
import { darkTheme } from '../styling/themes';
import styled from '@emotion/styled';
import { CaretRight } from 'phosphor-react';

import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import SEO from '../components/seo';
import { BlogData } from '../typings/blog';
import PostPreviewBasic from '../components/post-preview/post-preview-basic';
import AnchorButton from '../components/anchor-button/anchor-button';
import ContactForm from '../components/contact-form/contact-form';

import HeroImage from '../content/assets/images/profile.png';
import mediaQueries from '../styling/breakpoints.utils';

const Section = styled.section`
	margin-bottom: 72px;

	${mediaQueries[0]} {
		max-width: 848px;
		margin-left: auto;
		margin-right: auto;
	}
`;

const HeroHeading = styled.h2`
	text-align: left;
	line-height: 150%;
	margin: 45px auto 0 auto;

	${mediaQueries[0]} {
		padding: 0 56px;
		max-width: 650px;
	}
`;

const HeroImg = styled.img`
	width: 200px;
	margin: 0;
`;

const WorkDescList = styled.dl`
	display: grid;
	grid-template-rows: repeat(2, 1fr);
	justify-content: center;
	grid-gap: 20px;
	margin: 0 auto 0 0;

	${mediaQueries[0]} {
		grid-template-rows: repeat(2, 1fr);
		grid-template-columns: repeat(2, 250px);
		grid-gap: 20px 144px;
		max-width: 600px;
		margin: 0 auto;
	}
`;

const WorkDescTitle = styled.dt`
	display: flex;
`;

const WorkDescDetails = styled.dd`
	margin-top: 5px;
	opacity: 50%;
`;

const CaretSpan = styled.span`
	display: flex;
	padding-top: 2px;
`;

const BlogPostList = styled.ol`
	margin: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	${mediaQueries[0]} {
		justify-content: start;
	}
`;

const EmailAnchor = styled.a`
	&:hover {
		text-decoration: underline;
		text-decoration-style: solid;
	}
`;

const IndexPage: FunctionComponent<BlogData> = ({ data }) => {
	const latestBlogPosts = data.allMarkdownRemark.edges;
	return (
		<Layout>
			<SEO title="Home" />
			<Container>
				<Section
					css={css`
						text-align: center;
						margin-top: 50px;

						${mediaQueries[0]} {
							display: flex;
							justify-content: center;
						}
					`}
				>
					<HeroImg src={HeroImage} />
					<HeroHeading>
						I’m Bryan - a Software Engineer in Australia passionate
						about creating user-centred experiences.
						<br />
						<br />I have a keen interest in web development,
						business, and design.
					</HeroHeading>
				</Section>
				<Section>
					<h3>WORK</h3>
					<WorkDescList>
						<Link to="/portfolio">
							<WorkDescTitle>
								Developer Portfolio{' '}
								<CaretSpan>
									<CaretRight size={18} />
								</CaretSpan>
							</WorkDescTitle>
							<WorkDescDetails>
								View my projects and work history
							</WorkDescDetails>
						</Link>
						<a href="https://www.instagram.com/b2uyk/">
							<WorkDescTitle>
								Art{' '}
								<CaretSpan>
									<CaretRight size={18} />
								</CaretSpan>
							</WorkDescTitle>
							<WorkDescDetails>
								View my digital art
							</WorkDescDetails>
						</a>
						<a href="https://soundcloud.com/bwyk">
							<WorkDescTitle>
								Music{' '}
								<CaretSpan>
									<CaretRight size={18} />
								</CaretSpan>
							</WorkDescTitle>
							<WorkDescDetails>
								I sometimes produce music
							</WorkDescDetails>
						</a>
					</WorkDescList>
				</Section>
				<Section>
					<h3>BLOG</h3>
					<BlogPostList>
						{latestBlogPosts.map(post => {
							return (
								<li
									key={post.node.id}
									css={css`
										list-style-type: none;
										${mediaQueries[0]} {
											width: 50%;
										}
									`}
								>
									<PostPreviewBasic
										thumbnailPath={
											post.node.frontmatter.featuredImage
												.publicURL
										}
										title={post.node.frontmatter.title}
										description={
											post.node.frontmatter.description
										}
										path={post.node.frontmatter.path}
									/>
								</li>
							);
						})}
					</BlogPostList>
					<div
						css={css`
							display: flex;
							justify-content: center;
							${mediaQueries[0]} {
								justify-content: start;
							}
						`}
					>
						<AnchorButton link="/blog" isInternalLink={true}>
							View all posts
						</AnchorButton>
					</div>
				</Section>
				<Section>
					<h3>CONTACT</h3>
					<p
						css={css`
							opacity: 50%;
						`}
					>
						Let's chat about business or work opportunities
					</p>
					<div
						css={css`
							display: flex;
							flex-direction: column;
							align-items: center;
						`}
					>
						<EmailAnchor
							href="mailto:bryanwyk@gmail.com"
							title="Email"
						>
							bryanwyk@gmail.com
						</EmailAnchor>
						<p
							css={css`
								margin: 24px 0;
								opacity: 50%;
							`}
						>
							OR
						</p>
					</div>
					<div
						css={css`
							display: flex;
							flex-direction: column;
							align-items: center;
						`}
					>
						<ContactForm />
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
			limit: 1
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
