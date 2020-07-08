import Link from "next/link";

const ResultView = ({ resultName }) => {
  return (
    <>
      <style jsx>{`
        p {
          display: flex;
          justify-content: center;
          font: 20px menlo, monaco, monospace;
        }
      `}</style>
      <div>
        <p>抽獎結果</p>
        <img
          src={`https://robohash.org/${resultName}?set=set4&size=300x300`}
          alt="monster"
        />
        <p>{resultName}</p>
        <ReturnButton />
      </div>
    </>
  );
};

const ReturnButton = () => {
  return (
    <div className={"link"}>
      <style jsx>{`
        .link {
          display: flex;
          justify-content: center;
        }
        .link-button {
          font: 14px menlo, monaco, monospace;
          text-decoration: none;
          color: #333333;
          padding: 10px;
          border: 1px solid #333333;
        }
        .link-button:hover {
          background-color: #dbdbdb;
        }
      `}</style>
      <Link href="/">
        <a className={"link-button"}>Try Again</a>
      </Link>
    </div>
  );
};

const Result = (props) => {
  const { resultName, isCountDown } = props;

  return (
    <>
      <style jsx>{`
        .container {
          width: 300px;
          margin: 100px auto;
        }
      `}</style>
      <div className={"container"}>
        {isCountDown ? (
          <ResultView resultName={resultName} />
        ) : (
          <ReturnButton />
        )}
      </div>
    </>
  );
};
export default Result;
