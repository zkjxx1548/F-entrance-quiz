import React, { Component } from 'react';
import Student from './Student';
import '../../style/Students.scss';

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    fetch('http://localhost:8080/get/students', {
      method: 'GET',
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState({
          data: res,
        });
      });
  };

  getNewData = () => {
    const name = document.getElementById('add_student-button').value;
    const newData = this.state.data.concat([
      {
        id: this.state.data.length + 1,
        name,
      },
    ]);
    return newData;
  };

  postNewStudent = (name) => {
    fetch('http://localhost:8080/add/student', {
      method: 'POST',
      body: name,
    });
  };

  keyUpButton = (e) => {
    if (e.keyCode === 13) {
      const newData = this.getNewData();
      const studentName = newData[newData.length - 1].name;
      this.setState({
        data: newData,
      });
      this.postNewStudent(studentName);
    }
  };

  render() {
    return (
      <div className="student-list">
        <h1 className="title">学员列表</h1>
        <div className="list">
          {this.state.data.map((e) => (
            <Student key={e.id} data={e} />
          ))}
          <input
            name="add_student-button"
            id="add_student-button"
            className="student"
            type="text"
            onKeyUp={this.keyUpButton}
            placeholder="+ 添加学员"
          />
        </div>
      </div>
    );
  }
}

export default Students;
