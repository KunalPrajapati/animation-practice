import { View, Text, StyleSheet, Animated, useAnimatedValue, Easing, PanResponder } from 'react-native';
import React, { useEffect, useRef } from 'react';

const Interpolation = () => {

    const animatedValue = useAnimatedValue(0);

    const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null,
            { dx: pan.x, dy: pan.y }
        ], { useNativeDriver: false }),
        onPanResponderRelease: () => {
            Animated.spring(pan, {
                toValue: { x: 0, y: 0 },
                useNativeDriver: false,
            }).start();
        },
    });
    const diffClampY = useRef(Animated.diffClamp(pan.y, -100, 100)).current;
    const diffClampX = useRef(Animated.diffClamp(pan.x, -100, 100)).current;

    const startInterpolation = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animatedValue, {
                    toValue: 1,
                    duration: 2000,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),
                Animated.timing(animatedValue, {
                    toValue: 0,
                    duration: 2000,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),
            ])
        ).start();
    };

    useEffect(() => startInterpolation(), []);


    return (
        <View style={styles.container}>
            <Animated.View
                style={[styles.box, {
                    transform: [{
                        translateX: animatedValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-200, 200],
                        }),
                    }],
                }]}
            />
            <Animated.View
                {...panResponder.panHandlers}
                style={[styles.box2, {
                    transform: [
                        {translateX: diffClampX},
                        {translateY: diffClampY},
                    ],
                }]}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        borderRadius: 100,
    },
    box2: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 100,
        marginTop: 20,
    },
});


export default Interpolation;
