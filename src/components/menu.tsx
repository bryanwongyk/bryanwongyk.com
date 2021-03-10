import React, { FunctionComponent } from 'react';
import { css, useTheme } from '@emotion/react';
import MenuItem from './menu-item';
import mediaQueries from '../styling/breakpoints.utils';

const Menu: FunctionComponent<{}> = () => {
	return (
		<div
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
				<MenuItem path="/" name="Home" />
				<MenuItem path="/blog" name="Blog" />
				<MenuItem path="/portfolio" name="Portfolio" />
			</ul>
		</div>
	);
};

export default Menu;
