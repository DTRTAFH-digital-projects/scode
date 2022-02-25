import { Route, Routes, Navigate } from "react-router";
import ChatPage from "../components/pages/ChatPage";
import LoginPage from "../components/pages/LoginPage";
import MainPage from "../components/pages/MainPage";
import RegisterPage from "../components/pages/RegisterPage";

export const LOGIN_ROUTE = "/login";
export const REGISTER_ROUTE = "/register";
export const CHAT_ROUTE = "/chat";
export const MAIN_ROUTE = "/";

export const publicRoutes = () => {
    return (
        <Routes>
            <Route path={MAIN_ROUTE} element={<MainPage/>} />
            <Route path={LOGIN_ROUTE} element={<LoginPage/>} />
            <Route path={REGISTER_ROUTE} element={<RegisterPage/>} />
            <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
        </Routes>
    );
}

export const privateRoutes = () => {
    return (
        <Routes>
            <Route path={MAIN_ROUTE} element={<MainPage/>} />
            <Route path={LOGIN_ROUTE} element={<LoginPage/>} />
            <Route path={REGISTER_ROUTE} element={<RegisterPage/>} />
            <Route path={CHAT_ROUTE} element={<ChatPage/>} />
        </Routes>
    );
}