import { TypeScale, TypeStyle, ColorPalette } from '@theme-ui/style-guide';
import { Styled } from 'theme-ui';
import { Wrapper } from '../ui';

const StyleGuide: React.FC = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default StyleGuide;
