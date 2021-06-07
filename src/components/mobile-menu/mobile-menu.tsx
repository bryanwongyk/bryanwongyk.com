import React, { FunctionComponent, useState } from 'react';
import { css, useTheme } from '@emotion/react';
import { darkTheme } from '../../styling/themes';
import MobileMenuItem from './mobile-menu-item';
import mediaQueries from '../../styling/breakpoints.utils';

interface MobileMenuProps {
	show: boolean;
	toggleMobileMenu: () => void;
	children?: React.ReactNode;
}

const MobileMenu: FunctionComponent<MobileMenuProps> = ({
	show,
	toggleMobileMenu,
	children,
}) => {
	return (
		<div
			css={css`
				position: fixed;
				z-index: -30;
				display: flex;

				${mediaQueries[0]} {
					display: none;
				}
			`}
		>
			<div
				css={css`
					position: fixed;
					background-color: ${darkTheme.colours.gold};
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
						<MobileMenuItem
							path="/"
							name="Home"
							toggleMobileMenu={toggleMobileMenu}
						/>
						<MobileMenuItem
							path="/blog"
							name="Blog"
							toggleMobileMenu={toggleMobileMenu}
						/>
						<MobileMenuItem
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

export default MobileMenu;
