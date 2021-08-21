/** @jsx jsx */

import { FunctionComponent, useState } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react';

import NavBar from '../../navbar/navbar';
import HamburgerMenu from '../../hamburger-menu/hamburger-menu';
import IconButton from '../../buttons/icon-button';
import Tooltip from '../../tooltip/tooltip';
import Logo from '../../../content/assets/images/logo.png';

import { Copy, SunDim, Moon } from 'phosphor-react';

import { darkTheme } from '../../../utils/themes';
import checkHoverMediaQuery from '../../../utils/checkHover.utils';
import mediaQueries from '../../../utils/breakpoints.utils';

const HeaderTag = styled.header`
	margin-bottom: 0px;
	padding-top: 48px;
	padding-bottom: 32px;
	z-index: 1000;
	background-color: ${darkTheme.colours.black};
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const LogoLinkSpan = styled.span`
	display: flex;
	align-items: center;
	z-index: 100;
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
	// Keep track if link is copied
	const [copied, setCopied] = useState(false);
	const handleClickCopy = (): void => {
		const el = document.createElement('input');
		el.value = window.location.href;
		document.body.appendChild(el);
		el.select();
		document.execCommand('copy');
		document.body.removeChild(el);
		setCopied(true);

		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<HeaderTag>
			<div
				css={css`
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					${mediaQueries[0]} {
						width: 100%;
					}
				`}
			>
				<LogoLinkSpan>
					<Link
						to="/"
						css={css`
							color: ${darkTheme.colours.white};
							text-decoration: none;
							opacity: 0.7;
							transition: color 0.4s, opacity 0.2s ease;
							${checkHoverMediaQuery} {
								&:hover {
									opacity: 1;
								}
							}
						`}
						onClick={closeMobileMenu}
					>
						<img
							src={Logo}
							css={css`
								width: 40px;
								margin-bottom: 0;
							`}
						/>
					</Link>
				</LogoLinkSpan>
				<NavBar />
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
						<span
							css={css`
								position: relative;
								opacity: 0.5;
								transition: opacity 0.3s ease 0s;
								&:hover {
									opacity: 1;
								}
							`}
						>
							<Tooltip visible={copied}>Copied!</Tooltip>
							<IconButton
								title="Copy URL"
								onClick={handleClickCopy}
							>
								<Copy
									size={24}
									css={css`
										cursor: pointer;
										color: ${darkTheme.colours.white};
									`}
								/>
							</IconButton>
						</span>
					</div>
				) : null}
			</div>
			<HamburgerMenu
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
