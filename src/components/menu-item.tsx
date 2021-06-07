import React, { FunctionComponent, useState } from 'react';
import { Link } from 'gatsby';
import { css, SerializedStyles, ClassNames } from '@emotion/react';
import { darkTheme } from '../styling/themes';

interface MenuItemProps {
	path: string;
	name: string;
}

const MenuItem: FunctionComponent<MenuItemProps> = ({ path, name }) => {
	return (
		<li
			css={css`
				position: relative;
				margin: 0 0 0 70px;
				opacity: 0.5;
				transition: opacity 0.3s ease 0s;
				color: ${darkTheme.colours.white};
				&:hover {
					opacity: 1;
				}
			`}
		>
			<Link to={path}>{name}</Link>
		</li>
	);
};

export default MenuItem;
