/** @jsx jsx */

import React, { FunctionComponent, ReactElement } from 'react';
import { css, jsx } from '@emotion/react';
import mediaQueries from '../../styling/breakpoints.utils';

interface ContainerProps {
	children: React.ReactNode;
	width: number;
}

const Container: FunctionComponent<ContainerProps> = ({
	children,
	width,
}): ReactElement => {
	return (
		<div
			css={css`
				margin: 0 auto;
				width: ${width}%;
			`}
		>
			{children}
		</div>
	);
};

export default Container;
