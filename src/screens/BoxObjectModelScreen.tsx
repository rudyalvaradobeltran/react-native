import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BoxObjectModelScreen = () => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>BoxObjectModel</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
  },
  title: {
    paddingHorizontal: 100,
    paddingVertical: 100,
    fontSize: 20,
    marginHorizontal: 20,
    // width: 150,
    borderWidth: 10,
    // backgroundColor: 'beige',
  },
});

export default BoxObjectModelScreen;
