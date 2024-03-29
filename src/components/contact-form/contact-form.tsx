import React, { FunctionComponent, ReactElement } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styled from '@emotion/styled';
import { darkTheme } from '../../utils/themes';
import PrimaryButton from '../buttons/primary-button';

const CenteredPara = styled.p`
	text-align: center;
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 480px;
`;

const StyledLabel = styled.label`
	margin-bottom: 8px;
	opacity: 80%;
`;

const StyledInput = styled.input`
	border: none;
	background-color: ${darkTheme.colours.white};
	margin-bottom: 24px;
	padding: 4px 3px;
`;

const StyledTextArea = styled.textarea`
	resize: none;
	height: 80px;
	border: none;
	background-color: ${darkTheme.colours.white};
	margin-bottom: 24px;
	padding: 4px 3px;
`;

const StyledButtonDiv = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 16px;
`;

const ContactForm: FunctionComponent<{}> = (): ReactElement => {
	const [state, handleSubmit] = useForm('xyyljyyj');
	if (state.succeeded) {
		return <CenteredPara>Message successfully sent!</CenteredPara>;
	}
	return (
		<StyledForm onSubmit={handleSubmit}>
			<StyledLabel htmlFor="name">Name</StyledLabel>
			<StyledInput id="name" type="text" name="name" required />
			<ValidationError prefix="Name" field="name" errors={state.errors} />
			<StyledLabel htmlFor="email">Email Address</StyledLabel>
			<StyledInput id="email" type="email" name="email" required />
			<ValidationError
				prefix="Email"
				field="email"
				errors={state.errors}
			/>
			<StyledLabel htmlFor="message">Message</StyledLabel>
			<StyledTextArea id="message" name="message" required />
			<ValidationError
				prefix="Message"
				field="message"
				errors={state.errors}
			/>
			<StyledButtonDiv>
				<PrimaryButton type="submit" disabled={state.submitting}>
					Submit
				</PrimaryButton>
			</StyledButtonDiv>
		</StyledForm>
	);
};

export default ContactForm;
