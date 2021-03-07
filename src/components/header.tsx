/** @jsx jsx */

import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { FunctionComponent } from 'react';
import { css, jsx, keyframes, useTheme } from '@emotion/react';
import Menu from '../components/menu';

const Header: FunctionComponent<{}> = ({ siteTitle, children }) => {
	const theme = useTheme();

	/*
  Typewriter effect reference: https://css-tricks.com/snippets/css/typewriter-effect/
  */
	const typing = keyframes`
    from { width: 0 }
    to { width: 10.5em } // have to use a unit that is not %, because % fills from the center outwards.
  `;

	const blinkCaret = keyframes`
    from, to { border-color: transparent }
    50% { border-color: ${theme.colours.white} }
  `;

	return (
		<header
			css={css`
				display: flex;
				align-items: center;
				margin-bottom: 0px;
				width: 100%;
				padding-top: 50px;
			`}
		>
			<div
				css={css`
					padding: 1.45rem 1.0875rem;
				`}
			>
				<h1
					css={css`
						width: 10.5em;
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
			<Menu />
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
