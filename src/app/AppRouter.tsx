import { Route, Routes, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes, LOGIN_ROUTE, MAIN_ROUTE } from './AppRoutes';

function AppRouter() {
    let isLogined = true;
    return isLogined ?
        (
            <Routes>
                {publicRoutes.map( ({path, Component}) =>
                    <Route path={path} element={ <Component/> } />
                )}
                {privateRoutes.map( ({path, Component}) => 
                    <Route path={path} element={ <Component/> } />
                )}
                <Navigate to={MAIN_ROUTE}/>
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map( ({path, Component}) =>
                    <Route path={path} element={ <Component /> } />
                )}
                <Navigate to={MAIN_ROUTE}/>
            </Routes>
        );
}

export default AppRouter;