import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const Worklets = () => {

    const translateX = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: translateX.value },
            ],
        };
    });

    const moveBox = () => {
        'worklet'; // This is a worklet - it will run on the UI thread
        translateX.value = withSpring(translateX.value === 0 ? 150 : 0);
    };

    return (
        <View style={styles.container}>
            <Pressable
                onPress={moveBox}
            >
                <Animated.View
                    style={[styles.box, animatedStyle]}
                />
            </Pressable>
        </View>
    );
};

export default Worklets;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        borderRadius: 10,
    },
}
);
