import React from 'react';
import {Link, browserHistory} from 'react-router';
import {Accounts} from 'meteor/accounts-base';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };

  }
  onSubmit(e) {
    e.preventDefault();
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    if (password.length < 9) {
      return this.setState({error: 'Password must be > 8 chars'})
    }

    Accounts.createUser({
      email,
      password,
      profile: {
        fname: '',
        lname: ''
      }
    }, (err) => {
      if (err) {
        this.setState({error: err.reason});
      } else {
        this.setState({error: ''});
      }
    });

  }

  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">

          <h1>Sign Up to ChipIn</h1>

          {this.state.error
            ? <p>{this.state.error}</p>
            : undefined}

          <form className="boxed-view__form" onSubmit={this.onSubmit.bind(this)}>
            <input type="email" ref="email" name="email" placeholder="Email Address" noValidate/>
            <input type="password" ref="password" name="password" placeholder="Password"/>
            <button className="button">Create Account</button>
          </form>

          <Link to="/">Already have an account?</Link>
        </div>

      </div>
    );
  }
}