import Head from "next/head";
import ResultContainer from "../container/resultContainer";

const ResultPage = () => {
  return (
    <>
      <Head>
        <title>Result</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ResultContainer />
    </>
  );
};
export default ResultPage;
