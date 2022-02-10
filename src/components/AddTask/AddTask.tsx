import { FaPlus } from 'react-icons/fa';
import { useState, KeyboardEvent } from 'react';
import { Container } from './styles';
import { AddTaskProps } from './types';

export const AddTask = ({ onEnter }: AddTaskProps) => {
	const [inputText, setInputText] = useState('');

	const handleEnterUp = (e: KeyboardEvent) => {
		if ((e.code === 'Enter' || e.code === 'NumpadEnter') && inputText !== '') {
			onEnter(inputText);
			setInputText('');
		}
	};

	return (
		<Container>
			<div>
				<FaPlus />
			</div>
			<input
				type='text'
				placeholder='Add a task'
				value={inputText}
				onChange={event => setInputText(event.target.value)}
				onKeyUp={handleEnterUp}
			/>
		</Container>
	);
};
