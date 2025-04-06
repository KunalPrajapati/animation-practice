/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, { scrollTo, SharedValue, useAnimatedRef, useDerivedValue, useSharedValue } from 'react-native-reanimated';


const ITEM_COUNT = 10;
const ITEM_SIZE = 100;
const ITEM_MARGIN = 10;


const ScrollToFn = () => {

    const items = Array.from({ length: ITEM_COUNT }, (_, i) => i);
    const scroll = useSharedValue<number>(0);
    const animatedRef = useAnimatedRef<Animated.ScrollView>();

    //advised to use flatlist's functions instead of useDerivedValue
    useDerivedValue(() => {
        scrollTo(animatedRef, 0, scroll.value * (ITEM_SIZE + 2 * ITEM_MARGIN), true);
    });

    return (
        <View style={styles.container}>
            <Incrementor increment={-1} scroll={scroll} />
            <View style={styles.scrollContainer}>
                <Animated.ScrollView ref={animatedRef}>
                    {
                        items.map((item, index) => (
                            <View key={index} style={styles.box}>
                                <Text style={{ color: '#fff', fontSize: 24 }}>{item}</Text>
                            </View>
                        ))
                    }
                </Animated.ScrollView>
            </View>
            <Incrementor increment={1} scroll={scroll} />
        </View>
    );
};


const Incrementor = ({ increment, scroll }: { increment: number, scroll: SharedValue<number> }) => {
    return (
        <View>
            <Button
                title={`Scoll ${Math.abs(increment)} ${increment > 0 ? 'down' : 'up'}`}
                onPress={() => {
                    scroll.value = (scroll.value + increment + ITEM_COUNT) % ITEM_COUNT;
                }}
            />
        </View>
    )
};

export default ScrollToFn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: ITEM_SIZE,
        height: ITEM_SIZE,
        margin: ITEM_MARGIN,
        borderRadius: 15,
        backgroundColor: '#b58df1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollContainer: {
        width: '100%',
        height: 250,
        alignItems: 'center',
    },
    buttonWapper: {
        marginBottom: 20,
    },
    boxText: {
        textAlign: 'center',
    },
});
