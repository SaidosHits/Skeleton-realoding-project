import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import Cardskeleton from "./Cardskeleton";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
        setIsLoading(false);
        console.log(users)
      });
  }, []);

  return (
    <>
      <h1 style={{ marginBottom: "1.5rem" }}>Users</h1>
      <div className="user-container">
        {isLoading &&(
          <>
        <Cardskeleton/>
        <Cardskeleton/>
        <Cardskeleton/>
        <Cardskeleton/>
        <Cardskeleton/>
        <Cardskeleton/>
        <Cardskeleton/>
        <Cardskeleton/>
        <Cardskeleton/>
        <Cardskeleton/>
          </>
        )}
        {users.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
    </>
  );
};
export default Home;
