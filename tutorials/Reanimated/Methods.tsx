/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-inline-styles */
import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withClamp, withDelay, withRepeat, withSequence, withSpring, withTiming } from 'react-native-reanimated';

export default function Methods() {

    const traslateX = useSharedValue(0);//V - value initialization

    const animatedStyle = useAnimatedStyle(() => {//C - component creation
        return {
            transform: [{ translateX: traslateX.value }],
        };
    }
    );

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Animated.View
                style={[{ width: 100, height: 100, backgroundColor: 'blue' }, animatedStyle]}

            />
            <Button title="withTiming" onPress={() => traslateX.value = withTiming(200, { duration: 1000 })} />
            <Button title="withSpring" onPress={() => traslateX.value = withSpring(0, { damping: 100, stiffness: 10000 })} />
            <Button title="withDecay" onPress={() => traslateX.value = withSpring(10, { damping: 100, stiffness: 10000 })} />
            <Button title="withSequence" onPress={() => traslateX.value = withSequence(
                withTiming(200, { duration: 1000 }),
                withSpring(0, { damping: 100, stiffness: 10000 }),
            )}/>
            <Button title="withDelay" onPress={() => traslateX.value = withDelay(1000, withTiming(200, {duration: 1000}))} />
            <Button title="withRepeat" onPress={() => traslateX.value = withRepeat(
                withTiming(200, { duration: 1000 }),
                3, // number of times to repeat
                true,
            )} />
            <Button title="clamp" onPress={() => {
                traslateX.value = withClamp(
                {
                    min: -200,
                    max: 200,
                },
                withTiming(200, { duration: 1000 }),
            );
            }}
            />
        </View>
    );
}

const styles = StyleSheet.create({});
