/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import Animated, { useSharedValue, withDecay, withSpring, withTiming } from 'react-native-reanimated';

const RnBasic = () => {

  const width = useSharedValue(100);


  const handlePress = () => {
    // width.value = withTiming(width.value + 50, {
    //   duration: 1000,
    // })
    // width.value = withSpring(
    //   width.value + 50, {
    //   duration: 1000,
    // }
    // );
    width.value = withDecay({
      velocity: 1000,
      clamp: [0, 200],
      deceleration: 0.997,
    });
  };

  return (
    <View>
      <Animated.View
        style={{
          width: width,
          height: 100,
          backgroundColor: 'blue',
        }}
      />

      <Button title='Click' onPress={handlePress} />
    </View>
  );
};

export default RnBasic;
