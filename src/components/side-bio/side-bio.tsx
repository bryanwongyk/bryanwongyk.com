/** @jsx jsx */

import { FunctionComponent, ReactElement } from 'react';
import { css, jsx } from '@emotion/react';
import profile from '../../content/assets/images/profile-2-circular.png';

import { darkTheme } from '../../utils/themes';
import mediaQueries from '../../utils/breakpoints.utils';

const SideBio: FunctionComponent = (): ReactElement => {
	return (
		<section
			css={css`
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				margin-bottom: 32px;

				${mediaQueries[0]} {
					flex-direction: column;
					align-items: center;

					transform: translateY(-52px);
				}
			`}
		>
			<h6
				css={css`
					margin-top: 0;
					${mediaQueries[0]} {
						margin-bottom: 24px;
					}
				`}
			>
				ABOUT
			</h6>
			<img
				src={profile}
				css={css`
					width: 80px;
					margin-bottom: 16px;
					${mediaQueries[0]} {
						margin: 0 auto 24px auto;
					}
				`}
			/>
			<p
				css={css`
					color: ${darkTheme.colours.white};
					opacity: 0.8;
					text-align: center;
					font-size: 0.9rem;
					${mediaQueries[0]} {
						margin: 0;
					}
				`}
			>
				Thoughts on business, programming, and life ☕️
			</p>
		</section>
	);
};

export default SideBio;
