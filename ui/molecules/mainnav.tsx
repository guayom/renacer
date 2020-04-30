/** @jsx jsx */
import { jsx } from 'theme-ui';
import NavLink from '../atoms/navlink';
import { Box } from 'theme-ui';

// TODO model in Dato
const links = [
  { title: 'Blog', link: '/blog' },
  { title: 'Recursos', link: '/recursos' }
];

const MainNav: React.FC = () => {
  return (
    <>
      {links.map(({ title, link }) => (
        <Box mx={2} key={title}>
          <NavLink href={link}>{title}</NavLink>
        </Box>
      ))}
    </>
  );
};

export default MainNav;
