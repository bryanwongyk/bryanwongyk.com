/** @jsx jsx */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { FunctionComponent, useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { css, jsx } from '@emotion/react';

import Header from './header/header';
import Footer from './footer/footer';
import MobileMenu from '../mobile-menu/mobile-menu';

import mediaQueries from '../../utils/breakpoints.utils';

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
			<div
				css={css`
					min-height: 100vh;
					display: flex;
					flex-direction: column;
				`}
			>
				<div
					css={css`
						width: 100vw;
						max-width: 1024px;
						padding: 0 32px;
						margin: 0 auto;
						${mediaQueries[0]} {
							padding: 0 48px;
						}
					`}
				>
					<Header
						siteTitle={data.site.siteMetadata?.title}
						toggleMobileMenu={handleToggleMobileMenu}
						closeMobileMenu={handleCloseMobileMenu}
						mobileMenuShown={showMobileMenu}
					>
						<MobileMenu
							show={showMobileMenu}
							toggleMobileMenu={handleToggleMobileMenu}
						/>
					</Header>
				</div>
				<main>{children}</main>
				<Footer />
			</div>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
