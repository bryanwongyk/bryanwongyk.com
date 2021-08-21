/** @jsx jsx */

import React, { useState, ReactElement } from 'react';
import { css, jsx } from '@emotion/react';

import Button from '../buttons/block-button';
import mediaQueries from '../../utils/breakpoints.utils';

const SubscriptionForm = (): ReactElement => {
	const [status, setStatus] = useState<null | string>(null);
	const [email, setEmail] = useState('');

	//FORM_URL should be the same as the form action url pointed out above
	const FORM_URL = `https://app.convertkit.com/forms/2523983/subscriptions`;

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const data = new FormData(e.target);
		try {
			const response = await fetch(FORM_URL, {
				method: 'post',
				body: data,
				headers: {
					accept: 'application/json',
				},
			});
			setEmail('');
			const json = await response.json();
			if (json.status === 'success') {
				setStatus('SUCCESS');
				return;
			}
		} catch (err) {
			setStatus('ERROR');
			console.log(err);
		}
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setEmail(value);
	};

	return (
		<div
			className="sub"
			css={css`
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				text-align: center;
			`}
		>
			<h2
				css={css`
					margin-top: 0;
					font-size: 1rem;
					color: #f2f2f2;
				`}
			>
				Join the newsletter
			</h2>
			<p
				css={css`
					font-size: 0.9rem;
					color: #f2f2f2;
				`}
			>
				Get a once-per-month email on my latest articles 👾
			</p>

			{status === 'SUCCESS' && (
				<div
					css={css`
						background-color: #44cf6c;
						margin-bottom: 2rem;
						padding: 1rem;
					`}
				>
					<p
						css={css`
							font-size: 0.9rem;
							color: #424242;
							margin: 0;
						`}
					>
						Please go to your inbox to confirm your subscription!
					</p>
				</div>
			)}
			{status === 'ERROR' && (
				<div
					css={css`
						background-color: #f23838;
						margin-bottom: 2rem;
						padding: 1rem;
					`}
				>
					<p
						css={css`
							font-size: 0.9rem;
							color: #424242;
							margin: 0;
						`}
					>
						Oops, Something went wrong! Try again.
					</p>
				</div>
			)}

			<form
				className="sub__form"
				action={FORM_URL}
				method="post"
				onSubmit={handleSubmit}
				css={css`
					width: 100%;
				`}
			>
				<input
					type="email"
					aria-label="Your email"
					//The name attribute should be the same as on you selected form.
					name="email_address"
					placeholder="Your email address"
					onChange={handleInputChange}
					value={email}
					required
					css={css`
						padding: 1rem;
						border: none;
						width: 100%;
						${mediaQueries[0]} {
							width: 380px;
						}
					`}
				/>

				<Button type="submit">Subscribe</Button>
			</form>

			<p
				className="sub__tag"
				css={css`
					margin-top: 1.5rem;
					margin-bottom: 0;
					font-family: 'IBM Plex Mono';
					font-size: 0.75rem;
					color: #f2f2f2;
				`}
			>
				I won't send you spam. Unsubscribe at any time.
			</p>
		</div>
	);
};

export default SubscriptionForm;
