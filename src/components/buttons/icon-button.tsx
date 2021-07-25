/** @jsx jsx */

import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { css, jsx } from '@emotion/react';

interface IconButtonProps {
	children: ReactNode;
	title: string;
	disabled?: boolean;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const IconButton: FunctionComponent<IconButtonProps> = ({
	children,
	title,
	disabled,
	onClick,
}): ReactElement => {
	return (
		<button
			title={title}
			onClick={onClick}
			disabled={disabled}
			css={css`
				border: none;
				background-color: transparent;
				display: flex;
				justify-content: center;
				align-items: center;
			`}
		>
			{children}
		</button>
	);
};

export default IconButton;
