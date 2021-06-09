/** @jsx jsx */

import React, { FunctionComponent, ReactElement } from 'react';
import { css, jsx } from '@emotion/react';

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
			`}
		>
			{children}
		</div>
	);
};

export default Container;
