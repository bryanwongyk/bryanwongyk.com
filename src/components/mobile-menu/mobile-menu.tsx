import React, { FunctionComponent, useState } from 'react';
import { css, useTheme } from '@emotion/react';

interface MobileMenuProps {
	show: boolean;
	closeMobileMenu: () => void;
	children: React.ReactNode;
}

const MobileMenu: FunctionComponent<MobileMenuProps> = ({ show, children }) => {
	const theme = useTheme();
	return (
		<div
			css={css`
				position: fixed;
				z-index: 500;
				background-color: ${theme.colours.gold};
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
