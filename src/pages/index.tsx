/** @jsx jsx */

import React, { FunctionComponent, useEffect, useState, useRef } from 'react';
import { Link, graphql } from 'gatsby';
import { css, jsx } from '@emotion/react';
import { darkTheme } from '../styling/themes';
import styled from '@emotion/styled';
import { CaretRight, ArrowRight } from 'phosphor-react';

import Layout from '../components/layout/layout';
import Container from '../components/container/container';
import SEO from '../components/seo';
import { BlogData } from '../typings/blog';
import PostPreviewBasic from '../components/post-preview/post-preview-basic';
import AnchorButton from '../components/anchor-button/anchor-button';

import HeroImage from '../content/assets/images/profile-circular.png';
import mediaQueries from '../styling/breakpoints.utils';
import DeveloperPortfolioThumb from '../content/assets/images/developer-portfolio-thumb.jpeg';
import ArtThumb from '../content/assets/images/art-thumb.png';
import MusicGif from '../content/assets/images/music-production.gif';

import * as THREE from 'three';
import NET from '../vanta.net.min';

const Section = styled.section`
	margin-bottom: 256px;

	${mediaQueries[0]} {
		max-width: 848px;
		margin-left: auto;
		margin-right: auto;
	}
`;

const SectionHeader = styled.h3`
	margin-bottom: 48px;
`;

const HeroHeading = styled.h2`
	text-align: left;
	line-height: 150%;
	margin: 0;

	${mediaQueries[0]} {
		padding: 0 0 0 56px;
		max-width: 650px;
	}
`;

const HeroImg = styled.img`
	width: 90px;
	height: 90px;
	margin: 0 0 0 56px;
`;

const WorkDiv = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: center;
	&:not(:first-of-type) {
		margin-top: 160px;
	}
`;

const WorkDescTitle = styled.dt`
	display: flex;
	font-family: 'Lora', 'serif';
	font-size: 3rem;
`;

const WorkDescDetails = styled.dd`
	margin-top: 16px;
	opacity: 50%;
	display: flex;
	align-items: center;
	line-height: 24px;
`;

const CaretSpan = styled.span`
	display: flex;
	position: relative;
	top: 2px;
	margin-left: 30px;
	color: #aaaaaa;
`;

const BlogPostList = styled.ol`
	margin: 0 0 24px 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	${mediaQueries[0]} {
		justify-content: start;
	}
`;

const ContactHeader = styled.h3`
	font-size: 5rem;
	color: #fdfdfd;
	opacity: 1;
	display: flex;
	flex-direction: column;

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
`;

const IndexPage: FunctionComponent<BlogData> = ({ data }) => {
	const latestBlogPosts = data.allMarkdownRemark.edges;

	const [vantaEffect, setVantaEffect] = useState(0);
	const myRef = useRef(null);
	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				NET({
					el: myRef.current,
					THREE: THREE,
					color: 0x3fbbff,
					backgroundColor: '#010101',
					scale: 1.0,
					scaleMobile: 1.0,
					points: 5.0,
					maxDistance: 20.0,
				}),
			);
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);

	return (
		<Layout>
			<SEO title="Home" />
			<section
				id="about"
				ref={myRef}
				css={css`
					text-align: center;
					height: 80vh;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					margin-bottom: 160px;
				`}
			>
				<div>
					<div
						css={css`
							background-color: rgba(0, 0, 0, 0.5);
							padding: 20px 0;
							backdrop-filter: blur(2px);
							border-radius: 20px;
							${mediaQueries[0]} {
								display: flex;
								justify-content: center;
								align-items: center;
							}
						`}
					>
						<HeroImg src={HeroImage} />
						<HeroHeading>
							I’m Bryan - a Software Engineer in Australia
							passionate about creating user-centred experiences.
						</HeroHeading>
					</div>
				</div>
			</section>
			<Container>
				<Section id="work">
					<SectionHeader>CREATING</SectionHeader>
					<dl>
						<WorkDiv>
							<div
								css={css`
									display: flex;
									justify-content: center;
									align-items: center;
								`}
							>
								<Link to="/portfolio">
									<WorkDescTitle>
										Developer <br /> Portfolio
									</WorkDescTitle>
									<WorkDescDetails>
										View my projects and <br /> who I have
										worked with
										<CaretSpan>
											<CaretRight size={18} />
										</CaretSpan>
									</WorkDescDetails>
								</Link>
							</div>
							<img
								src={DeveloperPortfolioThumb}
								css={css`
									width: 400px;
								`}
							/>
						</WorkDiv>
						<WorkDiv>
							<img
								src={ArtThumb}
								css={css`
									width: 400px;
								`}
							/>
							<div
								css={css`
									display: flex;
									justify-content: center;
									align-items: center;
								`}
							>
								<a
									href="https://www.instagram.com/b2uyk/"
									css={css`
										display: inline-block;
									`}
								>
									<WorkDescTitle>Art</WorkDescTitle>
									<WorkDescDetails>
										View my digital art
										<CaretSpan>
											<CaretRight size={18} />
										</CaretSpan>
									</WorkDescDetails>
								</a>
							</div>
						</WorkDiv>
					</dl>
				</Section>
				<Section>
					<div
						css={css`
							display: flex;
							flex-direction: column;
							align-items: center;
						`}
					>
						<p
							css={css`
								font-size: 1.2rem;
								text-align: center;
								margin-bottom: 120px;
							`}
						>
							I also enjoy music production, fitness, and film.
						</p>
						<img src={MusicGif} />
					</div>
				</Section>

				<Section>
					<SectionHeader>BLOG</SectionHeader>
					<BlogPostList>
						{latestBlogPosts.map(post => {
							return (
								<li
									key={post.node.id}
									css={css`
										list-style-type: none;
										${mediaQueries[0]} {
											width: 30%;
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
						`}
					>
						<AnchorButton link="/blog" isInternalLink={true}>
							View all posts
						</AnchorButton>
					</div>
				</Section>
				<Section>
					<div
						css={css`
							display: grid;
							grid-template-columns: repeat(2, 1fr);
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
									font-size: 2.5rem;
									font-weight: bold;
									margin-left: 100px;
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
