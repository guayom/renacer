/** @jsx jsx */
import { jsx } from 'theme-ui';

const Main: React.FC = ({ children }) => {
  return (
    <main
      sx={{
        width: '100%',
        flex: '1 1 auto'
      }}
    >
      {children}
    </main>
  );
};

export default Main;
