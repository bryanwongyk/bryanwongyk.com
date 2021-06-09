import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import styled from '@emotion/styled';
import { darkTheme } from '../../styling/themes';

interface PrimaryButtonProps {
	type: 'button' | 'submit' | 'reset';
	children: ReactNode;
	disabled?: boolean;
}

const StyledButton = styled.button`
	background-color: transparent;
	border: 1px solid ${darkTheme.colours.white};
	color: ${darkTheme.colours.white};
	border-radius: 25px;
	padding: 3px 12px 6px 12px;
	text-align: center;
	cursor: pointer;
	transition: all 0.3s ease;
`;

const PrimaryButton: FunctionComponent<PrimaryButtonProps> = ({
	type,
	children,
	disabled,
}): ReactElement => {
	return (
		<StyledButton type={type} disabled={disabled}>
			{children}
		</StyledButton>
	);
};

export default PrimaryButton;
