import { View, Text, Animated, useAnimatedValue, StyleSheet, PanResponder } from 'react-native';
import React, { useEffect, useRef } from 'react';


//pan responder - pan gesture detection
//animated.event - dimentional values (x,y values)

//done by animated api iteself
//fork event - attachement of event to gesture
//unfork event - clearing the event

const Event = () => {

    const pan = useRef(new Animated.ValueXY()).current;
    const scale = useAnimatedValue(1);


    //in useRef because of preventing re-rendering
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                Animated.spring(scale, {
                    toValue: 1.5,
                    useNativeDriver: true,
                }
                ).start();
            },
            onPanResponderMove: Animated.event([
                null,
                {
                    dx: pan.x,
                    dy: pan.y,
                },
            ], { useNativeDriver: false }),
            onPanResponderRelease: (event, gestureState) => {
                Animated.parallel([
                    Animated.spring(pan, {
                        toValue: { x: gestureState.dx, y: gestureState.dy },
                        useNativeDriver: true,
                    }),
                    Animated.spring(scale, {
                        toValue: 1,
                        useNativeDriver: true,
                    }),
                ]).start();
            },
        })
    ).current;


    // useEffect(() => {
    //     //forking event
    //     const forkedEvent = Animated.event
    // }, []);

    return (
        <View style={styles.container}>
            <Animated.View {...panResponder.panHandlers}
            style={[styles.box, {transform: [...pan.getTranslateTransform(), { scale: scale }]}]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        borderRadius: 20,
    },
})

export default Event;
