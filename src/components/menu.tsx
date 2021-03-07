import React, { FunctionComponent } from 'react';
import { css, useTheme } from '@emotion/react';
import MenuItem from './menu-item';

const Menu: FunctionComponent<{}> = () => {
	const theme = useTheme();
	return (
		<div
			css={css`
				position: absolute;
				left: 75vw;
			`}
		>
			<ul
				css={css`
					list-style: none;
					display: flex;
					flex-direction: row;
					color: ${theme.colours.white};
					margin: 0;
				`}
			>
				<MenuItem path="/" name="Home" />
				<MenuItem path="/blog" name="Blog" />
			</ul>
		</div>
	);
};

export default Menu;
