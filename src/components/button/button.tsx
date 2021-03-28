import styled from '@emotion/styled';
import { darkTheme } from '../../styling/themes';

const Button = styled.button`
	background-color: transparent;
	border: 3px solid ${darkTheme.colours.gold};
	color: ${darkTheme.colours.white};
	padding: 10px 20px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 1rem;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		background-color: ${darkTheme.colours.gold};
		color: ${darkTheme.colours.black};
	}
`;

export default Button;