/** @jsx jsx */

import { FunctionComponent, ReactElement } from 'react';
import { Link } from 'gatsby';
import { css, jsx } from '@emotion/react';
import { darkTheme } from '../../utils/themes';

interface PostPreviewBlogProps {
	title: string;
	description: string;
	thumbnailPath: string;
	date: string;
	readingTime: string;
	path: string;
}

const PostPreviewBlog: FunctionComponent<PostPreviewBlogProps> = ({
	title,
	description,
	thumbnailPath,
	date,
	readingTime,
	path,
}): ReactElement => {
	console.log(thumbnailPath);
	return (
		<article
			css={css`
				a {
					color: ${darkTheme.colours.black} !important;
					text-decoration: none !important;
				}

				&:hover {
					transform: translateY(-1px);

					a > div > h3 {
						color: ${darkTheme.colours.red};
					}
				}
			`}
		>
			<Link to={path}>
				<div>
					<img
						src={thumbnailPath}
						css={css`
							width: 100%;
							transition: transform 0.3s ease;
						`}
					/>
					<h3
						css={css`
							font-size: 1rem;
							transition: color 0.3s ease;
							margin: 0.5rem 0;
						`}
					>
						{title}
					</h3>
					<footer
						css={css`
							font-family: 'IBM Plex Mono';
							font-size: 0.833rem;
							opacity: 50%;
							padding: 0;
							margin: 0.5rem 0;
						`}
					>
						{date} ⬩ {readingTime}
					</footer>
					<p
						css={css`
							font-size: 0.833rem;
							transition: color 0.3s ease;
							margin: 0.5rem 0;
							opacity: 0.8;
						`}
					>
						{description}
					</p>
				</div>
			</Link>
		</article>
	);
};

export default PostPreviewBlog;
