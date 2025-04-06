import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  BounceIn,
  BounceOut,
  LightSpeedInLeft,
  LightSpeedOutRight,
  SlideInUp,
  SlideOutDown,
  ZoomIn,
  ZoomOut,
  FlipInYLeft,
  FlipOutYLeft,
} from 'react-native-reanimated';

const animations = [
  { name: 'Fade', entering: FadeIn, exiting: FadeOut },
  { name: 'Bounce', entering: BounceIn, exiting: BounceOut },
  { name: 'LightSpeed', entering: LightSpeedInLeft, exiting: LightSpeedOutRight },
  { name: 'Slide', entering: SlideInUp, exiting: SlideOutDown },
  { name: 'Zoom', entering: ZoomIn, exiting: ZoomOut },
  { name: 'Flip', entering: FlipInYLeft, exiting: FlipOutYLeft },
];

const AnimatedBox = ({ label, entering, exiting }: any) => {
  return (
    <Animated.View
      entering={entering}
      exiting={exiting}
      style={styles.box}
    >
      <Text style={styles.boxText}>{label}</Text>
    </Animated.View>
  );
};

const AnimationsShowcase = () => {
  const [show, setShow] = useState(true);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>🎬 Animation Showcase</Text>
      <Button title={show ? 'Hide Boxes' : 'Show Boxes'} onPress={() => setShow(prev => !prev)} />
      {animations.map((anim, idx) => (
        <View key={idx} style={styles.row}>
          {show && (
            <AnimatedBox
              label={anim.name}
              entering={anim.entering}
              exiting={anim.exiting}
            />
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default AnimationsShowcase;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'orange',
  },
  row: {
    marginVertical: 10,
  },
  box: {
    width: 200,
    height: 80,
    backgroundColor: '#8e44ad',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  boxText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
