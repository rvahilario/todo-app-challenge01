// import { useState } from 'react';
import { Container } from './styles';
import { TaskDisplayProps } from './types';

export const TaskDisplay = ({ task, onChange }: TaskDisplayProps) => {
	return (
		<Container done={task.done}>
			<input
				type='checkbox'
				checked={task.done}
				onChange={e => onChange(task.id, e.target.checked)}
			/>
			<span>
				{task.name} - {task.done.toString()}
			</span>
		</Container>
	);
};
