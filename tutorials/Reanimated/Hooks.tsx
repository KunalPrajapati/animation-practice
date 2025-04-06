/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Animated, { useAnimatedRef, useAnimatedStyle, useDerivedValue, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

const Hooks = () => {

    // useDerivedValue - allows you to create a derived value based on other shared values. It is similar to useMemo in React, but it is specifically designed for Reanimated's shared values.

    // useAnimatedRef - allows you to create a reference to an animated component. This is useful when you want to access the properties of an animated component in a more efficient way.

    // useAnimatedProps - allows you to create animated props for a component. This is useful when you want to animate the props of a component without having to create a new animated component.

    //createAnimatedComponent - allows you to create a new animated component. This is useful when you want to create a new component that has animated properties.

    const progress = useSharedValue(0);
    const animatedRef = useAnimatedRef();
    const borderRadius = useDerivedValue(() => {
        return progress.value * 200;
    });

    const animatedStyle = useAnimatedStyle(() => {
        return {
            borderRadius: borderRadius.value,
        };
    });

    useEffect(() => {
        progress.value = withRepeat(
            withTiming(1, { duration: 500 }),
            -1, // infinite repeat
            true, //reverse
        );
    });


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View
                ref={animatedRef}
                style={[styles.animatedBox,animatedStyle]}
            />
        </View>
    );
};

export default Hooks;

const styles = StyleSheet.create({
    animatedBox: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
    },
});
