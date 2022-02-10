import styled from 'styled-components';

type ContainerProps = {
	done: boolean;
};

export const Container = styled.div(
	({ done }: ContainerProps) =>
		`
		display: flex;
		background: #20212c;
		padding: 10px;
		border-radius: 10px;
		margin: 10px 0;
		align-items: center;

		input {
			height: 1.2rem;
			width: 1.2rem;
		}

		span {
			margin-left: 15px;
			font-size: 1.2rem;
			text-decoration: ${done ? 'line-through' : 'initial'};
		}
		`
);
