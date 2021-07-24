/** @jsx jsx */

import React, { FunctionComponent } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { darkTheme } from '../styling/themes';
import profile from '../content/assets/images/profile-circular.png';

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
			<div
				css={css`
					display: flex;
					flex-direction: column;
					align-items: center;
					background-color: ${darkTheme.colours.black};
				`}
			>
				<h1>ABOUT</h1>
			</div>
			<div
				css={css`
					display: flex;
					justify-content: center;
					margin: 32px 0;
				`}
			>
				<img
					src={profile}
					css={css`
						width: 128px;
					`}
				/>
			</div>
			<div>
				<h2>Hi, I'm Bryan!</h2>
				<p>
					I'm a final year Software Engineering & Accounting student
					in Melbourne, Australia.
				</p>
				<p>
					As an engineer, I love building web applications (especially
					on the front-end).
				</p>
				<p>
					In my spare time, you'll find me pursuing creative
					endeavours (such as digital art, music production, and video
					creation), working out at the gym, or learning.
				</p>
				<p>
					Lately, I've enjoyed pouring over content related to
					businesses/start-ups, personal development, and personal
					finance.
				</p>
			</div>
		</Section>
	</Layout>
);

export default About;
