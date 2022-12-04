/** @jsx jsx */

import { FunctionComponent, ReactElement } from 'react';
import { Link } from 'gatsby';
import { css, jsx } from '@emotion/react';
import { darkTheme } from '../../utils/themes';
import mediaQueries from '../../utils/breakpoints.utils';

interface PostPreviewProps {
	title: string;
	description: string;
	thumbnailPath: string;
	date: string;
	readingTime: string;
	path: string;
}

const PostPreview: FunctionComponent<PostPreviewProps> = ({
	title,
	description,
	thumbnailPath,
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

					h4 {
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
							margin-bottom: 0.4rem;

							${mediaQueries[0]} {
								height: 228px;
								object-fit: cover;
							}
						`}
					/>
					<div
						css={css`
							margin-left: 6px;
						`}
					>
						<h4
							css={css`
								transition: color 0.3s ease;
								margin: 0.5rem 0;
							`}
						>
							{title}
						</h4>
						<footer
							css={css`
								font-family: 'IBM Plex Mono';
								font-size: 0.694rem;
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
								margin-bottom: 0.5rem;
							`}
						>
							{description}
						</p>
					</div>
				</div>
			</Link>
		</article>
	);
};

export default PostPreview;
