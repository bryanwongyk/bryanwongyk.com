/** @jsx jsx */

import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react';
import NavBar from '../navbar/navbar';
import MobileHamburger from '../mobile-hamburger/mobile-hamburger';
import { darkTheme } from '../../styling/themes';
import { useLocation } from '@reach/router';
import checkHoverMediaQuery from '../../styling/checkHover.utils';
import { Link as LinkIcon, SunDim, Moon } from 'phosphor-react';
import mediaQueries from '../../styling/breakpoints.utils';

const HeaderTag = styled.header`
	margin-bottom: 0px;
	padding-top: 40px;
	width: 100vw;
	position: fixed;
	z-index: 1000;
	background-color: ${darkTheme.colours.black};
	display: flex;
	flex-direction: row;
	justify-content: space-around;

	${mediaQueries[0]} {
		display: block;
	}
`;

const LogoLinkSpan = styled.span`
	display: flex;
	align-items: center;
`;

interface HeaderProps {
	siteTitle: string;
	toggleMobileMenu: () => void;
	closeMobileMenu: () => void;
	mobileMenuShown: boolean;
	children?: React.ReactNode;
}

const Header: FunctionComponent<HeaderProps> = ({
	siteTitle,
	toggleMobileMenu,
	closeMobileMenu,
	mobileMenuShown,
	children,
}) => {
	const location = useLocation();
	// If the user is already on the Home page and they click the logo, just close the mobile menu.
	const handleClickLink = () => {
		if (mobileMenuShown && location.pathname === '/') {
			closeMobileMenu();
		}
	};
	return (
		<HeaderTag>
			<div
				css={css`
					display: flex;
					flex-direction: row;
					justify-content: space-around;
				`}
			>
				<div
					css={css`
						display: flex;
						flex-direction: row;
						align-items: center;
					`}
				>
					<LogoLinkSpan>
						<h1>
							<Link
								to="/"
								css={css`
									color: ${darkTheme.colours.white};
									text-decoration: none;
									transition: color 0.4s, opacity 0.2s ease;
									z-index: 100;
									${checkHoverMediaQuery} {
										&:hover {
											opacity: 0.7;
										}
									}
								`}
								onClick={handleClickLink}
							>
								{siteTitle}
							</Link>
						</h1>
					</LogoLinkSpan>
					<NavBar />
				</div>
				{!mobileMenuShown ? (
					<div
						css={css`
							display: none;

							${mediaQueries[0]} {
								display: flex;
								align-items: center;
								justify-content: space-between;
								width: 80px;
							}
						`}
					>
						<LinkIcon size={24} />
						<SunDim size={24} />
					</div>
				) : null}
			</div>
			<MobileHamburger
				toggleMobileMenu={toggleMobileMenu}
				mobileMenuShown={mobileMenuShown}
			/>
			{children}
		</HeaderTag>
	);
};

Header.propTypes = {
	siteTitle: PropTypes.string,
	children: PropTypes.node,
};

Header.defaultProps = {
	siteTitle: ``,
};

export default Header;
