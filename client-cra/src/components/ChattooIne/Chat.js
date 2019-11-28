import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import List from './List';
import './Chat.css';

class Chat extends Component {
constructor() {
    super();
    // Initial state...
  this.state = {
    task: '',
    items: []
      };
  }

UNSAFE_componentWillMount() {
// Setting default tasks...
this.setState({
    items: [
          {
            id: uuidv4(),
            task: 'Pay the rent',
            completed: false
          },
          {
            id: uuidv4(),
            task: 'Go to the gym',
            completed: false
          },
          {
            id: uuidv4(),
            task: 'Do my homework',
            completed: false
          }
        ]
      });
  }

  handleOnChange = e => {
    const { target: { value } } = e;
    
    // Updating our task state with the input value...
        this.setState({
    task: value
        });
      }

  handleOnSubmit = e => {
    // Prevent default to avoid the actual form submit...
        e.preventDefault();
    
        // Once is submited we reset the task value and we push  
        // the new task to the items array.
    if (this.state.task.trim() !== '') {
          this.setState({
            task: '',
    items: [
              ...this.state.items,
              {
    id: uuidv4(),
    task: this.state.task,
    complete: false
              }
            ]
          });
        }
      }

      markAsCompleted = id => {
        // First, make a copy of the existing items
        const [...items] = this.state.items
        // Then find the index of the item you want to modify
        const index = items.findIndex(task => task.id === id)
        // Now you can replace the item with a modified copy of the found item
        const foundItem = items[index]
        items[index] = { ...foundItem, completed: !foundItem.completed }
        // Finally, set the items to the modified copy of the original array
        this.setState({ items });
      }

  removeTask = id => {
    // Filtering the tasks by removing the specific task id...
    const filteredTasks = this.state.items.filter(
          task => task.id !== id
        );
    
    // Updating items state...
        this.setState({
          items: filteredTasks
        });
      }      

render() {
return (
      <div className="Chat">
        <h1>Chat Messages:</h1>
        <form onSubmit={this.handleOnSubmit}>
          <input 
            value={this.state.task} 
            onChange={this.handleOnChange} 
          />
        </form>

        <List
items={this.state.items}
markAsCompleted={this.markAsCompleted}
removeTask={this.removeTask}
        />
      </div>
    );
  }
}

export default Chat;