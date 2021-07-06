/** @jsx jsx */
import React, { FunctionComponent, ReactElement } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react';
import { darkTheme } from '../../styling/themes';

interface PostPreviewBasicProps {
	thumbnailPath: string;
	title: string;
	description: string;
	path: string;
}

const CardHeading = styled.h4`
	opacity: 80%;
	transition: color 0.3s ease;
`;

const CardPara = styled.p`
	opacity: 50%;
	transition: color 0.3s ease;
`;

const CardImg = styled.img`
	height: 280px;
	width: 100%;
	object-fit: cover;

	transition: transform 0.3s ease;
`;

const PostPreviewBasic: FunctionComponent<PostPreviewBasicProps> = ({
	thumbnailPath,
	title,
	description,
	path,
}): ReactElement => {
	return (
		<div
			css={css`
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
					<CardImg src={thumbnailPath} />
					<CardHeading>{title}</CardHeading>
					<CardPara>{description}</CardPara>
				</div>
			</Link>
		</div>
	);
};

export default PostPreviewBasic;
