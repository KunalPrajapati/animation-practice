import { View, Text, StyleSheet, Animated, useAnimatedValue } from 'react-native';
import React, { useEffect, useRef } from 'react';


//VCF
const Basics = () => {

    const position = useAnimatedValue(0); //useAnimatedValue instead of useRef - working is same
        // const position = useRef(new Animated.Value(0)).current; //useRef for avoiding unnecessary re-renders


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

    useEffect(() => {
        startAnimation(); //call the function to start the animation
    }
    , []); 

    return (
        <View>
            <Animated.View style={[styles.box, {marginLeft: position}]} />
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

});


export default Basics;
