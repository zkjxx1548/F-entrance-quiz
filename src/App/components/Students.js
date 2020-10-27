import React, { Component } from 'react';
import Student from './Student';
import '../../style/Students.scss';

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: [
      //   {
      //     id: 1,
      //     name: 'zhou'
      //   },
      //   {
      //     id: 2,
      //     name: 'zhou'
      //   },
      //   {
      //     id: 3,
      //     name: 'zhou'
      //   },
      //   {
      //     id: 4,
      //     name: 'zhou'
      //   },
      //   {
      //     id: 5,
      //     name: 'zhou'
      //   },
      //   {
      //     id: 6,
      //     name: 'zhou'
      //   },
      //   {
      //     id: 7,
      //     name: 'zhou'
      //   },
      //   {
      //     id: 8,
      //     name: 'zhou'
      //   },
      //   {
      //     id: 9,
      //     name: 'zhou'
      //   },
      //   {
      //     id: 10,
      //     name: 'zhou'
      //   },
      //   {
      //     id: 11,
      //     name: 'zhou'
      //   },
      //   {
      //     id: 12,
      //     name: 'zhou'
      //   }
      // ]
      data: [],
    };
  }

  componentDidMount = () => {
    fetch('http://localhost:8080/students', {
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

  keyUpButton = (e) => {
    if (e.keyCode === 13) {
      this.setState({
        data: this.getNewData,
      });
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
