/** @jsx jsx */

import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { css, jsx, ThemeProvider } from '@emotion/react';
import theme from '../themes/baseTheme';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

import profile from '../../public/profile.png';

const IndexPage: FunctionComponent<{}> = () => (
	<ThemeProvider theme={theme}>
		<Layout>
			<SEO title="Home" />
			<main className="profile">
				<section>
					<img
						src={profile}
						css={css`
							width: 200px;
							margin-left: 50px;
						`}
					></img>
				</section>
				<section className="profile-content">
					<p>
						Hi! I'm a final year{' '}
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
						expressing my creativity through producing
						music/design/art, or just having a great time with
						friends.
					</p>
				</section>
				<section className="profile-socials">
					<a
						href="https://www.linkedin.com/in/bryanwongyk/"
						target="_blank"
						title="LinkedIn"
					>
						LinkedIn
					</a>

					<a
						href="https://github.com/bryanwyk"
						target="_blank"
						title="GitHub"
					>
						GitHub
					</a>

					<a href="mailto:bryanwyk@gmail.com" title="Email">
						Email
					</a>
				</section>
			</main>
			<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
				<Image />
			</div>
		</Layout>
	</ThemeProvider>
);

export default IndexPage;
