/** @jsx jsx */

import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { css, jsx, ThemeProvider } from '@emotion/react';
import theme from '../styling/baseTheme';

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
							margin: 25px auto;
						`}
					></img>
				</section>
				<section
					css={css`
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin: 25px auto;
						width: 225px;
					`}
				>
					<FaMapMarkerAlt
						size={32}
						style={{ color: `${theme.colours.pink}` }}
					/>
					Melbourne, Australia
				</section>
				<section
					css={css`
						line-height: 1.5;
					`}
				>
					<p>
						Hi! I'm a final year{' '}
						<b>Software Engineering & Accounting</b> student
						currently in Melbourne, Australia.
					</p>
					<p>
						I have a <b>passion for creation</b> that has ignited
						pursuits into{' '}
						<a
							href="https://www.youtube.com/channel/UC_9QYf3yFIL4HkK5ZzD7Eiw"
							css={css`
								opacity: 0.7;
								transition: opacity 0.3s ease 0s;
								transition: color 0.3s ease 0s;
								&:hover {
									opacity: 1;
									color: ${theme.colours.gold};
								}
							`}
						>
							video-making
						</a>
						,
						<a
							href="http://instagram.com/b2uyk"
							css={css`
								opacity: 0.7;
								transition: opacity 0.3s ease 0s;
								transition: color 0.3s ease 0s;
								&:hover {
									opacity: 1;
									color: ${theme.colours.gold};
								}
							`}
						>
							{' '}
							art
						</a>
						, and{' '}
						<a
							href="https://soundcloud.com/bwyk"
							css={css`
								opacity: 0.7;
								transition: opacity 0.3s ease 0s;
								transition: color 0.3s ease 0s;
								&:hover {
									opacity: 1;
									color: ${theme.colours.gold};
								}
							`}
						>
							music production
						</a>
						. This passion is what fuels my desire to build
						experiences through <b>technology</b>. Right now, I am
						particularly interested in creating for the <b>web</b>.
					</p>
					<p>
						I am always seeking to broaden my skills across the full
						stack, to deepen my understanding of efficient software
						architectures and tooling, as well as to develop myself
						as a leader.
					</p>
					<p>
						In my spare time, you can find me working out, getting
						lost in my next hobby, or just having a great time with
						friends.
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
