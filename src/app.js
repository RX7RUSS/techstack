import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header,
         CardSection,
         Button,
         Input
       } from './components/common';

const App = () => {
  return(
    <Provider store={createStore(reducers)}>
    <View>
      <Header headerText="Tech-Stack" />
      <CardSection>
        <Button>Press Me!</Button>
      </CardSection>
    </View>
    </Provider>
  );
};

export default App;
