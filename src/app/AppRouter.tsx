import Cookies from 'js-cookie';
import { privateRoutes, publicRoutes } from './AppRoutes';

function AppRouter() {
    let isLogined = Cookies.get("nickname") !== undefined;
    return isLogined ? (
        privateRoutes()
    ) : (
        publicRoutes()
    );
}

export default AppRouter;