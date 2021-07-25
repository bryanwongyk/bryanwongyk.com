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
	date: string;
	readingTime: string;
	path: string;
}

const CardHeading = styled.h4`
	font-size: 1.2rem;
	transition: color 0.3s ease;
	margin: 8px 0;
`;

const CardPara = styled.p`
	opacity: 65%;
	font-size: 0.9rem;
	transition: color 0.3s ease;
	margin-bottom: 8px;
`;

const CardFooter = styled.footer`
	font-size: 0.9rem;
	opacity: 40%;
	padding: 0;
`;

const CardImg = styled.img`
	height: 190px;
	width: 100%;
	object-fit: cover;

	transition: transform 0.3s ease;
`;

const PostPreviewBasic: FunctionComponent<PostPreviewBasicProps> = ({
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
					<CardFooter>
						{date} ⬩ {readingTime}
					</CardFooter>
				</div>
			</Link>
		</article>
	);
};

export default PostPreviewBasic;
