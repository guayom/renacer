/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'theme-ui';

interface ExternalLinkProps {
  to: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ children, to }) => {
  return (
    <Link href={to} rel="noopener noreferrer" target="_blank">
      {children}
    </Link>
  );
};

export default ExternalLink;
