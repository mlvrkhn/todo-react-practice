// ToDo.js
import React, { Component } from 'react';
import Overview from './Overview'

export default class ToDo extends Component {
  constructor(props) {
    super(props);
    const { tasks } = props;
    this.state = { tasks }
  }

  handleChange = event => {
    this.setState({
      task: this._getInputValue(event)
    })
  };
  taskOnSubmit = event => {
    event.preventDefault();
    this.setState({ tasks: this._createTasks(), task: '' })
  }
  handleDelete = nr => {
    this.setState({ tasks: this.state.tasks.filter(task => task.nr !== nr) });
  };
  _getInputValue = (e) => e.target.value;
  _getNextNumber = () => this.state.tasks.reduce((acc, task) => acc = acc > task.nr ? acc : task.nr, 0) + 1;
  _createTasks = () => {
    return this.state.tasks.concat({ nr: this._getNextNumber(), desc: this.state.task })
  };
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
