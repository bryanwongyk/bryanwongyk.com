/** @jsx jsx */
import React, { FunctionComponent, ReactNode } from 'react';
import { Link } from 'gatsby';
import { css, jsx } from '@emotion/react';
import { darkTheme } from '../../styling/themes';

interface AnchorButtonProps {
	link: string;
	isInternalLink: boolean;
	children: ReactNode;
}

/**
 * Gatsby's Link API provides fast loading of internal links.
 */
const AnchorButton: FunctionComponent<AnchorButtonProps> = ({
	link,
	isInternalLink,
	children,
}) => {
	return isInternalLink ? (
		<Link
			to={link}
			css={css`
				background-color: transparent;
				border: 1px solid ${darkTheme.colours.white};
				color: ${darkTheme.colours.white};
				border-radius: 25px;
				padding: 3px 18px 6px 24px;
				text-align: center;
				cursor: pointer;
				transition: all 0.3s ease;

				&:hover {
					color: ${darkTheme.colours.red};
					border: 1px solid ${darkTheme.colours.red};
				}
			`}
		>
			{children}
		</Link>
	) : (
		<a
			role="button"
			href={link}
			css={css`
				background-color: transparent;
				border: 1px solid ${darkTheme.colours.white};
				color: ${darkTheme.colours.white};
				border-radius: 25px;
				padding: 3px 12px 6px 12px;
				text-align: center;
				cursor: pointer;
				transition: all 0.3s ease;
			`}
		>
			{children}
		</a>
	);
};

export default AnchorButton;
