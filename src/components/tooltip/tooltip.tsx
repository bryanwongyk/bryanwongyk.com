/** @jsx jsx */
import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';

interface TooltipProps {
	children: ReactNode;
	visible: boolean;
}

const TooltipDiv = styled.div`
	font-size: 0.8rem;
	background: rgba(255, 255, 255, 0.3);
	position: absolute;
	top: -32px;
	left: -16px;
	padding: 2px 13px;

	transition: opacity 0.3s ease, transform 0.3s ease-in-out;

	// Speech bubble CSS
	// https://projects.verou.me/bubbly/
	border-radius: 0.3em;
	&:after {
		content: '';
		position: absolute;
		bottom: 80%;
		left: 50px;
		width: 0;
		height: 0;
		border: 4px solid transparent;
		border-top-color: rgba(255, 255, 255, 0.3);
		border-bottom: 0;
		margin-left: -20px;
		margin-bottom: -20px;
	}
`;

const Tooltip: FunctionComponent<TooltipProps> = ({
	children,
	visible,
}): ReactElement => {
	return (
		<TooltipDiv
			css={css`
				opacity: ${visible ? `1` : `0`};
				transform: ${visible ? `translateY(0)` : `translateY(5px)`};
			`}
		>
			{children}
		</TooltipDiv>
	);
};

export default Tooltip;
