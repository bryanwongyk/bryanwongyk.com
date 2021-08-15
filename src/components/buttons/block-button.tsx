/** @jsx jsx */

import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { css, jsx } from '@emotion/react';

import { darkTheme } from '../../utils/themes';
import mediaQueries from '../../utils/breakpoints.utils';

interface BlockButtonProps {
	type: 'button' | 'submit' | 'reset';
	children: ReactNode;
	disabled?: boolean;
}

const BlockButton: FunctionComponent<BlockButtonProps> = ({
	type,
	children,
	disabled,
}): ReactElement => {
	return (
		<button
			type={type}
			disabled={disabled}
			css={css`
				background-color: ${darkTheme.colours.red};
				border: none;
				color: ${darkTheme.colours.black};
				padding: 1rem;
				text-align: center;
				cursor: pointer;
				transition: all 0.3s ease;

				width: 100%;
				opacity: 1;

				&:hover {
					opacity: 0.9;
				}

				${mediaQueries[0]} {
					width: auto;
				}
			`}
		>
			{children}
		</button>
	);
};

export default BlockButton;
