/* eslint-disable react-native/no-inline-styles */

import { Text, SafeAreaView } from 'react-native';
import React from 'react';
import ListAnimations from './tutorials/Reanimated/ListAnimations';
import KeyFrameAnimations from './tutorials/Reanimated/KeyFrameAnimations';
import Worklets from './tutorials/Reanimated/Worklets';
import SkippingAnimations from './tutorials/Reanimated/SkippingAnimations';
import LayoutTransition from './tutorials/Reanimated/LayoutTransition';
import GestureHandling from './tutorials/Reanimated/GestureHandling';
import Threading from './tutorials/Reanimated/Threading';


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
      {/* <LayoutAnimations /> */}
      {/* <ScrollEvent /> */}


      {/* Reanimated */}

      {/* <RnBasic /> */}
      {/* <Methods /> */}
      {/* <Hooks /> */}
      {/* <ScrollHandler /> */}
      {/* <ScrollToFn /> */}
      {/* <AnimatedScrollOffset /> */}
      {/* <KeyboardHandler /> */}
      {/* <AnimationsShowcase /> */}
      {/* <LayoutTransition /> */}
      {/* <SkippingAnimations/> */}
      {/* <ListAnimations/> */}
      {/* <KeyFrameAnimations/> */}
      {/* <Worklets/> */}
      {/* <GestureHandling/> */}
      <Threading/>

    </SafeAreaView>
  );
};

export default App;
