/** @jsx jsx */

import { FunctionComponent } from 'react';
import { css, jsx, Global } from '@emotion/react';

const GlobalBlogStyle: FunctionComponent<{}> = props => {
	return (
		<Global
			styles={css`
				body {
					color: #424242;
				}

				h1 {
					color: #121212;
				}

				h2,
				h3,
				h4,
				h6 {
					color: #121212;
				}

				h5 {
					color: #a8a8a8;
				}

				blockquote {
					color: #121212;
					border-left: 0.25rem solid #121212;
				}

				article a {
					color: #f05454;
					transition: all 0.3s ease;

					&:hover {
						color: #f2f2f2;
						background-color: #f05454;
					}
				}
			`}
		/>
	);
};

export default GlobalBlogStyle;
