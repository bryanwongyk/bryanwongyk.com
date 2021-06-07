/** @jsx jsx */

import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { jsx } from '@emotion/react';
import { darkTheme } from '../styling/themes';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

import profile from '../content/assets/images/profile.png';

const IndexPage: FunctionComponent<{}> = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<p>
				hi
			</p>
		</Layout>
	);
};

export default IndexPage;
