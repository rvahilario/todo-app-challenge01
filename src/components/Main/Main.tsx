import { Header } from 'components/Header';
import { Container, Area } from './styles';
import { MainProps } from './types';

export const Main = ({ children }: MainProps) => {
	return (
		<Container>
			<Area>
				<Header title='Tasks List' />
			</Area>
		</Container>
	);
};
