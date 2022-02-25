import Cookies from 'js-cookie';
import { Route, Routes, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes, LOGIN_ROUTE, MAIN_ROUTE } from './AppRoutes';

function AppRouter() {
    let isLogined = Cookies.get("nickname") != undefined;
    return isLogined ? (
        privateRoutes()
    ) : (
        publicRoutes()
    );
}

export default AppRouter;