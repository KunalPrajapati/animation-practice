/* eslint-disable react-native/no-inline-styles */
import { View, Text, StyleSheet, Animated, TouchableOpacity, useAnimatedValue } from 'react-native';
import React from 'react';


const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

const CustomAnimatedComponent = () => {

  const scaleValue = useAnimatedValue(1);

  const handlePressIn = () => {
    Animated.timing(scaleValue, {
      toValue: 1.5,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  const handlePressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <AnimatedTouchableOpacity onPressIn={handlePressIn} onPressOut={handlePressOut} style={[style.AnimatedButton, { transform: [{ scale: scaleValue }] }]}>
      <Text style={{color: '#fff', fontSize: 24, textAlign: 'center' }}>
        Press Me
      </Text>
    </AnimatedTouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
  },
  AnimatedButton: {
    backgroundColor: '#ff6347',
    padding: 20,
    borderRadius: 10,
    margin: 10,
    width: '50%',
    alignSelf: 'center',
  },

});

export default CustomAnimatedComponent;
