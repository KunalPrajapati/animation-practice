import { View, Text, StyleSheet, Animated, useAnimatedValue } from 'react-native';
import React from 'react';


const HEADER_HEIGHT = 80;
const DATA = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);

const ScrollEvent = () => {

    const scrollY = useAnimatedValue(0);

    const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_HEIGHT],
        outputRange: [HEADER_HEIGHT, 40],
        extrapolate: 'clamp',
    })


    return (
        <View style={styles.container}>
            <Animated.View style={[styles.header, { height: headerHeight }]}>
                <Text style={styles.headerText}>Collapsible Header</Text>
            </Animated.View>
            <Animated.FlatList
                data={DATA}
                keyExtractor={(_,index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText}>Item {item}</Text>
                    </View>
                )}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
                scrollEventThrottle={16}
                contentContainerStyle={{ paddingTop: HEADER_HEIGHT + 10 }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#007bff',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        elevation: 5,
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        padding: 10,
        fontWeight: 'semibold',
    },
    itemContainer: {
        padding: 20,
        backgroundColor: '#444',
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    itemText: {
        color: '#ccc',
        fontSize: 18,
    },
});


export default ScrollEvent;