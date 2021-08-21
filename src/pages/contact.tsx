/** @jsx jsx */

import React, { FunctionComponent } from 'react';
import SEO from '../components/seo';
import { css, jsx } from '@emotion/react';
import { motion } from 'framer-motion';

import PageContainer from '../components/page-container/page-container';
import ContactForm from '../components/contact-form/contact-form';

import { darkTheme } from '../utils/themes';

const Contact: FunctionComponent<{}> = ({}) => (
	<>
		<SEO title="Contact" />
		<PageContainer>
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{
					duration: 0.5,
				}}
			>
				<h1
					css={css`
						font-size: 1rem;
					`}
				>
					CONTACT
				</h1>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{
					duration: 0.5,
					delay: 0.5,
				}}
				css={css`
					margin: 32px 0;
				`}
			>
				<p>
					Contact me on{' '}
					<a
						href="mailto:bryanwyk@gmail.com"
						title="Email"
						css={css`
							border-bottom: 1px solid ${darkTheme.colours.white};
							transition: all 0.2s ease;
							padding-bottom: 1px;

							&:hover {
								border-bottom: 1px solid
									${darkTheme.colours.red};
								color: ${darkTheme.colours.red};
							}
						`}
					>
						bryanwyk@gmail.com
					</a>{' '}
					or use the form below.
				</p>
				<div
					css={css`
						display: flex;
						flex-direction: column;
						align-items: center;
					`}
				>
					<ContactForm />
				</div>
			</motion.div>
		</PageContainer>
	</>
);

export default Contact;
