/** @jsx jsx */
import { FunctionComponent } from 'react';
import { Link } from 'gatsby';

import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

import { darkTheme } from '../../../styling/themes';
import mediaQueries from '../../../styling/breakpoints.utils';

const StyledFooter = styled.footer`
	margin: 32px 0 16px 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	font-size: 0.9rem;
	padding-top: 32px;

	${mediaQueries[0]} {
		flex-direction: row;
		align-items: flex-start;
	}
`;

const FooterPara = styled.p`
	opacity: 0.4;
`;

const FooterAnchor = styled.a`
	opacity: 0.5;
	transition: all 0.3s ease 0s;
	margin: 0 16px;
	&:hover {
		opacity: 1;
		color: ${darkTheme.colours.red};
	}
`;

const FooterList = styled.ul`
	list-style: none;
	margin-left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 0;
	${mediaQueries[0]} {
		align-items: flex-start;
		flex-direction: row;
	}
`;

const FooterSocialsList = styled.ul`
	list-style: none;
	margin-left: 0;
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	margin-bottom: 0;
`;

const FooterListItem = styled.li`
	opacity: 0.7;
	transition: all 0.3s ease 0s;
	margin-right: 0;
	font-family: 'Poppins', sans-serif;
	font-weight: normal;
	font-size: 0.75rem;
	letter-spacing: 1px;

	&:hover {
		opacity: 1;
		color: ${darkTheme.colours.red};
	}
	${mediaQueries[0]} {
		margin-right: 12px;
	}
`;

const Footer: FunctionComponent<{}> = ({ children }) => {
	return (
		<StyledFooter>
			<div
				css={css`
					${mediaQueries[0]} {
						display: flex;
						flex-direction: column;
						align-items: start;
					}
				`}
			>
				<FooterList>
					<FooterListItem>
						<Link to={'/about'}>ABOUT</Link>
					</FooterListItem>
					<FooterListItem>
						<Link to={'/blog'}>BLOG</Link>
					</FooterListItem>
					<FooterListItem>
						<Link to={'/contact'}>CONTACT</Link>
					</FooterListItem>
				</FooterList>
				<FooterPara>© {new Date().getFullYear()} Bryan Wong</FooterPara>
			</div>

			<FooterSocialsList>
				<FooterAnchor
					href="https://www.linkedin.com/in/bryanwongyk/"
					target="_blank"
					title="LinkedIn"
				>
					<FontAwesomeIcon
						icon={faLinkedinIn}
						css={css`
							font-size: 24px;
						`}
					/>
				</FooterAnchor>
				<FooterAnchor
					href="https://github.com/bryanwyk"
					target="_blank"
					title="GitHub"
				>
					<FontAwesomeIcon
						icon={faGithub}
						css={css`
							font-size: 24px;
						`}
					/>
				</FooterAnchor>
			</FooterSocialsList>
		</StyledFooter>
	);
};

export default Footer;
