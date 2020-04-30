/** @jsx jsx */
import { jsx } from 'theme-ui';

const Layout: React.FC = ({ children }) => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
