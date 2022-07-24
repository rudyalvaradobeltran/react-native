import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Fab from '../components/Fab/Fab';

const CounterScreen = () => {
  const [count, setCount] = useState(10);

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Counter: {count}</Text>
      <Fab title="-1" onPress={() => setCount(count - 1)} position="BL" />
      <Fab title="+1" onPress={() => setCount(count + 1)} position="BR" />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    top: -15,
  },
});

export default CounterScreen;
