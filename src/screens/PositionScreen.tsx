import React from 'react';
import {View, StyleSheet} from 'react-native';

const PositionScreen = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.purpleBox} />
      <View style={Styles.orangeBox} />
      <View style={Styles.greenBox} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'beige',
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
  },
  purpleBox: {
    backgroundColor: '#c36aff',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: '#fff',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  orangeBox: {
    backgroundColor: '#ff996a',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: '#fff',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  greenBox: {
    backgroundColor: '#77ff95',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    // ...StyleSheet.absoluteFillObject
  },
});

export default PositionScreen;
