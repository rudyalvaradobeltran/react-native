import React from 'react';
import {Text, View} from 'react-native';

const HelloWorldScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'red', justifyContent: 'center'}}>
      <Text style={{fontSize: 50, textAlign: 'center'}}>Hola mundis</Text>
    </View>
  );
};

export default HelloWorldScreen;
