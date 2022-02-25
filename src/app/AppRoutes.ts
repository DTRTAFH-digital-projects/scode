import ChatPage from "../components/pages/ChatPage";
import LoginPage from "../components/pages/LoginPage";
import MainPage from "../components/pages/MainPage";

export const LOGIN_ROUTE = "/login";
export const CHAT_ROUTE = "/chat";
export const MAIN_ROUTE = "/";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: LoginPage
    },
    {
        path: MAIN_ROUTE,
        Component: MainPage
    }
];

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component: ChatPage
    }
]