import { View, Text, StyleSheet, Animated, useAnimatedValue } from 'react-native';
import React, { useEffect } from 'react';

//loop, parallel , stagger(starts animation with a delay between them), delay, sequence


const NestingAnimationFunc = () => {

    const animValue1 = useAnimatedValue(0);
    const animValue2 = useAnimatedValue(0);

    useEffect(() => {
        // const sequenceAnimation = Animated.sequence([
        //     Animated.timing(animValue1, {
        //         toValue: 1,
        //         duration: 1000,
        //         useNativeDriver: true,
        //     }),
        //     Animated.timing(animValue2, {
        //         toValue: 1,
        //         duration: 1000,
        //         useNativeDriver: true,
        //     }),
        // ]).start();
        // sequenceAnimation.start();

        // const parallelAnimation = Animated.parallel([
        //     Animated.timing(animValue1, {
        //         toValue: 1,
        //         duration: 1000,
        //         useNativeDriver: true,
        //     }),
        //     Animated.timing(animValue2, {
        //         toValue: 1,
        //         duration: 1000,
        //         useNativeDriver: true,
        //     }),
        // ]);
        // parallelAnimation.start();

        // stagger(starts animation with a delay between them)
        // const staggerAnimation = Animated.stagger(500,[
        //     Animated.timing(animValue1, {
        //         toValue: 1,
        //         duration: 1000,
        //         useNativeDriver: true,
        //     }),
        //     Animated.timing(animValue2, {
        //         toValue: 1,
        //         duration: 1000,
        //         useNativeDriver: true,
        //     }),
        // ]);
        // staggerAnimation.start();

        // const loopAnimation = Animated.loop(
        //     Animated.timing(animValue1, {
        //         toValue: 1,
        //         duration: 1000,
        //         useNativeDriver: true,
        //     }),
        //     {iterations: 3} // number of times to repeat the animation
        // );
        // loopAnimation.start();

        const delayAnimation = Animated.sequence([
            Animated.delay(2000),
            Animated.timing(animValue1, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.delay(2000),
            Animated.timing(animValue2, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
        ]);
        delayAnimation.start();
    }, []);

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, { opacity: animValue1 }]} />
            <Animated.View style={[styles.box, { backgroundColor: 'blue', opacity: animValue2 }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#222',
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        marginVertical: 10,
        borderRadius: 20,
    }
});

export default NestingAnimationFunc;
