import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Animated, { useAnimatedKeyboard, useAnimatedStyle } from 'react-native-reanimated';

const KeyboardHandler = () => {

    const [value, setValue] = useState('');
    const keyboard = useAnimatedKeyboard();


    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: -keyboard.height.value,
                },
            ],
        };
    });

    return (
        <Animated.View style={[styles.container, animatedStyle]}>
            <TextInput
                value={value}
                onChangeText={setValue}
                style={styles.input}
                placeholder="Enter the text"
            />
        </Animated.View>
    );
};

export default KeyboardHandler;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    input: {
        backgroundColor: '#fff',
        padding: 10,
        borderWidth: 1,
        borderColor: 'orange',
        margin: 20,
        borderRadius: 10,
        width: '90%',
    },
});
