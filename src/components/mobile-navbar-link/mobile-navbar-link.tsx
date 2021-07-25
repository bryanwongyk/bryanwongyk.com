/** @jsx jsx */

import { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { css, jsx } from '@emotion/react';
import { darkTheme } from '../../styling/themes';

interface MobileNavBarLinkProps {
	path: string;
	name: string;
	toggleMobileMenu: () => void;
}

const MobileNavBarLink: FunctionComponent<MobileNavBarLinkProps> = ({
	path,
	name,
	toggleMobileMenu,
}) => {
	return (
		<li
			css={css`
				position: relative;
				color: ${darkTheme.colours.white};
				opacity: 1;
				font-size: 2rem;
				transition: opacity 0.3s ease 0s;
				margin-bottom: 30px;
				&:hover {
					opacity: 0.7;
				}
			`}
		>
			<Link to={path} onClick={toggleMobileMenu}>
				{name}
			</Link>
		</li>
	);
};

export default MobileNavBarLink;
