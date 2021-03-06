import React from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import mainLogo from '../images/foodoo-logo.png';
import "./login.css";
import { loginAndFetchUserDetails } from "../Lib/api-calls";
import { addUserToStore } from "../Actions/dispatch-actions";

import { Link } from 'react-router-dom';


// export default class LoginScreen extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: "",
//       password: ""
//     };
//   }

let LoginScreenWrapper = ({ state, props, addUserToStore }) => {

  let userCredentials = {};

  // let validateForm = () => {
  //   return this.state.email.length > 0 && this.state.password.length > 0;
  // };

  let handleSubmit = event => {
        event.preventDefault();
        if(userCredentials.email && userCredentials.password) {
          console.log(userCredentials);
            loginAndFetchUserDetails(userCredentials)
                .then(res => res.json())
                .then(user => {
                    console.log("USER CREDENTIALS WHEN I LOG IN", user);
                    if(user.jwt) {
                        localStorage.setItem("authorization", user.jwt);
                        addUserToStore(user);
                        props.history.push("/events");
                    } else {
                        alert("Can't log you in");
                    }
                })
        } else {
            console.log("Enter valid Email Address or Password");
        }
    };

    let readEmail = event => {
      //console.log(event.target.value);
      userCredentials.email = event.target.value;
    };

    let readPassword = event => {
      //console.log(event.target.value);
      userCredentials.password = event.target.value;
    };

    return (
      <div className="home-page-container">

    <div className="logo-and-description">
      <div><img src={mainLogo} className="home-main-logo" alt="mainlogo" /></div>
      <div>
        <p>Manage your catering service with foodoo</p>
      </div>
    </div>
    <div className="log-in-form">
      <div className="login-and-sign-in">
        <form onSubmit={handleSubmit} className="login-form">
          <FormGroup controlId="email" bsSize="large">
            <FormControl
              placeholder="email"
              autoFocus
              type="email"
              onChange={readEmail}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormControl
              placeholder="password"
              type="password"
              onChange={readPassword}
            />

          </FormGroup>
          <div className="sl-form">
              <div className="sl">
                <Link to={"/register"}>    
                  <Button
                    block
                    bsSize="large"
                  >
                    Sign up now!
                  </Button>
                  </Link>
              </div>
              <div className="sl">
                <Button
                  block
                  bsSize="large"
                  type="submit"
                >
                  Login
                </Button>
              </div>
          </div>
        </form>
      </div>
      </div>
  </div>
    );
}

let mapStateToProps = (state, props) => ({ state, props });

let mapDispatchToProps = dispatch =>  ({ addUserToStore: (user) => dispatch(addUserToStore(user)) });
      
let LoginScreen = connect(mapStateToProps, mapDispatchToProps)(LoginScreenWrapper);

export default LoginScreen;
