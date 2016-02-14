import React, { Component, PropTypes } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>{this.props.message}</h1>
    );
  }
}

App.propTypes = {
  message: PropTypes.string,
};

App.defaultProps = {
  message: 'New React App',
};

export default App;
