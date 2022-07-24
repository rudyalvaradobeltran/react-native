/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {SafeAreaView} from 'react-native';
import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
import CounterScreen from './src/screens/CounterScreen';
import DimensionsScreen from './src/screens/DimensionsScreen';
import PositionScreen from './src/screens/PositionScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionsScreen /> */}
      <PositionScreen />
    </SafeAreaView>
  );
};

export default App;
