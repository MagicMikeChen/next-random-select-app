import PageContainer from "../container/pageContainer";

export default function SSG() {
  return <PageContainer />;
}

// If you build and start the app, the date returned here will have the same
// value for all requests, as this method gets executed at build time.
export function getStaticProps() {
  // Note that in this case we're returning the state directly, without creating
  // the store first (like in /pages/ssr.js), this approach can be better and easier
  const nameList = [
    { nameId: 1, name: "美國瑜" },
    { nameId: 2, name: "泰國瑜" },
    { nameId: 3, name: "蔡台語" },
    { nameId: 4, name: "蔡日文" },
    { nameId: 5, name: "李白" },
    { nameId: 6, name: "李黑" },
    { nameId: 7, name: "蘇東坡" },
    { nameId: 8, name: "蘇西坡" },
    { nameId: 9, name: "蘇北坡" },
  ];
  return {
    props: {
      initialReduxState: {
        nameList: nameList,
      },
    },
  };
}
