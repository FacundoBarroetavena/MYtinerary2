import React, { Component } from 'react';
import { loginUser } from '../../store/action-creators/userActions';
import { connect } from "react-redux";
import LoginComponent from '../../components/LoginComponent/LoginComponent';

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    var data = {};
    var inputs = event.target.elements;

    for (var i = 0; i < inputs.length - 1; i++) {
      data[inputs[i].name] = inputs[i].value;
    }

    var res = await this.props.login(data)
    if (res.data.success)
      this.props.history.push("/index");
    else
      alert(res.data.message);
  }

  render() {
    return (
        <div>
            <LoginComponent handleSubmit={this.handleSubmit}/>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loginData: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch(loginUser(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);