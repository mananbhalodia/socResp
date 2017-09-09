'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch({type: 'HELLO'});
  }

  render() {
    console.log(this.props.test)
    return (
      <div className="hello-form">
        <p>Hello World!</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    test: state.test
  }
}

export default withRouter(connect(mapStateToProps)(Main));

