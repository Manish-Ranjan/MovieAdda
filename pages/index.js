import Head from "next/head";
import Header from "../components/Header";
import Movies from "../components/Movies";
import Nav from "../components/Nav";
import requests from "../utils/request";
export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Movie Adda</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Movies results={results} />
    </div>
  );
}
export const getServerSideProps = async (context) => {
  const genre = context.query.genre;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url ?? requests.fetchTrending.url
    }`
  ).then((res) => res.json());
  return {
    props: {
      results: request?.results,
    },
  };
};
