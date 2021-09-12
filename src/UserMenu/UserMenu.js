import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../redux/auth/auth-selectors';
import { logout } from '../redux/auth/auth-operations';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  console.log(name);

  return (
    <div className="">
      <div className="">
        <span className="">{name}</span>
      </div>
      <button
        type="button"
        className=""
        onClick={() => dispatch(logout())}
      >
        Log out
      </button>
    </div>
  );
}