
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          todoList: [],
          activeItem: {
            id: null,
            title: '',
            completed: false,
          },
          editing: false,
      }

      this.fetchTasks = this.fetchTasks.bind(this)
  }

  componentDidMount() {
    this.fetchTasks();

  }

  fetchTasks() {
    console.log("Fetching...");
    fetch('http://127.0.0.1:8000/api/task-list/')
    .then(response => response.json())
    .then(data => 
      this.setState({
        todoList: data
      })
      )
  }

  render() {
      var tasks = this.state.todoList

      return (
          <div className="container">
            <div id="task-container">
              <div id="form-wrapper">
                <form id="form">
                  <div className="flex-wrapper">
                    <div style={{flex: 6}}>
                      <input className="form-control" id="title" type="text" name="title" placeholder="Add task..."></input>
                    </div>
                    <div style={{flex: 1}}>
                      <input className="btn btn-warning" id="submit" type="submit" name="Add"/>
                    </div>
                  </div>
                </form>
              </div>
              <div id="list-wrapper">
                {tasks.map(function(task, index) {
                  return (
                    <div key={index} className="task-wrapper flex-wrapper">
                      <span>{task.title}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
      )
  }
}

export default App;
