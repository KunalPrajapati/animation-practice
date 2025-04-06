import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Animated, { Easing, Keyframe } from 'react-native-reanimated';

export default function KeyFrameAnimations() {
    const [visible, setVisible] = useState(true);

    const enteringAnimation = new Keyframe({
        0: {
            opacity: 0,
            transform: [
                { translateY: 50 },
                { rotate: '45deg' },
                { skewX: '0deg' },
                { scale: 0 },
            ],
        },
        50: {
            opacity: 0.5,
            transform: [
                { translateY: 25 },
                { rotate: '0deg' },
                { skewX: '15deg' },
                { scale: 0.5 },
            ],
            easing: Easing.out(Easing.quad),
        },
        100: {
            opacity: 1,
            transform: [
                { translateY: 0 },
                { rotate: '0deg' },
                { skewX: '0deg' },
                { scale: 1 },
            ],
        },
    }).duration(1000);

    const exitingAnimation = new Keyframe({
        0: {
            opacity: 1,
            transform: [{ translateY: 0 }, { rotate: '0deg' }],
        },
        10: {
            opacity: 1,
            transform: [{ translateY: 25 }, { rotate: '0deg' }],
            easing: Easing.exp,
        },
        50: {
            opacity: 0.5,
            transform: [{ translateY: -100 }, { rotate: '60deg' }],
        },
        100: {
            opacity: 0,
            transform: [{ translateY: -300 }, { rotate: '120deg' }],
        },
    }).duration(1000);

    const toggleVisibility = () => {
        setVisible(prev => !prev);
    };

    return (
        <View style={styles.container}>
            {visible && (
                <Animated.View
                    style={styles.box}
                    entering={enteringAnimation}
                    exiting={exitingAnimation}
                >
                    <Pressable
                        onPress={toggleVisibility}
                        style={styles.button}
                    />
                </Animated.View>
            )}
            <Button title="Animate Box" onPress={toggleVisibility} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: '100%',
        height: '100%',
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: '#4CAF50',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
    },
});