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
import MobileNavBar from '../mobile-navbar/mobile-navbar';

import { darkTheme } from '../../styling/themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

import mediaQueries from '../../styling/breakpoints.utils';

const ContainerDiv = styled.div`
	min-height: 100vh;
	max-width: 1024px;
	padding: 0 48px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
`;
const Main = styled.main`
	flex: 1;
`;

const Footer = styled.footer`
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
	transition: opacity 0.3s ease 0s;
	margin: 0 16px;
	&:hover {
		opacity: 1;
	}
`;

const FooterList = styled.ul`
	list-style: none;
	margin-left: 0;
`;

const FooterListItem = styled.li`
	opacity: 0.7;
	transition: opacity 0.3s ease 0s;
	margin-right: 0;
	font-family: 'Poppins', sans-serif;
	font-weight: normal;
	font-size: 0.75rem;
	letter-spacing: 1px;

	&:hover {
		opacity: 1;
	}
	${mediaQueries[0]} {
		margin-right: 12px;
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
					<div
						css={css`
							${mediaQueries[0]} {
								display: flex;
								flex-direction: column;
								align-items: start;
							}
						`}
					>
						<FooterList
							css={css`
								display: flex;
								flex-direction: column;
								align-items: center;
								margin-bottom: 0;
								${mediaQueries[0]} {
									align-items: flex-start;
									flex-direction: row;
								}
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
					</div>

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
