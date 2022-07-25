import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FlexScreen = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.box1}>Hello</Text>
      <Text style={Styles.box2}>Hello</Text>
      <Text style={Styles.box3}>Hello</Text>
      <Text style={Styles.box1}>Hello</Text>
      <Text style={Styles.box2}>Hello</Text>
      <Text style={Styles.box3}>Hello</Text>
      <Text style={Styles.box1}>Hello</Text>
      <Text style={Styles.box2}>Hello</Text>
      <Text style={Styles.box3}>Hello</Text>
      <Text style={Styles.box1}>Hello</Text>
      <Text style={Styles.box2}>Hello</Text>
      <Text style={Styles.box3}>Hello</Text>
      <Text style={Styles.box1}>Hello</Text>
      <Text style={Styles.box2}>Hello</Text>
      <Text style={Styles.box3}>Hello</Text>
      <Text style={Styles.box1}>Hello</Text>
      <Text style={Styles.box2}>Hello</Text>
      <Text style={Styles.box3}>Hello</Text>
      <Text style={Styles.box1}>Hello</Text>
      <Text style={Styles.box2}>Hello</Text>
      <Text style={Styles.box3}>Hello</Text>
      <Text style={Styles.box1}>Hello</Text>
      <Text style={Styles.box2}>Hello</Text>
      <Text style={Styles.box3}>Hello</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
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
