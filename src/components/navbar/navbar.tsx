/** @jsx jsx */

import { FunctionComponent } from 'react';
import { css, jsx } from '@emotion/react';
import NavBarLink from '../navbar-link/navbar-link';
import mediaQueries from '../../styling/breakpoints.utils';

const NavBar: FunctionComponent<{}> = () => {
	return (
		<span
			css={css`
				display: none;
				${mediaQueries[0]} {
					display: inline-block;
				}
			`}
		>
			<ul
				css={css`
					list-style: none;
					display: flex;
					flex-direction: row;
					margin: 0;
				`}
			>
				<NavBarLink path="/about" name="ABOUT" />
				<NavBarLink path="/#work" name="WORK" />
				<NavBarLink path="/blog" name="BLOG" />
				<NavBarLink path="/contact" name="CONTACT" />
			</ul>
		</span>
	);
};

export default NavBar;
