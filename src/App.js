import React, { Component } from 'react';
import Overview from './components/Overview'


class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        {
        nr: 1,
        desc: 'zzzzzzzzzzzzaaaaaaaaa'
        },
        {
        nr: 2,
        desc: 'zzzzzzzzzzzzaaaaaaaaa'
        },
        {
        nr: 3,
        desc: 'zzzzzzzzzzzzaaaaaaaaa'
        },
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

    this.setState({
      tasks: this.state.tasks.concat(
        {
          nr: this.state.tasks.reduce((acc, task) => acc = acc > task.nr ? acc : task.nr, 0) + 1,
          desc: this.state.task
        }
      ),
      task: ''
    })
  }
  handleDelete = nr => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.nr !== nr)
    });
  };

  // test with loop - maybe useful for updating many values at once, but why?
  //   this.setState((state) => {
  //     state.tasks.map(task => {
  //       task.nr += 1;
  //       console.log(task);
  //       return task;

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
          <Overview tasks={tasks} handleDelete={this.handleDelete}/>
      </div>
    )
  }
}

export default App;
