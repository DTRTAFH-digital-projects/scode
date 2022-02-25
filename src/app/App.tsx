import MainPage from '../components/pages/MainPage';
import LoginPage from '../components/pages/LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatPage from '../components/pages/ChatPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <MainPage /> } />
                <Route path="/login" element={ <LoginPage /> } />
                <Route path="/chat" element= { <ChatPage />} />
            </Routes>
        </Router>
    );
}

export default App;