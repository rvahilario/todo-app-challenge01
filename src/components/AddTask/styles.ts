import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	border: 2px solid #222;
	border-radius: 10px;
	padding: 6px;
	margin: 25px 0;
	align-items: center;
	color: ${props => props.theme.colors.primary};

	div {
		margin-right: 10px;
		font-size: 1.2rem;
	}

	input {
		border: none;
		background: transparent;
		outline: none;
		color: ${props => props.theme.colors.text};
		font-size: 1.2rem;
		flex: 1;
	}
`;
