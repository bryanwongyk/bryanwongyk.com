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
				background-color: ${darkTheme.colours.gold};
				width: 100vw;
				height: 100vh;
				box-sizing: border-box;
				transition: all 0.3s ease-out;
				top: 0;
				left: 0;

				transform: ${show
					? `
						translateY(0vh)
						`
					: `
						translateY(-100vh)
						`};
			`}
		>
			<nav>{children}</nav>
		</div>
	);
};

export default MobileMenu;
