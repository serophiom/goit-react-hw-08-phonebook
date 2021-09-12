import { useSelector } from 'react-redux';
import * as authSelectors from '../redux/auth/auth-selectors';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className="">
      <div className="">
        <Navigation />

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
}




// import Navigation from '../Navigation/Navigation';
// // import authSelectors from '../redux/auth/auth-selectors';

// export default function AppBar() {
// // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

//     return (
//         <header>
//             <Navigation />
//         </header>
//     )
// }