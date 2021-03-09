import React, { FunctionComponent, useState } from 'react';
import { Link } from 'gatsby';
import { css, SerializedStyles, ClassNames } from '@emotion/react';
import { darkTheme } from '../../styling/themes';

interface MobileMenuItemProps {
	path: string;
	name: string;
	toggleMobileMenu: () => void;
	currentPath: string;
}

const MobileMenuItem: FunctionComponent<MobileMenuItemProps> = ({
	path,
	name,
	toggleMobileMenu,
	currentPath,
}) => {
	// Note that Gatsby does not reload the pages once they are loaded. If you are on the Home page and click on a Link to home, it will not refresh.
	// If the user is already on the Home page, just close the mobile menu.
	const handleClickLink = () => {
		if (currentPath === path) {
			toggleMobileMenu();
		}
	};
	return (
		<li
			css={css`
				position: relative;
				margin: 0 0 0 70px;
				color: ${darkTheme.colours.black};
				opacity: 1;
				font-size: 2rem;
				transition: opacity 0.3s ease 0s;
				&:hover {
					opacity: 0.7;
				}
			`}
		>
			<Link to={path} onClick={handleClickLink}>
				{name}
			</Link>
		</li>
	);
};

export default MobileMenuItem;
