import React, { FunctionComponent, useState } from 'react';
import { css } from '@emotion/react';

// Credit to https://jonsuh.com/hamburgers/ 3DX Hamburger
// Using a normal .css file here as it is how the library is intended to be used
import './menu-hamburger.css';

const MenuHamburger: FunctionComponent<{}> = ({ toggleMobileMenu }) => {
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
				isActive
					? buttonBaseClassNames + ' ' + isActiveClassName
					: buttonBaseClassNames
			}
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
