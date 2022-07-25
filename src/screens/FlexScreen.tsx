import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FlexScreen = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.box1}>Hello 1</Text>
      <Text style={Styles.box2}>Hello 2</Text>
      <Text style={Styles.box3}>Hello 3</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', // stretch, baseline, flex-start, flex-end
  },
  box1: {
    borderWidth: 2,
    borderColor: '#fff',
    fontSize: 30,
  },
  box2: {
    borderWidth: 2,
    borderColor: '#fff',
    fontSize: 30,
  },
  box3: {
    borderWidth: 2,
    borderColor: '#fff',
    fontSize: 30,
  },
});

export default FlexScreen;
