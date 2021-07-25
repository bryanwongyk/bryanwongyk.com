/** @jsx jsx */

import { FunctionComponent } from 'react';
import { css, jsx } from '@emotion/react';
import { darkTheme } from '../../utils/themes';
import MobileMenuLink from './mobile-menu-link/mobile-menu-link';
import mediaQueries from '../../utils/breakpoints.utils';

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

							font-family: 'Poppins', sans-serif;
							font-weight: bold;
							font-size: 0.8rem;
							letter-spacing: 1px;
						`}
					>
						<MobileMenuLink
							path="/"
							name="HOME"
							toggleMobileMenu={toggleMobileMenu}
						/>
						<MobileMenuLink
							path="/about"
							name="ABOUT"
							toggleMobileMenu={toggleMobileMenu}
						/>
						<MobileMenuLink
							path="/blog"
							name="BLOG"
							toggleMobileMenu={toggleMobileMenu}
						/>
						<MobileMenuLink
							path="/contact"
							name="CONTACT"
							toggleMobileMenu={toggleMobileMenu}
						/>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default MobileMenu;
