/** @jsx jsx */

import React, { FunctionComponent } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { darkTheme } from '../styling/themes';
import AboutImg from '../content/assets/images/about.jpg';

const Section = styled.section`
	margin-bottom: 96px;
`;

const StyledListItem = styled.li`
	margin-bottom: 32px;
`;

const About: FunctionComponent<{}> = ({}) => (
	<Layout>
		<SEO title="About" />
		<Section>
			{/* <div
				css={css`
					display: flex;
					flex-direction: column;
					align-items: center;
					background-color: ${darkTheme.colours.black};
				`}
			> */}
			<h1
				css={css`
					font-size: 1.2rem;
				`}
			>
				ABOUT
			</h1>
			<div>
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
							max-height: 480px;
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
			</div>
		</Section>
	</Layout>
);

export default About;
