import Navigation from '../Navigation/Navigation';
// import authSelectors from '../redux/auth/auth-selectors';

export default function AppBar() {
// const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

    return (
        <header>
            <Navigation />
        </header>
    )
}