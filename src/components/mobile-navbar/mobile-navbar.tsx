/** @jsx jsx */

import React, { FunctionComponent } from 'react';
import { css, jsx } from '@emotion/react';
import { darkTheme } from '../../styling/themes';
import MobileNavBarLink from '../mobile-navbar-link/mobile-navbar-link';
import mediaQueries from '../../styling/breakpoints.utils';

interface MobileNavBarProps {
	show: boolean;
	toggleMobileMenu: () => void;
	children?: React.ReactNode;
}

const MobileNavBar: FunctionComponent<MobileNavBarProps> = ({
	show,
	toggleMobileMenu,
	children,
}) => {
	return (
		<div
			css={css`
				position: fixed;
				z-index: 10;
				display: flex;

				${mediaQueries[0]} {
					display: none;
				}
			`}
		>
			<div
				css={css`
					position: fixed;
					background-color: ${darkTheme.colours.grey};
					width: 100vw;
					height: 100vh;
					box-sizing: border-box;
					transition: transform 0.5s ease-out;
					top: 0;
					left: 0;
					/* Setting initial transform at -200vh prevents bug where resizing vertically flickers the mobile menu. */
					transform: ${show
						? `
						translateY(0vh)
						`
						: `
						translateY(-200vh)
						`};
				`}
			>
				<nav
					css={css`
						height: 100vh;
						width: 100vw;
						display: flex;
						align-items: center;
						justify-content: center;
					`}
				>
					<ul
						css={css`
							list-style: none;
							/* Have to use visibility instead of display or opacity animation will not work */
							visibility: ${show
								? `
							visible
						`
								: `
							hidden
						`};
							opacity: ${show
								? `
							1
						`
								: `
							0
						`};
							transition: all 0.2s 0.5s linear;
							text-align: center;
							margin: 0;
						`}
					>
						<MobileNavBarLink
							path="/"
							name="Home"
							toggleMobileMenu={toggleMobileMenu}
						/>
						<MobileNavBarLink
							path="/blog"
							name="Blog"
							toggleMobileMenu={toggleMobileMenu}
						/>
						<MobileNavBarLink
							path="/portfolio"
							name="Portfolio"
							toggleMobileMenu={toggleMobileMenu}
						/>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default MobileNavBar;
