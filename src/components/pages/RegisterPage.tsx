import Header from '../main/Header';
import '../../styles/RegisterForm.css';
import React from 'react';

class RegisterForm extends React.Component {
    state = {
        nickname: " ",
        password: " ",
        email: " "
    }

    constructor(props: {}) {
        super(props);

        this.handlerChange = this.handlerChange.bind(this);
    }

    handlerChange(ev: React.ChangeEvent<HTMLInputElement>) {
        const value = ev.target.value === "" ? " " : ev.target.value;

        switch(ev.target.name) {
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
            case "email":
                this.setState({
                    ...this.state,
                    email: value
                });
                break;
        }
    }

    render() {
        return (
            <div className="form__cont">
                <form className="form">
                    <h1 className="form__title">Register:</h1>

                    <div className="form__group">
                        <input type="text" name="nickname" className="form__input" 
                            placeholder={this.state.nickname} onChange={this.handlerChange}/>
                        <div className="form__label"><label>Nickname:</label></div>
                    </div>

                    <div className="form__group">
                        <input type="text" name="nickname" className="form__input" 
                            placeholder={this.state.password} onChange={this.handlerChange}/>
                        <div className="form__label"><label>Password:</label></div>
                    </div>

                    <div className="form__group">
                        <input type="text" name="email" className="form__input" 
                            placeholder={this.state.email} onChange={this.handlerChange}/>
                        <div className="form__label"><label>Email:</label></div>
                    </div>

                    <input type="submit" value="Send" className="form__button" />
                </form>
            </div>
        );
    }
}

function RegisterPage() {
    return (
        <div className="register">
            <Header />
            <RegisterForm />
        </div>
    );
}

export default RegisterPage;