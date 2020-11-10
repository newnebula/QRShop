import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import CSS from './Login.module.css';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password:"",
            errorMessage: null
        }
        this.handleEmailPasswordChange = this.handleEmailPasswordChange.bind(this);
    };

    handleEmailPasswordChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    };

    handleSubmitLogin = e =>{
          // e.preventDefault();
          // const data = {
          //   email: this.state.email,
          //   password: this.state.password
          // };
    };

        render() {
          return (
          <>
            <div className={CSS.Message}>{"Log in met de gegevens van je winkel om de scanner op te starten."}</div>
            <form className={CSS.Form}>
                <input
                    className={CSS.TextArea}
                    name="email"
                    value={this.state.email}
                    placeholder="Your email"
                    onChange={this.handleEmailPasswordChange} />

                <input
                    className={CSS.TextArea}
                    type="password"
                    name="password"
                    value={this.state.password}
                    placeholder="Your password"
                    onChange={this.handleEmailPasswordChange} />

                <div className={CSS.ErrorMessage}>{this.state.errorMessage}</div>

                <Link className={CSS.Link} to={"/scanner"}><div className={CSS.SubmitButton}
                    onClick={this.handleSubmitLogin}> login
                </div></Link>

                <div className={CSS.Comment}> {"Enkel voor demo:"} </div>

                <Link className={CSS.Link} to={"/scanner/slager-janssens"}><div className={CSS.SubmitButtonDemo}
                    onClick={this.handleSubmitLogin}> login als Slager Janssens
                </div></Link>

                <Link className={CSS.Link} to={"/scanner/het-hapje"}><div className={CSS.SubmitButtonDemo}
                    onClick={this.handleSubmitLogin}> login als het Hapje
                </div></Link>

                <Link className={CSS.Link} to={"/scanner/zig-zag"}><div className={CSS.SubmitButtonDemo}
                    onClick={this.handleSubmitLogin}> login als Zig Zag
                </div></Link>

             </form>
          </>
          );
        }
      }


 export default Login;