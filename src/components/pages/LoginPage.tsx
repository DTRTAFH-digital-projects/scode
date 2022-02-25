import Header from "../main/Header";
import {LoginForm, LoginFormState} from "../user/LoginForm";

function LoginPage() {
    return (
        <div className="login">
            <Header />
            <LoginForm state={ new LoginFormState() }/>
        </div>
    );
}

export default LoginPage;