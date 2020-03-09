import React from 'react';
import TodoList from './components/TodoList'
import ListForm from './components/TodoForm'
const things = [
{
  name:'meet mvp',
  id:1,
  done:false
},
{
  name:'git pushed',
  id:2,
  done:false
}

]
class App extends React.Component {
constructor(){
  super()
  this.state = {
    things:things,
    name: ''
  }
}

toggleDone = clickedItemId => {
  this.setState({
    things:this.state.things.map(item => {
      if (item.id === clickedItemId){
        return {
          ...item,
         done: !item.done
        }
      }else {
        return item
      }
    })
  })
}

clearForm = e => {
  e.preventDefault();
  this.setState({
    things: this.state.things.filter(item => !item.done)

  })
}

addItem = itemName => {
  const newItem = {
    name: itemName,
    id:new Date(),
    done:false
  }
  this.setState({
    things: [...this.state.things, newItem]
  })
}
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ListForm addItem={this.addItem}/>
        <div>
        <TodoList
        things = {this.state.things}
        toggleDone={this.toggleDone}
        />
         <button className="clear-btn" onClick={this.clearForm}>
              CLEAR
            </button>
        </div>
      </div>
    );
  }
}

export default App;
