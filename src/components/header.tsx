/** @jsx jsx */

import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { FunctionComponent, useState } from 'react';
import { css, jsx, keyframes, useTheme } from '@emotion/react';
import Menu from '../components/menu';
import MenuHamburger from './menu-hamburger/menu-hamburger';

const Header: FunctionComponent<{}> = ({
	siteTitle,
	toggleMobileMenu,
	children,
}) => {
	const theme = useTheme();

	/*
  Typewriter effect reference: https://css-tricks.com/snippets/css/typewriter-effect/
  */
	const typing = keyframes`
    from { width: 0 }
    to { width: 280px } // have to use a unit that is not %, because % fills from the center outwards. 10.5em for desktop
  `;

	const blinkCaret = keyframes`
    from, to { border-color: transparent }
    50% { border-color: ${theme.colours.white} }
  `;

	/*
	Logic for mobile nav
	*/
	const [showMenuToggle, setShowMenuToggle] = useState(false);

	return (
		<header
			css={css`
				display: flex;
				align-items: center;
				margin-bottom: 0px;
				width: 100vw;
				padding-top: 50px;
				position: fixed;
			`}
		>
			<div
				css={css`
					padding: 1.45rem 2rem;
				`}
			>
				<h1
					css={css`
						// Align text with border-right
						display: flex;
						align-items: center;

						// Styling for typing animation
						width: 280px;
						overflow: hidden; /* Ensures the content is not revealed until the animation */
						border-right: 0.15em solid ${theme.colours.white}; /* The typwriter cursor */
						white-space: nowrap; /* Keeps the content on a single line */
						margin: 0 auto; /* Gives that scrolling effect as the typing happens */
						letter-spacing: 0.15em; /* Adjust as needed */
						animation: ${typing} 3s steps(30, end),
							${blinkCaret} 2.5s linear infinite;
					`}
				>
					<Link
						to="/"
						css={css`
							color: ${theme.colours.white};
							text-decoration: none;
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
