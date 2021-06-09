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

import HeroImage from '../content/assets/images/profile.png';

const Section = styled.section`
	margin-bottom: 60px;
`;

const HeroHeading = styled.h2`
	text-align: left;
	line-height: 150%;
	margin-top: 45px;
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
					</WorkDescList>
				</Section>
				<Section>
					<h3>BLOG</h3>
					{latestBlogPosts.map(post => {
						return (
							<BlogPostList>
								<PostPreviewBasic
									id={post.node.id}
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
							</BlogPostList>
						);
					})}
					<div
						css={css`
							display: flex;
							justify-content: center;
							margin-top: 5px;
						`}
					>
						<AnchorButton link="/blog" isInternalLink={true}>
							View all posts
						</AnchorButton>
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
