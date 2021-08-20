/** @jsx jsx */

import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { css, jsx } from '@emotion/react';
import mediaQueries from '../../utils/breakpoints.utils';

interface SectionContainerProps {
	children: ReactNode;
}

const SectionContainer: FunctionComponent<SectionContainerProps> = ({
	children,
}): ReactElement => (
	<div
		css={css`
			max-width: 1024px;
			padding: 0 32px;
			margin: 0 auto;

			${mediaQueries[0]} {
				padding: 0 48px;
			}
		`}
	>
		{children}
	</div>
);

export default SectionContainer;
