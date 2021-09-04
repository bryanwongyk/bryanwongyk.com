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
				${mediaQueries[0]} {
					flex-direction: row;
				}
			`}
		>
			<img
				src={profile}
				css={css`
					width: 60px;
					margin-bottom: 24px;
					${mediaQueries[0]} {
						margin-right: 16px;
						margin-bottom: 0;
					}
				`}
			/>
			<p
				css={css`
					color: ${darkTheme.colours.black};
					opacity: 0.8;
					font-size: 0.833rem;
					text-align: center;
					${mediaQueries[0]} {
						margin: 0;
						text-align: left;
					}
				`}
			>
				Your dose of <b>web development</b> and other cool, new things I
				learn about ☕️
			</p>
		</section>
	);
};

export default SideBio;
