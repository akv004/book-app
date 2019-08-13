import React, { Component } from 'react';
import {connect} from 'react-redux';
import {ListGroup} from 'react-bootstrap';
 class BookList extends Component {
  
  render() {

    return (
      <ListGroup>
        {
          this.props.bookList.map((d) => 
          <ListGroup.Item variant="primary">{d}</ListGroup.Item>)
        }
      </ListGroup>
    )
  }
}

const mapStateToProps =(state) => {
  return{
    bookList: state.books
  }
}

export default connect(mapStateToProps, null)(BookList)
