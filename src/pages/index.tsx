/** @jsx jsx */

import React, { FunctionComponent, useEffect, useState, useRef } from 'react';
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

import HeroImage from '../content/assets/images/profile-circular.png';
import mediaQueries from '../styling/breakpoints.utils';
import DeveloperPortfolioThumb from '../content/assets/images/developer-portfolio-thumb.jpeg';

import * as THREE from 'three';
import NET from '../vanta.net.min';

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
	font-family: 'Lora', 'serif';
	font-size: 3rem;
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
					<h3>CREATING</h3>
					<WorkDescList>
						<div>
							<Link to="/portfolio">
								<WorkDescTitle>
									Developer Portfolio{' '}
								</WorkDescTitle>
								<WorkDescDetails>
									View my projects and who I have worked with
									<CaretSpan>
										<CaretRight size={18} />
									</CaretSpan>
								</WorkDescDetails>
							</Link>
							<img src={DeveloperPortfolioThumb} />
						</div>
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
				<Section id="contact">
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
