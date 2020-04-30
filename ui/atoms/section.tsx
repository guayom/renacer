/** @jsx jsx */
import { Box, jsx } from 'theme-ui';
import Wrapper from './wrapper';

interface SectionProps {
  variant?: 'whiteSection' | 'darkSection';
}

const Section: React.FC<SectionProps> = ({
  children,
  variant = 'whiteSection'
}) => {
  return (
    <Box py={5} sx={{ variant: `styles.${variant}` }}>
      <Wrapper>{children}</Wrapper>
    </Box>
  );
};

export default Section;
