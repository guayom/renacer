import { request } from '../lib/datocms';
// import { DatoRequestData } from '../types/dato-data';
import { Box } from 'theme-ui';

const HOMEPAGE_QUERY = `query {
  homePage {
    heroText
    heroCta
    whoTitle
  }
}`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY
  });
  return {
    props: { data }
  };
}

const HomePage = ({ data }: any) => {
  return (
    <Box p={20}>
      <div>{JSON.stringify(data, null, 2)}</div>
    </Box>
  );
};

export default HomePage;
