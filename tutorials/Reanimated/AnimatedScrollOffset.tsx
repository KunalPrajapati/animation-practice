/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-label-var */
/* eslint-disable no-labels */
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import Animated, { DerivedValue, useAnimatedProps, useAnimatedRef, useDerivedValue, useScrollViewOffset } from 'react-native-reanimated';



const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
Animated.addWhitelistedNativeProps({text:true});//Reanimated ko bataya gaya hai ki "text" property allow ki gayi hai animate karne ke liye.



function AnimatedText({text, ...props}: {text:DerivedValue<string>}){
    const animatedProps = useAnimatedProps(() => ({
        text : text.value,
        defaultValue: text.value,
    }));

    return <AnimatedTextInput editable={false} {...props} value={text.value} animatedProps={animatedProps} style={{color: 'white'}} />;
}




const AnimatedScrollOffset = () => {

    const animatedRef = useAnimatedRef<Animated.ScrollView>();

    const offSet = useScrollViewOffset(animatedRef);

    // useScrollViewOffset is a hook that returns the current scroll offset of the scroll view. useState is not used because it will cause the component to re-render every time the scroll offset changes, which is not efficient. useScrollViewOffset is a hook that returns the current scroll offset of the scroll view. It is similar to useScrollPosition in React Native's Animated API, but it is specifically designed for Reanimated's shared values.
    const text = useDerivedValue(() => `Scroll offset is ${offSet.value.toFixed(1)}`);

    const [isScrollhorizontal, setIsScrollHorizontal] = useState<boolean>(false);



    return (
        <View style={styles.container}>
            <AnimatedText text={text} />
            <Animated.ScrollView
                ref={animatedRef}
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                horizontal={isScrollhorizontal}
            >
                {
                    Array.from({ length: 10 }, (_, i) => (
                        <View key={i} style={styles.box}>
                            <Text style={{ color: '#fff', fontSize: 24 }}>{i}</Text>
                        </View>
                    ))
                }
            </Animated.ScrollView>
            <Button
                title={`Toggle Scroll to ${isScrollhorizontal ? 'Vertical' : 'Horizontal'}`}
                onPress={() => {
                    setIsScrollHorizontal(!isScrollhorizontal);
                }}
            />
        </View>
    );
};

export default AnimatedScrollOffset;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    scroll: {
        borderWidth: 1,
        borderColor: 'gray',
        height: 250,
        width: 250,
        margin: 20,
    },
    scrollContent: {
        alignItems: 'center',
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: '#b58df1',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        margin: 10,
    },
    center: {
        textAlign: 'center',
    },
});