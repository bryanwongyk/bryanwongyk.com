/** @jsx jsx */

import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { FunctionComponent, useState } from 'react';
import { css, jsx, useTheme } from '@emotion/react';
import Menu from '../components/menu';
import MenuHamburger from './menu-hamburger/menu-hamburger';
import { darkTheme } from '../styling/themes';

interface HeaderProps {
	siteTitle: string;
	toggleMobileMenu: () => void;
	mobileMenuShown: boolean;
	children?: React.ReactNode;
}

const Header: FunctionComponent<HeaderProps> = ({
	siteTitle,
	toggleMobileMenu,
	mobileMenuShown,
	children,
}) => {
	/*
	Logic for mobile nav
	*/
	const [showMenuToggle, setShowMenuToggle] = useState(false);

	return (
		<header
			css={css`
				display: flex;
				align-items: center;
				justify-content: space-around;
				margin-bottom: 0px;
				width: 100vw;
				padding-top: 10px;
				position: fixed;
				z-index: 1000;
			`}
		>
			<div
				css={css`
					padding: 1.45rem 0;
				`}
			>
				<h1>
					<Link
						to="/"
						css={css`
							color: ${mobileMenuShown
								? `${darkTheme.colours.black}`
								: `${darkTheme.colours.white}`};
							text-decoration: none;
							/* writing-mode: vertical-lr;
							text-orientation: upright; */
							transition: color 1s ease;
							transition: opacity 0.2s ease;
							&:hover {
								opacity: 0.7;
							}
						`}
					>
						{siteTitle}
					</Link>
				</h1>
			</div>
			{showMenuToggle ? (
				<Menu />
			) : (
				<MenuHamburger toggleMobileMenu={toggleMobileMenu} />
			)}
			{children}
		</header>
	);
};

Header.propTypes = {
	siteTitle: PropTypes.string,
	children: PropTypes.node,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
