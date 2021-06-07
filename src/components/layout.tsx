/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { FunctionComponent, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { css } from '@emotion/react';

import Header from './header';
import '../content/assets/stylesheets/layout.css';
import MobileMenu from './mobile-menu/mobile-menu';

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
				siteTitle={data.site.siteMetadata?.title || `Title`}
				toggleMobileMenu={handleToggleMobileMenu}
				closeMobileMenu={handleCloseMobileMenu}
				mobileMenuShown={showMobileMenu}
			>
				<MobileMenu
					show={showMobileMenu}
					toggleMobileMenu={handleToggleMobileMenu}
				/>
			</Header>
			<div
				css={css`
					margin: 0 auto;
					max-width: 960;
					min-height: 100vh;
					display: flex;
					flex-direction: column;
				`}
			>
				<main
					css={css`
						flex: 1;
					`}
				>
					{children}
				</main>
				<footer
					css={css`
						margin: 2rem 0 1rem 0;
						display: flex;
						justify-content: center;
						align-items: center;
						flex-direction: column;
						opacity: 0.7;
						text-align: center;
						font-size: 0.9rem;
					`}
				>
					© Bryan Wong {new Date().getFullYear()}
					<div
						css={css`
							display: flex;
							margin: 10px 0;
						`}
					>
						<a
							href="https://www.linkedin.com/in/bryanwongyk/"
							target="_blank"
							title="LinkedIn"
							css={css`
								opacity: 0.5;
								transition: opacity 0.3s ease 0s;
								margin: 0 10px;
								&:hover {
									opacity: 1;
								}
							`}
						>
							LinkedIn
						</a>

						<a
							href="https://github.com/bryanwyk"
							target="_blank"
							title="GitHub"
							css={css`
								opacity: 0.5;
								transition: opacity 0.3s ease 0s;
								margin: 0 10px;
								&:hover {
									opacity: 1;
								}
							`}
						>
							GitHub
						</a>

						<a
							href="mailto:bryanwyk@gmail.com"
							title="Email"
							css={css`
								opacity: 0.5;
								transition: opacity 0.3s ease 0s;
								margin: 0 10px;
								&:hover {
									opacity: 1;
								}
							`}
						>
							Email
						</a>
					</div>
				</footer>
			</div>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
