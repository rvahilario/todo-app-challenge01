import { Header } from 'components/Header';
import { TaskDisplay } from 'components/TaskDisplay';
import { useState } from 'react';
import { Container, Area } from './styles';

import { Task } from '../../types/task';

export const Main = () => {
	const [list, setList] = useState<Task[]>([
		{ id: 1, name: 'Study Typescript', done: false },
		{ id: 2, name: 'Study tests with Jest', done: false },
	]);

	return (
		<Container>
			<Area>
				<Header title='To-do list' />
				{list.map(task => (
					<TaskDisplay task={task} key={task.id} />
				))}
			</Area>
		</Container>
	);
};
