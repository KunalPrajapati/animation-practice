import { View, Text, StyleSheet, Animated, useAnimatedValue } from 'react-native';
import React, { useEffect, useRef } from 'react';


//VCF
const Value = () => {

    const Value = useRef(new Animated.ValueXY({x:0, y: 0})).current; //useRef for avoiding unnecessary re-renders
    const position = useAnimatedValue(0); //useAnimatedValue instead of useRef - working is same

    const basePosition = useAnimatedValue(50);
    const oscillation = useAnimatedValue(0);
    const combinedValue = Animated.add(basePosition, oscillation);


    //function to animate the box

    const startAnimation = () => {
        Animated.timing(position, {
            toValue: 200, //final position of the box
            duration: 1000,
            useNativeDriver: false,
        }).start(() => {
            Animated.timing(position, {
                toValue: 0, //final position of the box
                duration: 1000,
                useNativeDriver: false,
            }).start();
        }); //start the animation with completion callback
    };

    const startAnimation2 = () => {
        Animated.timing(Value,{
            toValue: {x: 200, y: 200}, //final position of the box
            duration: 2000,
            useNativeDriver: true,
        }).start();
    };


    const startOscillation = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(oscillation, {
                    toValue: 100, //final position of the box
                    duration: 1000,
                    useNativeDriver: false,
                }),
                Animated.timing(oscillation, {
                    toValue: -100, //final position of the box
                    duration: 1000,
                    useNativeDriver: false,
                }),
            ]),{iterations: Infinity} //number of iterations can be set to infinite also
        ).start();
    };

    useEffect(() => {
        // startAnimation();
        // startAnimation2();
        startOscillation();
    }
    , []); 

    return (
        <View>
            <Animated.View style={[styles.box, {marginLeft: position}]} />
            <Animated.View style={[styles.box2, {transform: Value.getTranslateTransform()}]} />
            <Animated.View style={[styles.circle, {transform: [{translateX: combinedValue}]}]} />
        </View>
    );
};


const styles = StyleSheet.create({

    box: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        borderRadius: 20,
    },
    box2: {
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        borderRadius: 20,
        marginTop: 20,
    },
    circle: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 200,
        marginTop: 20,
    },

});


export default Value;
