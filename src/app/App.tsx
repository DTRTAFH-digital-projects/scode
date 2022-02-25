import MainPage from '../components/pages/MainPage';
import LoginPage from '../components/pages/LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatPage from '../components/pages/ChatPage';
import RegisterPage from '../components/pages/RegisterPage';
import AppRouter from './AppRouter';

function App() {
    return (
        <Router>
            <AppRouter />
        </Router>
    );
}

export default App;