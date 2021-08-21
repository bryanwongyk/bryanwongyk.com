/** @jsx jsx */
import { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react';
import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLinkedinIn,
	faGithub,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import SubscriptionForm from '../../subscription-form/subscription-form';

import { darkTheme } from '../../../utils/themes';
import mediaQueries from '../../../utils/breakpoints.utils';

const StyledFooter = styled.footer`
	margin: 3rem 0 3rem 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	font-size: 0.9rem;
	padding: 0;

	${mediaQueries[0]} {
		flex-direction: row;
		align-items: flex-start;
	}
`;

const FooterPara = styled.p`
	opacity: 0.4;
`;

const FooterAnchor = styled(OutboundLink)`
	opacity: 0.5;
	transition: all 0.3s ease 0s;
	width: 48px;
	&:hover {
		opacity: 1;
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
	font-family: 'Work Sans', sans-serif;
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
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				type: 'spring' as any,
				stiffness: '20' as any,
				delay: 1.5,
			}}
			css={css`
				background-color: ${darkTheme.colours.black};
				padding: 0 32px;
				max-width: 1024px;
				margin: 0 auto;
				${mediaQueries[0]} {
					width: 100%;
					padding: 0 48px;
				}
			`}
		>
			<hr
				css={css`
					margin-top: 0;
					margin-bottom: 4rem;
				`}
			/>
			<SubscriptionForm />
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
					<FooterPara>
						© {new Date().getFullYear()} Bryan Wong
					</FooterPara>
				</div>

				<FooterSocialsList>
					<FooterAnchor
						href="https://twitter.com/bryanwongyk"
						target="_blank"
						title="Twitter"
					>
						<FontAwesomeIcon
							icon={faTwitter}
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
				</FooterSocialsList>
			</StyledFooter>
		</motion.div>
	);
};

export default Footer;
