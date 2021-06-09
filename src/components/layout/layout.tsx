/** @jsx jsx */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { FunctionComponent, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react';

import Header from '../header/header';
import '../../content/assets/stylesheets/layout.css';
import MobileNavBar from '../mobile-navbar/mobile-navbar';

import { darkTheme } from '../../styling/themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const ContainerDiv = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;
const Main = styled.main`
	flex: 1;
	margin-top: 83px;
`;

const FooterHr = styled.hr`
	width: 80%;
	background-color: ${darkTheme.colours.lightGrey};
`;

const Footer = styled.footer`
	margin: 2rem 0 1rem 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	opacity: 0.7;
	text-align: center;
	font-size: 0.9rem;
`;

const FooterPara = styled.p`
	font-weight: bold;
	opacity: 50%;
`;

const FooterAnchor = styled.a`
	opacity: 0.5;
	transition: opacity 0.3s ease 0s;
	margin: 0 10px;
	&:hover {
		opacity: 1;
	}
`;

const Layout: FunctionComponent<{}> = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	const [showMobileMenu, setShowMobileMenu] = useState(false);

	const handleToggleMobileMenu = (): void => {
		setShowMobileMenu(!showMobileMenu);
	};

	const handleCloseMobileMenu = (): void => {
		setShowMobileMenu(false);
	};

	// Only try to access document once the component has mounted
	useEffect(() => {
		showMobileMenu
			? (document.body.style.position = 'fixed')
			: (document.body.style.position = 'static');
	}, [showMobileMenu]);

	return (
		<>
			<Header
				siteTitle={data.site.siteMetadata?.title}
				toggleMobileMenu={handleToggleMobileMenu}
				closeMobileMenu={handleCloseMobileMenu}
				mobileMenuShown={showMobileMenu}
			>
				<MobileNavBar
					show={showMobileMenu}
					toggleMobileMenu={handleToggleMobileMenu}
				/>
			</Header>
			<ContainerDiv>
				<Main>{children}</Main>
				<Footer>
					<FooterHr />
					<FooterPara>
						© {new Date().getFullYear()} Bryan Wong
					</FooterPara>
					<div>
						<FooterAnchor
							href="https://www.linkedin.com/in/bryanwongyk/"
							target="_blank"
							title="LinkedIn"
						>
							<FontAwesomeIcon
								icon={faLinkedin}
								css={css`
									font-size: 28px;
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
									font-size: 28px;
								`}
							/>
						</FooterAnchor>
					</div>
				</Footer>
			</ContainerDiv>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
