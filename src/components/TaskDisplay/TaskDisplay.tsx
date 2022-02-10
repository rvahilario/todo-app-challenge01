import { useState } from 'react';
import { Container } from './styles';
import { TaskDisplayProps } from './types';

export const TaskDisplay = ({ task }: TaskDisplayProps) => {
	const [isDone, setIsDone] = useState(task.done);

	return (
		<Container done={isDone}>
			<input
				type='checkbox'
				checked={isDone}
				onChange={event => setIsDone(event.target.checked)}
			/>
			<span>{task.name}</span>
		</Container>
	);
};
