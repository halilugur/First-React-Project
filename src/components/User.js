import React, { Component } from "react";
import PropTypes from "prop-types";

class User extends Component {
  state = {
    isVisisble : false
  }
  static defaultProps = {
    name: "NULL",
    salary: "NULL",
    department: "NULL"
  };

  onClickEvent = (number,e) => {
    this.setState({
      isVisisble : !this.state.isVisisble
    })
  }

  render() {
    // Destructing
    const { name, department, salary } = this.props;
    const {isVisisble} = this.state;
    return (
      <div className="col-md-8 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="d-inline" onClick = {this.onClickEvent}>{name}</h4>
            <i className="far fa-trash-alt" style={{ cursor: "pointer" }} />
          </div>
          {
            isVisisble ? 
            <div className="card-body">
            <p className="cart-text">Maaş : {salary}</p>
            <p className="cart-text">Department : {department}</p>
          </div>
          :null
          }
          
        </div>
      </div>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired
};

export default User;
