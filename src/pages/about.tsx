/** @jsx jsx */

import React, { FunctionComponent } from 'react';
import SEO from '../components/seo';
import { motion } from 'framer-motion';

import { css, jsx } from '@emotion/react';

import AboutImg from '../content/assets/images/about.jpg';
import PageContainer from '../components/page-container/page-container';

const About: FunctionComponent<{}> = ({}) => (
	<>
		<SEO title="About" />
		<PageContainer>
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{
					duration: 0.5,
				}}
			>
				<h1
					css={css`
						font-size: 1.2rem;
					`}
				>
					ABOUT
				</h1>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{
					duration: 0.5,
					delay: 0.5,
				}}
			>
				<h2>Hi, I'm Bryan!</h2>
				<div
					css={css`
						display: flex;
						justify-content: center;
						margin: 64px 0;
					`}
				>
					<img
						src={AboutImg}
						css={css`
							width: 100%;
							max-width: 480px;
						`}
					/>
				</div>
				<p>
					I'm a final year Software Engineering & Accounting student
					in Melbourne, Australia who enjoys building web
					applications.
				</p>
				<p>
					In my spare time, you'll find me pursuing creative
					endeavours (such as digital art, music production, and video
					creation), working out at the gym, or learning.
				</p>
				<p>
					Lately, I've loved pouring over content related to
					businesses/start-ups, personal development, and personal
					finance.
				</p>
				<p>Feel free to reach out to connect or have a chat!</p>
			</motion.div>
		</PageContainer>
	</>
);

export default About;
