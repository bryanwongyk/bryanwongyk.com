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
				z-index: 500;
				background-color: ${darkTheme.colours.black};
				width: 100vw;
				height: 100%;
				box-sizing: border-box;
				transition: all 0.3s ease-out;

				transform: ${show
					? `
						translateX(0)
						`
					: `
						translateX(100vw)
						`};
			`}
		>
			<nav>{children}</nav>
		</div>
	);
};

export default MobileMenu;
