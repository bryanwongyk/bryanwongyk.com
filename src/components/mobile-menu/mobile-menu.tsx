import React, { FunctionComponent, useState } from 'react';
import { css, useTheme } from '@emotion/react';
import { darkTheme } from '../../styling/themes';

interface MobileMenuProps {
	show: boolean;
	children?: React.ReactNode;
}

const MobileMenu: FunctionComponent<MobileMenuProps> = ({ show, children }) => {
	return (
		<div
			css={css`
				position: fixed;
				z-index: -30;
				display: flex;
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
			></div>
			<nav>{children}</nav>
		</div>
	);
};

export default MobileMenu;
