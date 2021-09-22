/** @jsx jsx */

import React, { FunctionComponent } from 'react';
import SEO from '../components/seo';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';

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
		<SEO title="About" />
		<GlobalBlogStyle />
		<div
			css={css`
				background-color: #fefefe;
				padding: 3rem 0 4rem 0;
			`}
		>
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
						Hi, I'm Bryan - a software engineer who enjoys building
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
						I'm currently a final year Software Engineering &
						Accounting student in Melbourne, Australia.
					</p>
					<p>
						I love front-end and design, but I am always actively
						pursuing new skills in all areas.
					</p>
					<p>
						In my spare time, I am passionate about everything
						related to:
						<ul>
							<li>
								{' '}
								Being creative (digital art, video-making, music
								production)
							</li>
							<li>Learning about online businesses</li>
							<li>Figuring out ways to optimise my life</li>
							<li>Working out at the gym</li>
							<li>
								Pursuing fun things (currently learning to ride
								a skateboard)
							</li>
						</ul>
					</p>
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
						This website is my personal landing page, but you can
						check out the <Link to="/blog">technical blog</Link>{' '}
						where I'll be learning in public with content mostly
						related to <b>web development</b>, and sometimes other
						cool, new things I come across.
					</p>
					<p>
						You can also find me on my social media profiles at the
						bottom of the page, or e-mail me at{' '}
						<a href="mailto:bryanwyk@gmail.com" title="Email">
							bryanwyk@gmail.com
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
