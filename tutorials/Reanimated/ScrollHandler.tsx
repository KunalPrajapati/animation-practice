import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Animated, { interpolate, useAnimatedScrollHandler, useSharedValue, withSpring } from 'react-native-reanimated';


//decrease the opacity of the header when scrolling up and hide it

const { height: screenHeight } = Dimensions.get('window');
const HEADER_HEIGHT = 100;

export default function ScrollHandler() {

    const translateY = useSharedValue(0);
    const opacity = useSharedValue(1);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            const scrollY = event.contentOffset.y;
            translateY.value = withSpring(scrollY > HEADER_HEIGHT ? -HEADER_HEIGHT : 0);
            opacity.value = interpolate(
                scrollY,
                [0, HEADER_HEIGHT / 2], //inputRange:
                [1, 0], //outputRange
                'clamp' //extrapolate
            );
        },
    })

    return (
        <View style={styles.container}>
            <Animated.View
                style={[styles.header, {
                    transform: [
                        { translateY: translateY },
                    ],
                    opacity: opacity,
                }]}
            >
                <Text style={styles.headerText}>
                    Collapsible Header
                </Text>
            </Animated.View>

            <Animated.ScrollView
            onScroll={scrollHandler}
            scrollEventThrottle={16}
            contentContainerStyle={styles.scrollContent}
            >
                <View>
                    <Text style={styles.text}>Scroll down to see the header collapse</Text>
                    {
                        Array.from({ length: 50 }, (_, index) => (
                            <Text key={index} style={styles.text}>
                                Item {index + 1}
                            </Text>
                        ))
                    }
                </View>
            </Animated.ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        fontSize: 24,
        color: '#fff',
        textAlign: 'center',
    },
    content: {
        padding: 16,
    },
    header: {
        height: HEADER_HEIGHT,
        width: '100%',
        backgroundColor: '#6a1b9a',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
    },
    text: {
        fontSize: 18,
        marginVertical: 10,
        color: '#000',
        textAlign: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 20,
        shadowColor: '#000',
    },
    scrollContent: {
        paddingTop: HEADER_HEIGHT + 10,
    },
});
