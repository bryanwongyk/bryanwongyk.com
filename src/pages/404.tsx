/** @jsx jsx */

import { FunctionComponent } from 'react';
import { css, jsx } from '@emotion/react';
import SEO from '../components/seo';

const NotFoundPage: FunctionComponent<{}> = () => (
	<>
		<SEO title="404: Not found" />
		<div
			css={css`
				text-align: center;
			`}
		>
			<h1>404: Not Found</h1>
			<p>This page doesn't exist. The sadness...</p>
		</div>
	</>
);

export default NotFoundPage;
