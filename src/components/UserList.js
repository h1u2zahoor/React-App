import "../components/UserList.css";

function UserList({ list }) {
  if (list.length > 0) {
    return (
      <div className="userList">
        {list.map((i, k) => (
          <div className="user" key={k}>
            {i.name} and Age {i.age}
          </div>
        ))}
      </div>
    );
  }
  return null;
}

export default UserList;
