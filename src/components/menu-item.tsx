import React, { FunctionComponent, useState } from 'react';
import { Link } from 'gatsby';
import { css, SerializedStyles, ClassNames } from '@emotion/react';

const menuArrow: SerializedStyles = css`
	width: 0;
	height: 0;

	border-top: 10px solid transparent;
	border-bottom: 10px solid transparent;
	border-left: 10px solid white;

	position: absolute;
`;

interface MenuItemProps {
	path: string;
	name: string;
}

const MenuItem: FunctionComponent<MenuItemProps> = ({ path, name }) => {
	const [hovered, setHovered] = useState(false);
	return (
		// https://stackoverflow.com/questions/32125708/how-can-i-access-a-hover-state-in-reactjs
		<li
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			css={css`
				position: relative;
				margin: 0 0 0 50px;
			`}
		>
			<span
				css={
					hovered
						? menuArrow
						: css`
								display: none;
						  `
				}
			></span>
			<Link to={path}>{name}</Link>
		</li>
	);
};

export default MenuItem;
