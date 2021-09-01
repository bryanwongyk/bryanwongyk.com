/** @jsx jsx */

import React, { FunctionComponent } from 'react';
import SEO from '../components/seo';
import { css, jsx } from '@emotion/react';
import { motion } from 'framer-motion';

import PageContainer from '../components/page-container/page-container';
import ContactForm from '../components/contact-form/contact-form';
import BlogPostContainer from '../components/blog-post-container/blog-post-container';
import GlobalBlogStyle from '../components/global-blog-style/GlobalBlogStyle';
import ContactImg from '../content/assets/images/contact.png';

import { darkTheme } from '../utils/themes';

const Contact: FunctionComponent<{}> = ({}) => (
	<>
		<SEO title="Contact" />
		<GlobalBlogStyle />
		<div
			css={css`
				background-color: #fefefe;
				padding: 3rem 0 4rem 0;
			`}
		>
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
							margin-top: 0;
						`}
					>
						CONTACT
					</h1>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.8,
						delay: 0.7,
					}}
					css={css`
						margin: 32px 0;
					`}
				>
					<article>
						<p>
							The best way to get in touch with me is by e-mail at{' '}
							<a href="mailto:bryanwyk@gmail.com" title="Email">
								bryanwyk@gmail.com
							</a>{' '}
							or via my social media profiles at the bottom of the
							page.
						</p>
					</article>
				</motion.div>
			</PageContainer>
		</div>
	</>
);

export default Contact;
