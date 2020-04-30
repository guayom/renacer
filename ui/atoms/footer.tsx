/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Text } from 'theme-ui';
import ExternalLink from './external-link';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <Box
      as="footer"
      bg="darkBackground"
      py={4}
      px={2}
      sx={{
        width: '100%',
        textAlign: 'center'
      }}
    >
      <Text color="background" as="small">
        ©{year} Grupos Renacer en Costa Rica | Desarrollo:{' '}
        <ExternalLink to="https://www.guayo.me">Guayo</ExternalLink>
      </Text>
    </Box>
  );
};

export default Footer;
