import React from 'react'
import { render } from '@testing-library/react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            item:''
        }
    }


handleChanges = e => {
    this.setState({
        item: e.target.value

    })
}

handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.item)
}


render() {
    return(
        <form onSubmit= {this.handleSubmit}>
            
<input 
type='text'
name='item'
value= {this.state.item}
onChange={this.handleChanges}
placeholder= 'add new to do here'
/>
<button>add</button>
        </form>
    )
}
}

export default TodoForm