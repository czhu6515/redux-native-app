import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers/index'
import { Header } from './src/components/common/index'

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText='Tech Used' />
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </Provider>
    );
  }
}

export default App
