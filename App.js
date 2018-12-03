import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers/index'

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Text>Open up App.js to start working on your app!</Text>
      </Provider>
    );
  }
}

export default App
