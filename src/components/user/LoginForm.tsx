import React from 'react';
import './LoginForm.css';
import { Form, FormProps, FormState } from '../../abc/Form';

class LoginFormState extends FormState {
    nickname: string = " ";
    password: string = " ";
}

class LoginForm extends Form {
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
        let state = this.state as LoginFormState;
        //fetch("http://localhost:8000/users", {
        //        mode: 'no-cors'
        //    })
        //    .then(res => {
        //        alert(res);
        //        console.log(res);
        //    });
        //console.log("a");
        event.preventDefault();
    }

    render(): React.ReactNode {
        return (
            <div className="form__cont">
                <form className="form" onSubmit={this.handleSubmit}>
                    <h1 className="form__title">Log in: </h1>

                    <div className="form__group">
                        <input type="text" name="nickname" className="form__input"
                            placeholder={(this.state as LoginFormState).nickname} onChange={this.handleChange} />

                        <div className="form__label"><label>Nickname:</label></div>
                    </div>
                    <div className="form__group">
                        <input type="text" name="password" className="form__input"
                            placeholder={(this.state as LoginFormState).password} onChange={this.handleChange} />

                        <div className="form__label"><label>Password:</label></div>
                    </div>
                    <input type="submit" value="Submit" className="form__button" />
                </form>
            </div>
        );
    }

}

export { LoginForm, LoginFormState };