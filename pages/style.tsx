import { TypeScale, TypeStyle, ColorPalette } from '@theme-ui/style-guide';
import { Container, Styled } from 'theme-ui';

const StyleGuide: React.FC = () => {
  return (
    <Container py={4}>
      <Styled.h1>Style Guide</Styled.h1>
      <ColorPalette />
      <TypeScale />
      <TypeStyle fontFamily="heading" fontWeight="heading" lineHeight="heading">
        Heading font bold
      </TypeStyle>
      <TypeStyle fontFamily="body" fontWeight="body" lineHeight="body">
        Heading font regular
      </TypeStyle>
      <p>This is a paragraph</p>
    </Container>
  );
};

export default StyleGuide;
