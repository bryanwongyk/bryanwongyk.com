import React, { FunctionComponent, useState } from 'react';
import { css } from '@emotion/react';
import mediaQueries from '../../styling/breakpoints.utils';

// Credit to https://jonsuh.com/hamburgers/ 3DX Hamburger
// Using a normal .css file here as it is how the library is intended to be used
import './menu-hamburger.css';

interface MenuHamburgerProps {
	toggleMobileMenu: () => void;
	mobileMenuShown: boolean;
}

const MenuHamburger: FunctionComponent<MenuHamburgerProps> = ({
	toggleMobileMenu,
	mobileMenuShown,
}) => {
	const [isActive, setIsActive] = useState(false);
	const buttonBaseClassNames = 'hamburger hamburger--3dx';
	const isActiveClassName = 'is-active';

	const handleToggle = () => {
		setIsActive(!isActive);
		toggleMobileMenu();
	};

	return (
		<button
			onClick={handleToggle}
			className={
				mobileMenuShown
					? buttonBaseClassNames + ' ' + isActiveClassName
					: buttonBaseClassNames
			}
			css={css`
				${mediaQueries[0]} {
					display: none;
				}
			`}
			type="button"
		>
			<span
				className="hamburger-box"
				css={css`
					z-index: 100;
				`}
			>
				<span className="hamburger-inner"></span>
			</span>
		</button>
	);
};

export default MenuHamburger;
