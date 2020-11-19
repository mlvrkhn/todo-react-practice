import React, { Component } from 'react';
import Overview from './components/Overview'


class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        {
        nr: '1',
        desc: 'Test 1',
        id: '1'
      },
      {
        nr: '2',
        desc: 'Test 2',
        id: '2'
      },
      {
        nr: '3',
        desc: 'Test 3',
        id: '3'
      }
    ],
      task: ''
    };
  }
  handleChange = event => {
    this.setState({
      task: event.target.value,
    })
  };
  
  taskOnSubmit = event => {
    event.preventDefault();

    this.setState( prevState => ({
      tasks: {
        ...prevState.tasks,
        name: 'erni'
      }
    }))
  }

  render() {
    const { task, tasks } = this.state;

    return (
      <div className="col-6 mx-auto mt-5">
          <h1>Task form</h1>
          <form onSubmit={this.taskOnSubmit}>
            <div className="form-group">
              <label htmlFor="taskInput">Enter task</label>
              <input type="text" id="taskInput" className="form-control" onChange={this.handleChange} value={task}></input>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Add task</button>
            </div>
          </form>
          <Overview tasks={tasks}/>
      </div>
    )
  }
}

export default App;
