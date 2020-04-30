/** @jsx jsx */
import { jsx } from 'theme-ui';
import Section from '../atoms/section';
import { Flex } from 'theme-ui';

interface HomeHeroProps {
  heroText: string;
  heroCta: string;
}

const HomeHero: React.FC<HomeHeroProps> = ({ heroText, heroCta }) => {
  return (
    <Section variant="darkSection">
      <Flex
        sx={{
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center'
        }}
        my={6}
      >
        <Flex>
          <img
            sx={{ display: 'block', margin: '0 auto' }}
            src="/images/logo.png"
            alt="Grupo Renace Logo"
          />
        </Flex>
        <h2 sx={{ fontSize: 4, fontWeight: 'body' }}>{heroText}</h2>
        <p>{heroCta}</p>
      </Flex>
    </Section>
  );
};

export default HomeHero;
