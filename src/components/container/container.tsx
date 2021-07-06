/** @jsx jsx */

import React, { FunctionComponent, ReactElement } from 'react';
import { css, jsx } from '@emotion/react';
import mediaQueries from '../../styling/breakpoints.utils';

interface ContainerProps {
	children: React.ReactNode;
}

const Container: FunctionComponent<ContainerProps> = ({
	children,
}): ReactElement => {
	return (
		<div
			css={css`
				margin: 0 auto;
				width: 85%;

				${mediaQueries[0]} {
					width: 75vw;
				}
			`}
		>
			{children}
		</div>
	);
};

export default Container;
