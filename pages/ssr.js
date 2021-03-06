import PageContainer from "../container/pageContainer";
import { initializeStore } from "../store";

export default function SSR() {
  return <PageContainer />;
}

// The date returned here will be different for every request that hits the page,
// that is because the page becomes a serverless function instead of being statically
// exported when you use `getServerSideProps` or `getInitialProps`
export function getServerSideProps() {
  const reduxStore = initializeStore();

  return { props: { initialReduxState: reduxStore.getState() } };
}
