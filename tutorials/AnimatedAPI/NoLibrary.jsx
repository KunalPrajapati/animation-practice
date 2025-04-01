import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

const NoLibrary = () => {

    const [position, setPosition] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
            setPosition(prev => (prev < 200 ? prev + 5 : 0));
        }, 50);

        return () => clearInterval(interval);
    },[]);

  return (
    // This is a simple animation that moves the box from left to right using JS THREAD
    <View >
      <View style={[styles.box, {marginLeft: position}]} />
    </View>
  );
};


const styles = StyleSheet.create({

    box: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        borderRadius: 20,
    }

})



export default NoLibrary;