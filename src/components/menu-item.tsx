import React, { FunctionComponent, useState } from 'react';
import { Link } from 'gatsby';
import { css, SerializedStyles, ClassNames } from '@emotion/react';

const menuArrow: SerializedStyles = css`
	width: 0;
	height: 0;

	border-top: 7px solid transparent;
	border-bottom: 7px solid transparent;
	border-left: 8px solid white;

	position: absolute;
	left: -20px;
	top: 5px;
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
				margin: 0 0 0 70px;
				opacity: 0.5;
				transition: opacity 0.3s ease 0s;
				&:hover {
					opacity: 1;
				}
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
