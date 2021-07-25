/** @jsx jsx */

import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { css, jsx } from '@emotion/react';

interface PageContainerProps {
	children: ReactNode;
}

const PageContainer: FunctionComponent<PageContainerProps> = ({
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

export default PageContainer;
