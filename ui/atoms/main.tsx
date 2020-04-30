/** @jsx jsx */
import { jsx } from 'theme-ui';

const Main: React.FC = ({ children }) => {
  return (
    <main
      sx={{
        width: '100%',
        flex: '1 1 auto',
        paddingLeft: 3,
        paddingRight: 3
      }}
    >
      {children}
    </main>
  );
};

export default Main;
