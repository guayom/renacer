import { request } from '../lib/datocms';
// import { DatoRequestData } from '../types/dato-data';
import { HomeHero, Section } from '../ui';

const HOMEPAGE_QUERY = `query {
  homePage {
    heroText
    heroCta
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

const HomePage = ({
  data: {
    homePage: { heroText, heroCta }
  }
}: any) => {
  return (
    <>
      <HomeHero {...{ heroText, heroCta }} />
      <Section>Hello</Section>
    </>
  );
};

export default HomePage;
