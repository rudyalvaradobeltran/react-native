/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from 'react-native';

// const {width, height} = Dimensions.get('window');

const DimensionsScreen = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={Styles.container}>
        <View style={{...Styles.purpleBox, width: width * 0.5}} />
        <View style={Styles.orangeBox} />
        <Text style={Styles.title}>{`W: ${width}, H: ${height}`}</Text>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 600,
    backgroundColor: 'red',
  },
  purpleBox: {
    backgroundColor: '#c36aff',
    width: '50%',
    height: '50%',
  },
  orangeBox: {
    backgroundColor: '#ff996a',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default DimensionsScreen;
