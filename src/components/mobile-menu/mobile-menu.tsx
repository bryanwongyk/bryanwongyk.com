import React, { FunctionComponent, useState } from 'react';
import { css, useTheme } from '@emotion/react';
import { darkTheme } from '../../styling/themes';
import MobileMenuItem from './mobile-menu-item';
import mediaQueries from '../../styling/breakpoints.utils';

interface MobileMenuProps {
	show: boolean;
	toggleMobileMenu: () => void;
	currentPath: string;
	children?: React.ReactNode;
}

const MobileMenu: FunctionComponent<MobileMenuProps> = ({
	show,
	toggleMobileMenu,
	currentPath,
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
				<nav>
					<ul
						css={css`
							position: fixed;
							top: 40%;
							left: 25%;
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
							display: flex;
							flex-direction: column;
							align-items: center;
							justify-content: space-around;
							height: 125px;
						`}
					>
						<MobileMenuItem
							path="/"
							name="Home"
							toggleMobileMenu={toggleMobileMenu}
							currentPath={currentPath}
						/>
						<MobileMenuItem
							path="/blog"
							name="Blog"
							toggleMobileMenu={toggleMobileMenu}
							currentPath={currentPath}
						/>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default MobileMenu;
