/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Container } from 'theme-ui';

const Footer: React.FC = () => {
  return (
    <Box bg="background">
      <Container
        as="header"
        py={4}
        px={2}
        sx={{
          width: '100%'
        }}
      >
        Grupo renacer costa rica
      </Container>
    </Box>
  );
};

export default Footer;
