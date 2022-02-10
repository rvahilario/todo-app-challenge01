import { Container } from './styles';
import { HeaderProps } from './types';

export const Header = ({ title }: HeaderProps) => {
	return (
		<Container>
			<h1>{title}</h1>
		</Container>
	);
};
