/** @jsx jsx */
import { Container, jsx } from 'theme-ui';

const Wrapper: React.FC = ({ children }) => {
  return <Container px={3}>{children}</Container>;
};

export default Wrapper;
