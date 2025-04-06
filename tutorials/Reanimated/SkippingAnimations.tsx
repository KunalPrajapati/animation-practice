import { Button, LayoutAnimation, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Animated, { LayoutAnimationConfig, PinwheelIn, PinwheelOut } from 'react-native-reanimated';

const SkippingAnimations = () => {

    const [outer, setOuter] = useState<boolean>(true);
    const [inner, setInner] = useState<boolean>(true);

    function toggleString(value: boolean) {
        return value ? 'Hide ' : 'Show ';
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonColumn}>
                <Button
                    title={toggleString(outer) + 'outer'}
                    onPress={() => {
                        setOuter(!outer);
                    }} />
                <Button
                    title={toggleString(inner) + 'innter'}
                    onPress={() => {
                        setInner(!inner);
                    }} />
            </View>
            <LayoutAnimationConfig skipEntering>
                {
                    outer && (
                        <Animated.View style={styles.outerBox} entering={PinwheelIn} exiting={PinwheelOut}>
                            <LayoutAnimationConfig skipEntering skipExiting>
                                {
                                    inner && (
                                        <Animated.View
                                            style={styles.box}
                                            entering={PinwheelIn}
                                            exiting={PinwheelOut}
                                        />
                                    )
                                }
                            </LayoutAnimationConfig>
                        </Animated.View>
                    )}
            </LayoutAnimationConfig>
        </View>
    );
};

export default SkippingAnimations;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonColumn: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 90,
    },
    outerBox: {
        width: 150,
        height: 150,
        backgroundColor: '#b58df1',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        margin: 20,
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: '#f1b58d',
        borderRadius: 20,
    },
});
