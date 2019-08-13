import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addBook} from './AddBookAction';
import store from "./store"
class CreateBook extends Component {
  
  state ={
    value: ''
  }
  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

   handleSubmit = (e) => {
    e.preventDefault();
    this.props.addBookMethod(this.state.value);
  }
  

  render() {
    console.log(this.props)
    return (
      <div>
       <form onSubmit={this.handleSubmit}>
        <label>
          Book Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Add Book" />
      </form>

      </div>
    )
  }

}

const mapDispatchToProps =(dispatch) => {
  return{
    addBookMethod: (name) => {dispatch(addBook(name))}
  }
}

export default connect(null, mapDispatchToProps)(CreateBook)
