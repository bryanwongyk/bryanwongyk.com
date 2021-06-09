import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import styled from '@emotion/styled';

interface IconButtonProps {
	children: ReactNode;
	title: string;
	disabled?: boolean;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const StyledButton = styled.button`
	border: none;
	background-color: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const IconButton: FunctionComponent<IconButtonProps> = ({
	children,
	title,
	disabled,
	onClick,
}): ReactElement => {
	return (
		<StyledButton title={title} onClick={onClick} disabled={disabled}>
			{children}
		</StyledButton>
	);
};

export default IconButton;
