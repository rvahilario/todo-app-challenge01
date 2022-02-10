import styled from 'styled-components';

export const Container = styled.div`
	text-align: center;
	border-bottom: 2px solid ${props => props.theme.colors.primary};

	h1 {
		font-size: 3rem;
	}
`;
