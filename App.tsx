/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {SafeAreaView} from 'react-native';
import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
import CounterScreen from './src/screens/CounterScreen';
import DimensionsScreen from './src/screens/DimensionsScreen';
import FlexScreen from './src/screens/FlexScreen';
import PositionScreen from './src/screens/PositionScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionsScreen /> */}
      {/* <PositionScreen /> */}
      <FlexScreen />
    </SafeAreaView>
  );
};

export default App;
