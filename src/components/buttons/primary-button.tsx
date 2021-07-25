/** @jsx jsx */

import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { css, jsx } from '@emotion/react';

import { darkTheme } from '../../utils/themes';

interface PrimaryButtonProps {
	type: 'button' | 'submit' | 'reset';
	children: ReactNode;
	disabled?: boolean;
}

const PrimaryButton: FunctionComponent<PrimaryButtonProps> = ({
	type,
	children,
	disabled,
}): ReactElement => {
	return (
		<button
			type={type}
			disabled={disabled}
			css={css`
				background-color: transparent;
				border: 1px solid ${darkTheme.colours.white};
				color: ${darkTheme.colours.white};
				border-radius: 25px;
				padding: 3px 12px 6px 12px;
				text-align: center;
				cursor: pointer;
				transition: all 0.3s ease;

				&:hover {
					color: ${darkTheme.colours.red};
					border: 1px solid ${darkTheme.colours.red};
				}
			`}
		>
			{children}
		</button>
	);
};

export default PrimaryButton;
