/** @jsx jsx */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { FunctionComponent, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react';

import Header from '../header/header';
import '../../content/assets/stylesheets/layout.css';
import MobileNavBar from '../mobile-navbar/mobile-navbar';

import { darkTheme } from '../../styling/themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const ContainerDiv = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`;
const Main = styled.main`
	flex: 1;
`;

const Footer = styled.footer`
	margin: 32px 64px 16px 64px;
	display: flex;
	justify-content: space-between;
	text-align: center;
	font-size: 0.9rem;
	border-top: 1px solid ${darkTheme.colours.blue};
	padding-top: 16px;
`;

const FooterPara = styled.p`
	opacity: 0.5;
`;

const FooterAnchor = styled.a`
	opacity: 0.7;
	transition: opacity 0.3s ease 0s;
	margin: 0 16px;
	&:hover {
		opacity: 1;
	}
`;

const FooterList = styled.ul`
	list-style: none;
`;

const FooterListItem = styled.li`
	opacity: 0.7;
	transition: opacity 0.3s ease 0s;
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
			<ContainerDiv>
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
				<Main>{children}</Main>
				<Footer>
					<FooterList
						css={css`
							display: flex;
							flex-direction: column;
							align-items: flex-start;
						`}
					>
						<FooterListItem>
							<Link to={'/about'}>ABOUT</Link>
						</FooterListItem>
						<FooterListItem>
							<Link to={'/#work'}>WORK</Link>
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
					<FooterList>
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
					</FooterList>
				</Footer>
			</ContainerDiv>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
