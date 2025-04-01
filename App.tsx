
import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import NoLibrary from './tutorials/AnimatedAPI/NoLibrary';
import Basics from './tutorials/AnimatedAPI/Basics';
import Value from './tutorials/AnimatedAPI/Value';
import Interpolation from './tutorials/AnimatedAPI/Interpolation';
import AnimTypes from './tutorials/AnimatedAPI/AnimTypes';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#222' }}>
      <Text style={{color: '#fff', fontSize: 22, textAlign: 'center'}}>Animations</Text>
      {/* Animated API */}
      {/* <NoLibrary /> */}
      {/* <Basics /> */}
      {/* <Value /> */}
      {/* <Interpolation /> */}
      <AnimTypes/>

    </SafeAreaView>
  );
};

export default App;
