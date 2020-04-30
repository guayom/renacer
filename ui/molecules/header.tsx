/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Flex } from 'theme-ui';
import Link from 'next/link';
import { Wrapper } from '../index';
import MainNav from './mainnav';

const Header: React.FC = () => {
  return (
    <Box bg="background" as="header" sx={{ width: '100%' }}>
      <Wrapper>
        <Flex
          sx={{
            alignItems: 'center',
            flexFlow: 'row wrap'
          }}
        >
          <Link href="/">
            <Flex sx={{ alignItems: 'center', cursor: 'pointer' }}>
              <img
                src="https://d33wubrfki0l68.cloudfront.net/04cd5c198f13c74418a6cdfc7dace78c4d910b43/86744/images/logo-mini.png"
                alt="Grupo Renacer Costa Rica logo"
                sx={{ marginRight: 2 }}
              />
              <h1>Grupos Renacer en Costa Rica</h1>
            </Flex>
          </Link>
          <div sx={{ mx: 'auto' }} />
          <MainNav />
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default Header;
