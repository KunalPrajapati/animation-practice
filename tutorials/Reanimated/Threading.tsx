import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Animated, { createWorkletRuntime, runOnJS, runOnRuntime, runOnUI, useAnimatedStyle, useSharedValue, withSpring, WorkletRuntime } from 'react-native-reanimated';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';



const runTime:WorkletRuntime = createWorkletRuntime('background');

//if want to do multi threading add few configs in babel.config.js

const Threading = () => {

    const [count, setCount] = useState(0);
    const [heavyTaskResult, setHeadyTaskResult] = useState<number | null>(null);
    const translateX = useSharedValue(0);
    const scale = useSharedValue(1);



    const updateCounter = () => setCount(prev => prev + 1);

    const handleTap = Gesture.Tap().onEnd(() => {
        'worklet';
        runOnJS(updateCounter)(); //currying concept
        scale.value = withSpring(scale.value === 1 ? 1.5 : 1);
    });

    const moveBox = () => {
        runOnUI(() => {
            'worklet';
            translateX.value = withSpring(translateX.value === 0 ? 100 : 0);
        });
    };



    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: translateX.value },
                { scale: scale.value },
            ],
        };
    });

    const updateComputationResult = (result: number) => {
        setHeadyTaskResult(result);
    };


    const startHeavyComputation = () => {
        runOnRuntime(runTime, () => {
            'worklet';
            let sum = 0;
            for (let i = 0; i < 200000; i++) {sum += 1;}
            runOnJS(updateComputationResult)(sum);
        })();
        // runOnJS(moveBox)();
    };

    return (
        <GestureHandlerRootView style={styles.container}>

            {/* only a single component is passed in the gesture detector else it won't be able to detect in which component the gesture has happened */}
            <GestureDetector gesture={handleTap}>
                <Animated.View
                    style={[styles.box, animatedStyle]}
                >
                    <Text style={styles.text}>
                        Tap Me
                    </Text>
                </Animated.View>
            </GestureDetector>

            <Text style={styles.text}>
                Tap Count: {count}
            </Text>
            <Button title="MoveBox" onPress={moveBox} />
            <Button title="Run heavy task" onPress={startHeavyComputation} />
            <Text style={{color: 'yellow'}}>
                Heavy Task Result {' '}
                {
                    heavyTaskResult !== null ? heavyTaskResult : 'Not yet computed'
                }
            </Text>
        </GestureHandlerRootView>
    );
};

export default Threading;

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
