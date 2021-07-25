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
				margin-bottom: 48px;
			`}
		>
			<Link to={path} onClick={toggleMobileMenu}>
				{name}
			</Link>
		</li>
	);
};

export default MobileNavBarLink;
