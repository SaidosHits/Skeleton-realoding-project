import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div className="user-card" onClick={() => navigate(`/post/${user.id}`)}>
      <img className="avatar" src="https://picsum.photos/200" alt="user" />
      <div className="info">
        <h3>{user.name || <Skeleton/> }</h3>
        <p>Email: {user.email || <Skeleton/>}</p>
        <p>Username: {user.username || <Skeleton/>}</p>
        <p>Phone: {user.phone || <Skeleton/>}</p>
      </div>
    </div>
  );
};
export default UserCard;
