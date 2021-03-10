import React, { FunctionComponent, useState } from 'react';
import { Link } from 'gatsby';
import { css, SerializedStyles, ClassNames } from '@emotion/react';
import { darkTheme } from '../../styling/themes';
import { useLocation } from '@reach/router';

interface MobileMenuItemProps {
	path: string;
	name: string;
	toggleMobileMenu: () => void;
}

const MobileMenuItem: FunctionComponent<MobileMenuItemProps> = ({
	path,
	name,
	toggleMobileMenu,
}) => {
	const location = useLocation();
	// Note that Gatsby does not reload the pages once they are loaded. If you are on the Home page and click on a Link to home, it will not refresh.
	// If the user is already on the Home page, just close the mobile menu.
	const handleClickLink = () => {
		if (location.pathname === path) {
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
