import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header,
         CardSection,
         Button,
       } from './components/common';

const App = () => {
  return(
    <Provider store={createStore(reducers)}>
    <View>
      <Header headerText="Tech-Stack" />
      <CardSection>
        <Button>Test Button</Button>
      </CardSection>
    </View>
    </Provider>
  );
};

export default App;
