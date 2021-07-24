/** @jsx jsx */

import React, { FunctionComponent } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import { css, jsx } from '@emotion/react';
import { darkTheme } from '../styling/themes';
import ContactForm from '../components/contact-form/contact-form';

const Contact: FunctionComponent<{}> = ({}) => (
	<Layout>
		<SEO title="Contact" />
		<header
			css={css`
				display: flex;
				justify-content: center;
			`}
		>
			<h1>CONTACT</h1>
		</header>
		<div
			css={css`
				margin: 32px 0;
			`}
		>
			<div
				css={css`
					display: flex;
					flex-direction: column;
					align-items: center;
				`}
			>
				<a
					href="mailto:bryanwyk@gmail.com"
					title="Email"
					css={css`
						&:hover {
							text-decoration: underline;
							text-decoration-style: solid;
						}
					`}
				>
					bryanwyk@gmail.com
				</a>
				<p
					css={css`
						margin: 24px 0;
						opacity: 50%;
					`}
				>
					OR
				</p>
			</div>
			<div
				css={css`
					display: flex;
					flex-direction: column;
					align-items: center;
				`}
			>
				<ContactForm />
			</div>
		</div>
	</Layout>
);

export default Contact;
