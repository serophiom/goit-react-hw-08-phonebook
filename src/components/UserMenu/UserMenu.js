import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import { logout } from '../../redux/auth/auth-operations';
import './UserMenu.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  console.log(name);

  return (
    <div className="user-menu">
      <div className="">
        <span className="user-name">{name}</span>
      </div>
      <button
        type="button"
        className="logout-btn"
        onClick={() => dispatch(logout())}
      >
        Log out
      </button>
    </div>
  );
}