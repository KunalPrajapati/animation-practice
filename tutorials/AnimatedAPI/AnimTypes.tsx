/* eslint-disable no-sequences */
import { View, Text, StyleSheet, Animated, useAnimatedValue, PanResponder } from 'react-native';
import React, { useEffect, useRef } from 'react';

const AnimTypes = () => {

  const decayValue = useAnimatedValue(0);
  const springValue = useAnimatedValue(0);
  const timingValue = useAnimatedValue(0);

  //decay animation
  const startDecay = () => {
    //object to slide and stop slowly
    Animated.decay(decayValue, {
      velocity: 0.9, //starting speed
      deceleration: 0.9, //how fast it slows down
      useNativeDriver: true,
    }).start();
  };

  const animatedX = decayValue.interpolate({
    inputRange: [0, 100],
    outputRange: [100, 200],
  });


  //spring animation
  const startSpring = () => {
    Animated.spring(springValue, {
      toValue: 1,
      friction: 5, //how fast it slows down
      tension: 10, //how fast it goes
      useNativeDriver: true,
    }).start();
  };


  //timing animation
  const startTiming = () => {
    Animated.timing(timingValue, {
      toValue: 1,
      duration: 1000, //duration of the animation
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    startDecay();
    startSpring();
    startTiming();
  }
  , []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box1, {
        transform: [
          { translateX: animatedX },
        ],
      }]} />
      <Animated.View style={[styles.box2, {
        transform: [
          {
            translateX: springValue.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 300],
            }),
          },
        ],
      }]}
      />
      <Animated.View style={[styles.box3, {
        transform: [
          {translateX: timingValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 300],
          })},
        ],
      }]} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    borderRadius: 20,
    marginVertical: 20,
  },
  box3: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    borderRadius: 20,
  },
})

export default AnimTypes;
