/** @jsx jsx */

import React, { FunctionComponent } from 'react';
import SEO from '../components/seo';
import { motion } from 'framer-motion';

import { css, jsx } from '@emotion/react';

import AboutImg from '../content/assets/images/about.jpg';
import AboutFourPillarsImg from '../content/assets/images/about-four-pillars.png';
import PageContainer from '../components/page-container/page-container';
import SectionContainer from '../components/section-container/section-container';
import LinkCTAButtonLight from '../components/buttons/link-cta-button-light';
import GlobalBlogStyle from '../components/global-blog-style/GlobalBlogStyle';
import BlogPostContainer from '../components/blog-post-container/blog-post-container';

import { ArrowRight } from 'phosphor-react';

const About: FunctionComponent<{}> = ({}) => (
	<>
		<GlobalBlogStyle />
		<div
			css={css`
				background-color: #fefefe;
				padding: 3rem 0 4rem 0;
			`}
		>
			<SEO title="About" />
			<BlogPostContainer>
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{
						duration: 0.5,
					}}
				>
					<h1
						css={css`
							font-size: 1rem;
							margin-top: 0;
						`}
					>
						ABOUT
					</h1>
				</motion.div>
				<motion.article
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.8,
						delay: 0.7,
					}}
				>
					<h2>
						Hi, I'm Bryan - a software engineer who aims to build
						beautiful and robust web applications
					</h2>
					<div
						css={css`
							display: flex;
							justify-content: center;
							margin: 2rem 0;
						`}
					>
						<img
							src={AboutImg}
							css={css`
								width: 100%;
							`}
						/>
					</div>
					<p>
						I'm on a mission to inspire, inform, and entertain
						across the following four pillars:
					</p>
					<ul>
						<li>Software engineering</li>
						<li>Creative thinking</li>
						<li>Personal development</li>
						<li>Business building</li>
					</ul>
					<div
						css={css`
							display: flex;
							justify-content: center;
							margin: 2rem 0;
						`}
					>
						<img
							src={AboutFourPillarsImg}
							css={css`
								width: 100%;
							`}
						/>
					</div>
					<p>
						Each week, I'll be sharing content about the cool, new
						things I learn about on this blog.
					</p>
					<p>
						If this sounds interesting, consider subscribing to the
						monthly newsletter to not miss out.
					</p>
					<p>
						You can also find me on{' '}
						<a
							href="https://twitter.com/bryanwongyk"
							target="_blank"
						>
							Twitter
						</a>
						, or e-mail me at{' '}
						<a href="mailto:bryanwyk@gmail.com" title="Email">
							bryanwongteam@gmail.com
						</a>
						.
					</p>
					<p>Hope to hear from you soon,</p>
					<p>Bryan</p>
				</motion.article>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.8,
						delay: 0.7,
					}}
				>
					<div
						css={css`
							display: flex;
							justify-content: center;
							margin-top: 2rem;
						`}
					>
						<LinkCTAButtonLight link="/blog" isInternalLink={true}>
							<b>Go to the blog </b>

							<span
								css={css`
									top: 4px;
									position: relative;
									margin-left: 8px;
								`}
							>
								<ArrowRight size={18} />
							</span>
						</LinkCTAButtonLight>
					</div>
				</motion.div>
			</BlogPostContainer>
		</div>
	</>
);

export default About;
