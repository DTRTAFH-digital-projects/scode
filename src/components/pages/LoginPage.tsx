import Header from "../main/Header";
import '../../styles/Form.css';
import Cookies from 'js-cookie';
import React from 'react';

class LoginForm extends React.Component {
    state = {
        nickname: " ",
        password: " "
    }

    constructor(props: {}) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
        let value = event.target.value === "" ? " " : event.target.value;
        switch (event.target.name) {
            case "nickname":
                this.setState({
                    ...this.state,
                    nickname: value
                });
                break;
            case "password":
                this.setState({
                    ...this.state,
                    password: value
                });
                break;
        }
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
        //TODO: move to special file.
        console.log("a");
        Cookies.set("nickname", this.state.nickname);
        Cookies.set("password", this.state.password);
        event.preventDefault();
    }

    render(): React.ReactNode {
        return (
            <div className="form__cont">
                <form className="form" onSubmit={this.handleSubmit}>
                    <h1 className="form__title">Log in: </h1>

                    <div className="form__group">
                        <input type="text" name="nickname" className="form__input"
                            placeholder={this.state.nickname} onChange={this.handleChange} />

                        <div className="form__label"><label>Nickname:</label></div>
                    </div>
                    <div className="form__group">
                        <input type="text" name="password" className="form__input"
                            placeholder={this.state.password} onChange={this.handleChange} />

                        <div className="form__label"><label>Password:</label></div>
                    </div>
                    <input type="submit" value="Submit" className="form__button" />
                </form>
            </div>
        );
    }

}

function LoginPage() {
    return (
        <div className="login">
            <Header />
            <LoginForm />
        </div>
    );
}

export default LoginPage;