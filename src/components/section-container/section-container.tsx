/** @jsx jsx */

import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { css, jsx } from '@emotion/react';

interface SectionContainerProps {
	children: ReactNode;
}

const SectionContainer: FunctionComponent<SectionContainerProps> = ({
	children,
}): ReactElement => (
	<section
		css={css`
			margin-bottom: 96px;
		`}
	>
		{children}
	</section>
);

export default SectionContainer;
