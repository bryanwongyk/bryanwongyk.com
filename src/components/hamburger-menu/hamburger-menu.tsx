/** @jsx jsx */

import { FunctionComponent, useState } from 'react';
import { css, jsx } from '@emotion/react';
import mediaQueries from '../../utils/breakpoints.utils';

// Credit to https://jonsuh.com/hamburgers/ 3DX Hamburger
// Using a normal .css file here as it is how the library is intended to be used
import './hamburger-menu.css';

interface HamburgerMenuProps {
	toggleMobileMenu: () => void;
	mobileMenuShown: boolean;
}

const HamburgerMenu: FunctionComponent<HamburgerMenuProps> = ({
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
				z-index: 100;
				${mediaQueries[0]} {
					display: none;
				}
			`}
			type="button"
		>
			<span className="hamburger-box">
				<span className="hamburger-inner"></span>
			</span>
		</button>
	);
};

export default HamburgerMenu;
