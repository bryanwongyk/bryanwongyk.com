import React, { FunctionComponent, useState } from 'react';
import { Link } from 'gatsby';
import { css, SerializedStyles, ClassNames } from '@emotion/react';
import { darkTheme } from '../../styling/themes';
import { useLocation } from '@reach/router';

interface PortfolioCardProps {
	img: string;
	projectTitle: string;
	projectDescription: string;
	isWebsite: boolean;
}

const PortfolioCard: FunctionComponent<PortfolioCardProps> = ({
	img,
	projectTitle,
	projectDescription,
	isWebsite,
}) => {
	return (
		<article>
			<img src={img} />
			<title>{projectTitle}</title>
			<div>{projectDescription}</div>
			{isWebsite ? <button>View Website</button> : null}
			<button>View on GitHub</button>
		</article>
	);
};

export default PortfolioCard;
