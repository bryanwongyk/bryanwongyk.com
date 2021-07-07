/** @jsx jsx */

import React, { FunctionComponent } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import { css, jsx } from '@emotion/react';
import { darkTheme } from '../styling/themes';

const About: FunctionComponent<{}> = ({}) => (
	<Layout>
		<SEO title="About" />
		<div
			css={css`
				display: flex;
				flex-direction: column;
				align-items: center;
			`}
		></div>
	</Layout>
);

export default About;
