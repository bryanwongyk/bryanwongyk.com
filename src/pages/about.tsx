/** @jsx jsx */

import React, { FunctionComponent } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { darkTheme } from '../styling/themes';
import Container from '../components/container/container';
import AboutHero from '../content/assets/images/about-hero.jpg';
import mediaQueries from '../styling/breakpoints.utils';

const Section = styled.section`
	margin-bottom: 96px;
`;

const StyledListItem = styled.li`
	margin-bottom: 32px;
`;

const About: FunctionComponent<{}> = ({}) => (
	<Layout>
		<SEO title="About" />
		<Container width={60}>
			<Section>
				<div
					css={css`
						display: flex;
						flex-direction: column;
						align-items: center;
						background-color: ${darkTheme.colours.black};
					`}
				>
					<h1
						css={css`
							font-weight: normal;
							letter-spacing: 4px;
							color: ${darkTheme.colours.red};
						`}
					>
						ABOUT
					</h1>
					<h2
						css={css`
							font-weight: bold;
							text-align: center;
							line-height: 24px;
						`}
					>
						I am currently finishing off my Software Engineering{' '}
						<br /> & Accounting studies in Melbourne.
					</h2>
					<img
						src={AboutHero}
						css={css`
							height: 480px;
							margin-bottom: 64px;
						`}
					/>
				</div>
				<div
					css={css`
						text-align: center;
					`}
				>
					<p>I build web applications for the future.</p>
					<p>
						My current goals are to further develop my knowledge
						across the full-stack, web technologies, and UI/UX
						design.
					</p>
					<p>
						To relax, I enjoy working out at the gym, pursuing
						creative endeavours, and reading.
					</p>
					<p>I am also a firm advocate for continuous learning.</p>
				</div>
			</Section>
			<Section>
				<h3
					css={css`
						opacity: 1;
						font-size: 1rem;
						text-align: center;
						${mediaQueries[0]} {
							margin-bottom: 64px;
						}
					`}
				>
					TOPICS I AM FASCINATED BY
				</h3>
				<ul
					css={css`
						list-style-type: none;
						display: flex;
						flex-direction: column;
						margin-left: 0;

						${mediaQueries[0]} {
							display: grid;
							grid-template-columns: repeat(3, 1fr);
							text-align: center;
						}
					`}
				>
					<StyledListItem>Personal development</StyledListItem>
					<StyledListItem>Personal finance</StyledListItem>
					<StyledListItem>Start-ups</StyledListItem>
					<StyledListItem>Art</StyledListItem>
					<StyledListItem>Film-making</StyledListItem>
					<StyledListItem>Music production</StyledListItem>
				</ul>
			</Section>
		</Container>
	</Layout>
);

export default About;
