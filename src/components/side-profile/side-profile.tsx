/** @jsx jsx */

import { FunctionComponent, ReactElement } from 'react';
import { css, jsx } from '@emotion/react';
import profile from '../../content/assets/images/profile-circular.png';
import { darkTheme } from '../../styling/themes';

import mediaQueries from '../../styling/breakpoints.utils';

const SideProfile: FunctionComponent = (): ReactElement => {
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
				}
			`}
		>
			<h6
				css={css`
					margin-top: 8px;
					${mediaQueries[0]} {
						margin-bottom: 24px;
					}
				`}
			>
				BIO
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
					${mediaQueries[0]} {
						margin: 0;
					}
				`}
			>
				Hi! I'm a Software Engineer passionate about creating
				user-centered experiences.
			</p>
		</section>
	);
};

export default SideProfile;
