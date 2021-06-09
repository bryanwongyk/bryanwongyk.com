import React, { FunctionComponent, ReactElement } from 'react';
import { Link } from 'gatsby';
import PostPreviewCard from './post-preview-card';
import styled from '@emotion/styled';

interface PostPreviewBasicProps {
	id: string;
	thumbnailPath: string;
	title: string;
	description: string;
	path: string;
}

const ListItem = styled.li`
	list-style-type: none;
`;

const CardHeading = styled.h4`
	opacity: 80%;
`;

const CardPara = styled.p`
	opacity: 50%;
`;

const PostPreviewBasic: FunctionComponent<PostPreviewBasicProps> = ({
	id,
	thumbnailPath,
	title,
	description,
	path,
}): ReactElement => {
	return (
		<ListItem key={id}>
			<Link to={path}>
				<PostPreviewCard>
					<img src={thumbnailPath} />
					<CardHeading>{title}</CardHeading>
					<CardPara>{description}</CardPara>
				</PostPreviewCard>
			</Link>
		</ListItem>
	);
};

export default PostPreviewBasic;
