/** @jsx jsx */

import { FunctionComponent, ReactElement } from 'react';
import { Link } from 'gatsby';
import { css, jsx } from '@emotion/react';
import { darkTheme } from '../../styling/themes';

interface PostPreviewProps {
	thumbnailPath: string;
	title: string;
	description: string;
	date: string;
	readingTime: string;
	path: string;
}

const PostPreview: FunctionComponent<PostPreviewProps> = ({
	thumbnailPath,
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
					a > div > img {
						transform: translateY(-1px);
					}

					a > div > h4 {
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
							height: 190px;
							width: 100%;
							object-fit: cover;

							transition: transform 0.3s ease;
						`}
					/>
					<h4
						css={css`
							font-size: 1.2rem;
							transition: color 0.3s ease;
							margin: 8px 0;
						`}
					>
						{title}
					</h4>
					<p
						css={css`
							opacity: 65%;
							font-size: 0.9rem;
							transition: color 0.3s ease;
							margin-bottom: 8px;
						`}
					>
						{description}
					</p>
					<footer
						css={css`
							font-size: 0.9rem;
							opacity: 40%;
							padding: 0;
						`}
					>
						{date} ⬩ {readingTime}
					</footer>
				</div>
			</Link>
		</article>
	);
};

export default PostPreview;
