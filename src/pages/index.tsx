/** @jsx jsx */

import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { css, jsx, ThemeProvider } from '@emotion/react';
import theme from '../themes/baseTheme';

import Layout from '../components/layout';
import SEO from '../components/seo';

import profile from '../content/assets/images/profile.png';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';

const IndexPage: FunctionComponent<{}> = () => (
	<ThemeProvider theme={theme}>
		<Layout>
			<SEO title="Home" />
			<main>
				<section
					css={css`
						text-align: center;
					`}
				>
					<img
						src={profile}
						css={css`
							width: 200px;
							margin-left: 50px;
						`}
					></img>
				</section>
				<section>
					<FaMapMarkerAlt />
				</section>
				<section>
					<p>
						Hi! I'm a final year
						<b>Software Engineering & Accounting</b> student
						currently in Melbourne, Australia.
					</p>
					<p>
						I have a passion for solving problems with technology,
						building awesome experiences for people and leadership
						development. Right now, I am fulfilling the first two
						passions through the <b>web</b>.
					</p>
					<p>
						Building a deeper understanding of efficient software
						architecture, tooling, and processes across the{' '}
						<b>full stack</b> is a desire of mine.
					</p>
					<p>
						In my spare time, you can find me working out,
						expressing my creativity through producing music/art, or
						just having a great time with friends.
					</p>
				</section>
				<section>
					<a
						href="https://www.linkedin.com/in/bryanwongyk/"
						target="_blank"
						title="LinkedIn"
						css={css`
							opacity: 0.5;
							transition: opacity 0.3s ease 0s;
							&:hover {
								opacity: 1;
							}
						`}
					>
						<AiFillLinkedin size={32} />
					</a>

					<a
						href="https://github.com/bryanwyk"
						target="_blank"
						title="GitHub"
						css={css`
							opacity: 0.5;
							transition: opacity 0.3s ease 0s;
							&:hover {
								opacity: 1;
							}
						`}
					>
						<AiFillGithub size={32} />
					</a>

					<a
						href="mailto:bryanwyk@gmail.com"
						title="Email"
						css={css`
							opacity: 0.5;
							transition: opacity 0.3s ease 0s;
							&:hover {
								opacity: 1;
							}
						`}
					>
						<MdEmail size={32} />
					</a>
				</section>
			</main>
		</Layout>
	</ThemeProvider>
);

export default IndexPage;
