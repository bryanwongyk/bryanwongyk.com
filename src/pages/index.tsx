/** @jsx jsx */

import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { css, jsx, keyframes, ThemeProvider } from '@emotion/react';
import theme from '../styling/baseTheme';

import Layout from '../components/layout';
import SEO from '../components/seo';

import profile from '../content/assets/images/profile.png';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';

const IndexPage: FunctionComponent<{}> = () => {
	/*
	Typewriter effect reference: https://css-tricks.com/snippets/css/typewriter-effect/
	*/
	const typing = keyframes`
	from { width: 0 }
	to { width: 302px } // have to use a unit that is not %, because % fills from the center outwards. 10.5em for desktop
	`;

	const blinkCaret = keyframes`
	from, to { border-color: transparent }
	50% { border-color: ${theme.colours.white} }
		`;
	return (
		<Layout>
			<SEO title="Home" />
			<main>
				<section
					css={css`
						text-align: center;
						font: Roboto;

						// Align text with border-right
						display: flex;
						align-items: center;

						// Styling for typing animation
						width: 302px;
						overflow: hidden; /* Ensures the content is not revealed until the animation */
						border-right: 0.15em solid ${theme.colours.white}; /*The typwriter cursor*/
						white-space: nowrap; /* Keeps the content on a single line */
						margin: 0 auto; /* Gives that scrolling effect as the typing happens */
						/* letter-spacing: 0.15em; Adjust as needed */
						animation: ${typing} 3s steps(24, end),
							${blinkCaret} 2.5s linear infinite;
					`}
				>
					<h1
						css={css`
							margin: 0 auto;
						`}
					>
						Hi, I'm Bryan!
					</h1>
				</section>
				<section
					css={css`
						text-align: center;
						margin: 50px 25px;
					`}
				>
					<img
						src={profile}
						css={css`
							width: 200px;
							margin: 0;
							min-width: 150px;
						`}
					></img>
				</section>
				<section
					css={css`
						display: flex;
						justify-content: space-between;
						align-items: center;
						margin: 25px auto;
						width: 200px;
					`}
				>
					<FaMapMarkerAlt
						size={28}
						css={css`
							color: ${theme.colours.pink};
							filter: drop-shadow(5px 6px 5px #000000);
						`}
					/>
					Melbourne, Australia
				</section>
				<div
					css={css`
						margin: 0 30px;
					`}
				>
					<section
						css={css`
							line-height: 1.5;
							margin: 50px auto;
							text-align: center;
						`}
					>
						<p>
							I'm a final year{' '}
							<span
								css={css`
									color: ${theme.colours.gold};
								`}
							>
								<b>Software Engineering & Accounting</b>
							</span>{' '}
							student.
						</p>
						<p></p>
						<p>
							I have a{' '}
							<span>
								<b>passion for creation</b>
							</span>{' '}
							that has ignited pursuits into{' '}
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
							. Today, this passion is what fuels my desire to
							build experiences on the
							<span
								css={css`
									color: ${theme.colours.gold};
								`}
							>
								<b> web</b>
							</span>
							.
						</p>
						<p>
							I am always seeking to broaden my skills across the
							full stack, to further my understanding of efficient
							software architectures and toolings, as well as to
							develop myself as a better leader.
						</p>
						<p>
							In my spare time, you can find me working out,
							getting lost in my current hobby, or just having a
							great time with friends.
						</p>
					</section>
				</div>
				<section
					css={css`
						line-height: 1.5;
						margin: 50px auto;
						text-align: center;
					`}
				>
					<h2
						css={css`
							text-decoration: underline;
							text-align: center;
							font-style: italic;
						`}
					>
						Follow or contact me below!
					</h2>
					<div
						css={css`
							display: flex;
							justify-content: space-around;
							margin: 25px auto;
							width: 200px;
						`}
					>
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
					</div>
				</section>
			</main>
		</Layout>
	);
};

export default IndexPage;
