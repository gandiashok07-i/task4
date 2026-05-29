import UserCard from "./UserCard";

function UserList() {

  const users = [
    { id: 1, name: "Ashok", role: "Frontend Developer" },
    { id: 2, name: "Rahul", role: "Backend Developer" },
    { id: 3, name: "Sneha", role: "UI Designer" }
  ];

  return (
    <div>
      {users.map(user => (
        <UserCard
          key={user.id}
          name={user.name}
          role={user.role}
        />
      ))}
    </div>
  );
}

export default UserList;
