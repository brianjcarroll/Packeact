if (module.hot) {
  module.hot.accept();
}

require('../css/main.less');

import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';

// TODO: figure out a good way to manage this shit.
// require('../css/main.less');

const Guitaramigo = {
  init() {
    ReactDOM.render(<App />, document.getElementById('app'));
  },
};

if (
  document.readyState === 'complete' ||
  document.readyState === 'interactive' ||
  document.readyState === 'loaded'
) {
  // App.init();
} else {
  document.addEventListener('DOMContentLoaded', Guitaramigo.init);
}
