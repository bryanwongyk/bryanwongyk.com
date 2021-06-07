import React, { FunctionComponent } from 'react';
import { css } from '@emotion/react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const NotFoundPage: FunctionComponent<{}> = () => (
	<Layout>
		<SEO title="404: Not found" />
		<div
			css={css`
				text-align: center;
			`}
		>
			<h1>404: Not Found</h1>
			<p>This page doesn't exist. The sadness...</p>
		</div>
	</Layout>
);

export default NotFoundPage;
