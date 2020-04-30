/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a
        sx={{
          variant: 'styles.navlink',
          p: 2
        }}
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
