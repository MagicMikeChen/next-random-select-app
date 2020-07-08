import Avatar from "react-avatar";

const List = (props) => {
  const { nameList } = props;
  return (
    <div>
      <style jsx>{`
        nav {
          height: 300px;
          width: 200px;
          overflow: scroll;
          border: 1px solid #ccc;
          font-size: 12px;
          font-family: Arial, sans-serif;
          -webkit-overflow-scrolling: touch;
        }

        .profile {
          display: flex;
          justify-content: space-around;
          border-bottom: 1px solid #ccc;
        }

        ul {
          overflow: hidden;
          overflow-y: scroll;
          list-style-type: none;
          padding-inline-start: 0;
          margin-block-start: 0;
          margin-block-end: 0;
        }

        .list-content {
          display: flex;
          padding: 0.8rem 1.2rem;
        }

        .list-content:last-child {
          border-bottom: none;
        }

        .avatar-custom {
          padding: 5px 10px 0 0;
        }
      `}</style>

      <nav>
        <ul>
          {nameList.map((person) => {
            return (
              <div className={"profile"} key={person.nameId}>
                <li className={"list-content"} key={person.nameId}>
                  {person.name}
                </li>
                <div className={"avatar-custom"}>
                  <Avatar
                    size={"30"}
                    round={true}
                    key={person.nameId}
                    alt={person.name}
                    src={`https://robohash.org/${person.name}?set=set4&size=35x35`}
                  />
                </div>
              </div>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default List;
