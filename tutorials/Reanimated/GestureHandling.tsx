import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';

const GestureHandling = () => {

    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const scale = useSharedValue(1);
    const rotation = useSharedValue(0);

    // Gesture Handlers - these are the functions that will be called when the gesture is detected
    const tapGesture = Gesture.Tap().numberOfTaps(2).onEnd(() => {
        translateX.value = withSpring(40);
        translateY.value = withSpring(0);
        scale.value = withSpring(2);
        rotation.value = withSpring(50);
    });

    const panGesture = Gesture.Pan().onUpdate((event) => {
        translateX.value = event.translationX;
        translateY.value = event.translationY;
    });


    const pinchGesture = Gesture.Pinch().onUpdate((event) => {
        scale.value = event.scale;
    });

    const rotateGesture = Gesture.Rotation().onUpdate((event) => {
        rotation.value = event.rotation;
    });

    const raceGesture = Gesture.Race(panGesture, pinchGesture, rotateGesture);
    const simultaneousGesture = Gesture.Simultaneous(panGesture, pinchGesture, rotateGesture);
    const exclusiveGesture = Gesture.Exclusive(panGesture, pinchGesture, rotateGesture);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: translateX.value },
                { translateY: translateY.value },
                { scale: scale.value },
                { rotate: `${rotation.value}deg` },
            ],
        };
    });

    return (
        <GestureHandlerRootView style={styles.container}>

            {/* only a single component is passed in the gesture detector else it won't be able to detect in which component the gesture has happened */}
            <GestureDetector gesture={Gesture.Simultaneous(tapGesture, simultaneousGesture)}>
                <Animated.View
                    style={[styles.box, animatedStyle]}
                >
                    <Text style={styles.text}>
                        Tap Me
                    </Text>
                </Animated.View>
            </GestureDetector>
        </GestureHandlerRootView>
    );
};

export default GestureHandling;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: 150,
        height: 150,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
