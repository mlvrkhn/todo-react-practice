import React, { Component } from 'react';
import ToDo from './components/ToDo';

export default class App extends Component {

  render() {
    const initTodos = [{
      tasks: [
      {
      nr: 1,
      desc: 'Feed the cat'
      },
      {
      nr: 2,
      desc: 'Feed the dog'
      }
    ]}
  ]

    return (
      <div>
        <ToDo tasks={ initTodos } />
      </div>
    )
  }
}
