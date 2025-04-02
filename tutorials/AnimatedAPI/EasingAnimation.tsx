import { View, Text, StyleSheet, Animated, useAnimatedValue, Button, Easing } from 'react-native';
import React from 'react';

const EasingAnimation = () => {


    const animatedValue = useAnimatedValue(0);

    const startAnimation = (easingFunction: (value: number) => number) => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 1000,
            easing: easingFunction,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, {
                transform: [
                    {
                        translateX: animatedValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 200],
                        }),
                    },
                ],
            }]} />

            <Button title="step0" onPress={() => startAnimation(Easing.step0)} />
            <Button title="step1" onPress={() => startAnimation(Easing.step1)} />
            <Button title="linear" onPress={() => startAnimation(Easing.linear)} />
            <Button title="circle" onPress={() => startAnimation(Easing.circle)} />
            <Button title="bounce" onPress={() => startAnimation(Easing.bounce)} />
            <Button title="sin" onPress={() => startAnimation(Easing.sin)} />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        borderRadius: 20,
    },
});


export default EasingAnimation;
