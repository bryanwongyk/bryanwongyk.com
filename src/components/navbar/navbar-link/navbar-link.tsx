/** @jsx jsx */

import { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { css, jsx } from '@emotion/react';
import { darkTheme } from '../../../styling/themes';

interface NavBarLinkProps {
	path: string;
	name: string;
}

const NavBarLink: FunctionComponent<NavBarLinkProps> = ({ path, name }) => {
	return (
		<li
			css={css`
				position: relative;
				margin: 0 0 0 50px;
				opacity: 0.5;
				transition: all 0.3s ease 0s;
				color: ${darkTheme.colours.white};
				&:hover {
					opacity: 1;
					color: ${darkTheme.colours.red};
				}
			`}
		>
			<Link to={path}>{name}</Link>
		</li>
	);
};

export default NavBarLink;
