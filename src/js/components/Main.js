'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as firebase from 'firebase';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 10
    };
  }

  componentWillMount() {
    this.props.dispatch({type: 'HELLO'});
  }

  componentDidMount() {
    const rootRef = firebase.database().ref();
    const speedRef = rootRef.child('speed');
    speedRef.on('value', snap => {
      this.setState({
        speed: snap.val()
      });
    });
  }

  render() {
    console.log(this.props.test)
    return (
      <div className="hello-form">
        <p>{this.state.speed}</p>
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

