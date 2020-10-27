import React, { Component } from 'react';
import '../../style/Student.scss';

class Student extends Component {
  render() {
    return (
      <span className="student">
        {this.props.data.id}. {this.props.data.name}
      </span>
    );
  }
}

export default Student;
