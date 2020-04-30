import { request } from '../lib/datocms';
// import { DatoRequestData } from '../types/dato-data';

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
  return <div>{JSON.stringify(data, null, 2)}</div>;
};

export default HomePage;
