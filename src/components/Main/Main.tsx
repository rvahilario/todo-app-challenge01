import { Header } from 'components/Header';
import { TaskDisplay } from 'components/TaskDisplay';
import { AddTask } from 'components/AddTask';
import { useState } from 'react';
import { Container, Area } from './styles';

import { Task } from '../../types/task';

export const Main = () => {
	const [list, setList] = useState<Task[]>([
		{ id: 1, name: 'Study Typescript', done: false },
		{ id: 2, name: 'Study tests with Jest', done: false },
	]);

	const handleAddTask = (taskName: string) => {
		const newTask = {
			id: list.length + 1,
			name: taskName,
			done: false,
		};

		setList([newTask, ...list]);
	};

	const handleTaskChange = (id: number, done: boolean) => {
		const newList = [...list];
		for (const index in newList) {
			if (newList[index].id === id) {
				newList[index].done = done;
			}
		}
		setList(newList);
	};

	return (
		<Container>
			<Area>
				<Header title='To-do list' />
				<AddTask onEnter={handleAddTask} />
				{list.map(task => (
					<TaskDisplay key={task.id} task={task} onChange={handleTaskChange} />
				))}
			</Area>
		</Container>
	);
};
