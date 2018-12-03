import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers/index'
import { Header } from './src/components/common/index'
import LibraryList from './src/components/LibraryList'

class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText='Tech Used' />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}

export default App
