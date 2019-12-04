import React, { Component } from 'react';
import CreateAccountComponent from '../../components/CreateAccountComponent/CreateAccountComponent';
import {postNewUser} from '../../store/action-creators/userActions';
import { connect } from "react-redux";

class CreateAccountContainer extends Component {
    constructor(props){
        super(props);
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event){
        event.preventDefault();
        var data = {};
        var inputs = event.target.elements;

        for(var i = 0; i < inputs.length -1; i++){
            data[inputs[i].name] = inputs[i].value;
        }

        var res = await this.props.addUser(data)
        if(res.data.state !== 'ok')
            alert(res.data.state);
        else
            this.props.history.push("/index");
    }

    render() {
        return (
            <div>
                {/* <CreateAccountComponent handleSubmit={(e) => {this.handleSubmit(e)}}/> */}
                <CreateAccountComponent handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      user: state
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      addUser: data => dispatch(postNewUser(data))
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateAccountContainer);