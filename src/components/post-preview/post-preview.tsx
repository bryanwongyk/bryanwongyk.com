/** @jsx jsx */

import { FunctionComponent, ReactElement } from 'react';
import { Link } from 'gatsby';
import { css, jsx } from '@emotion/react';
import { darkTheme } from '../../utils/themes';

interface PostPreviewProps {
	title: string;
	description: string;
	date: string;
	readingTime: string;
	path: string;
}

const PostPreview: FunctionComponent<PostPreviewProps> = ({
	title,
	description,
	date,
	readingTime,
	path,
}): ReactElement => {
	return (
		<article
			css={css`
				a {
					color: ${darkTheme.colours.white} !important;
					text-decoration: none !important;
				}

				&:hover {
					transform: translateY(-1px);

					a > div > h4 {
						color: ${darkTheme.colours.red};
					}
				}
			`}
		>
			<Link to={path}>
				<div>
					<h4
						css={css`
							font-size: 1.2rem;
							transition: color 0.3s ease;
							margin: 0;
						`}
					>
						{title}
					</h4>
					<footer
						css={css`
							font-family: 'IBM Plex Mono';
							font-size: 0.9rem;
							opacity: 50%;
							padding: 0;
							margin: 6px 0;
						`}
					>
						{date} ⬩ {readingTime}
					</footer>
					<p
						css={css`
							font-size: 0.9rem;
							transition: color 0.3s ease;
							margin-bottom: 8px;
						`}
					>
						{description}
					</p>
				</div>
			</Link>
		</article>
	);
};

export default PostPreview;
