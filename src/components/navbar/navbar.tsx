/** @jsx jsx */

import { FunctionComponent } from 'react';
import { css, jsx } from '@emotion/react';
import NavBarLink from './navbar-link/navbar-link';
import mediaQueries from '../../utils/breakpoints.utils';

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
					font-family: 'Work Sans', sans-serif;
					font-weight: bold;
					font-size: 0.833rem;
				`}
			>
				<NavBarLink path="/blog" name="BLOG" />
			</ul>
		</span>
	);
};

export default NavBar;
