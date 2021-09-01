/** @jsx jsx */

import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { css, jsx } from '@emotion/react';
import mediaQueries from '../../utils/breakpoints.utils';

interface PageContainerProps {
	children: ReactNode;
}

const PageContainer: FunctionComponent<PageContainerProps> = ({
	children,
}): ReactElement => (
	<div
		css={css`
			max-width: 1024px;
			padding: 0 32px;
			margin: 0 auto;
			min-height: 70vh;

			${mediaQueries[0]} {
				padding: 0 48px;
			}
		`}
	>
		{children}
	</div>
);

export default PageContainer;
