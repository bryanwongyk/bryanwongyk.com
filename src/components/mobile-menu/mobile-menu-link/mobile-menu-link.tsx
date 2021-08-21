/** @jsx jsx */

import { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { css, jsx } from '@emotion/react';
import { darkTheme } from '../../../utils/themes';

interface MobileMenuLinkProps {
	path: string;
	name: string;
	toggleMobileMenu: () => void;
}

const MobileMenuLink: FunctionComponent<MobileMenuLinkProps> = ({
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
				margin-bottom: 3rem;
			`}
		>
			<Link to={path} onClick={toggleMobileMenu}>
				{name}
			</Link>
		</li>
	);
};

export default MobileMenuLink;
