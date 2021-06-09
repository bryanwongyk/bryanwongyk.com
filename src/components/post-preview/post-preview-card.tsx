import React, { FunctionComponent, ReactNode, ReactElement } from 'react';
import styled from '@emotion/styled';

interface PostPreviewCardProps {
	children: ReactNode;
}

const CardDiv = styled.div`
	max-width: 350px;
`;

const PostPreviewCard: FunctionComponent<{}> = ({ children }): ReactElement => (
	<CardDiv>{children}</CardDiv>
);

export default PostPreviewCard;
