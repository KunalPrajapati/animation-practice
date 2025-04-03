/* eslint-disable react-native/no-inline-styles */

import { View, Text, SafeAreaView, LayoutAnimation } from 'react-native';
import React from 'react';
import NoLibrary from './tutorials/AnimatedAPI/NoLibrary';
import Basics from './tutorials/AnimatedAPI/Basics';
import Value from './tutorials/AnimatedAPI/Value';
import Interpolation from './tutorials/AnimatedAPI/Interpolation';
import AnimTypes from './tutorials/AnimatedAPI/AnimTypes';
import EasingAnimation from './tutorials/AnimatedAPI/EasingAnimation';
import NestingAnimationFunc from './tutorials/AnimatedAPI/NestingAnimationFunc';
import Event from './tutorials/AnimatedAPI/Event';
import CustomAnimatedComponent from './tutorials/AnimatedAPI/CustomAnimatedComponent';
import LayoutAnimations from './tutorials/AnimatedAPI/LayoutAnimations';


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#222' }}>
      <Text style={{color: '#fff', fontSize: 24, textAlign: 'center', textDecorationLine: 'underline'}}>Animations</Text>
      {/* Animated API */}
      {/* <NoLibrary /> */}
      {/* <Basics /> */}
      {/* <Value /> */}

      {/* interpolation, extrapolation, differential clamp */}
      {/* <Interpolation /> */}

      {/* <AnimTypes/> */}
      {/* <EasingAnimation /> */}
      {/* <NestingAnimationFunc /> */}
      {/* <Event/> */}
      {/* <CustomAnimatedComponent/> */}
      <LayoutAnimations />

    </SafeAreaView>
  );
};

export default App;
