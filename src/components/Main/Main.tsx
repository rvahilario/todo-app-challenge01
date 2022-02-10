import { Container, Area } from './styles';
import { MainProps } from './types';

export const Main = ({ children }: MainProps) => {
	return (
		<Container>
			<Area>{children}</Area>
		</Container>
	);
};
