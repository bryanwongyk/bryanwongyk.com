/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { FunctionComponent, useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

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

	if (showMobileMenu) {
		document.body.style.position = 'fixed';
	} else {
		document.body.style.position = 'static';
	}

	return (
		<>
			<Header
				siteTitle={data.site.siteMetadata?.title || `Title`}
				toggleMobileMenu={handleToggleMobileMenu}
				mobileMenuShown={showMobileMenu}
			>
				<MobileMenu show={showMobileMenu} />
			</Header>
			<div
				style={{
					margin: `0 auto`,
					maxWidth: 960,
					padding: `0 1.0875rem 1.45rem`,
				}}
			>
				<main>{children}</main>
				<footer
					style={{
						marginTop: `2rem`,
					}}
				>
					{/* © {new Date().getFullYear()} */}
				</footer>
			</div>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
