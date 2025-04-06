import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Animated, { CurvedTransition, EntryExitTransition, FadeOut, FadingTransition, JumpingTransition, Layout, SequencedTransition } from 'react-native-reanimated';


interface Item {
    id: number;
    emoji: string;
    color: string;
}

interface ItemsProps {
    items: Item[];
    onRemove: (id: number) => void;
}

interface TileProps {
    emoji: string;
    onRemove: () => void;
}

const INITIAL_LIST: Item[] = [
    { id: 1, emoji: '🍔', color: '#FF5733' },   // Red-Orange
    { id: 2, emoji: '🍕', color: '#33FF57' },   // Lime Green
    { id: 3, emoji: '🌭', color: '#3357FF' },   // Bright Blue
    { id: 4, emoji: '🍟', color: '#FFD700' },   // Gold
    { id: 5, emoji: '🍿', color: '#FF33A8' },   // Pink
    { id: 6, emoji: '🥪', color: '#00FFFF' },   // Aqua
    { id: 7, emoji: '🍗', color: '#FF8C00' },   // Dark Orange
    { id: 8, emoji: '🥓', color: '#DC143C' },   // Crimson
    { id: 9, emoji: '🍤', color: '#FF69B4' },   // Hot Pink
    { id: 10, emoji: '🥞', color: '#8A2BE2' },  // Blue Violet
    { id: 11, emoji: '🧁', color: '#00FF7F' },  // Spring Green
    { id: 12, emoji: '🍩', color: '#FF4500' },  // Orange Red
]

const Tile: React.FC<TileProps> = ({ emoji, onRemove }) => {
    return (
        <TouchableOpacity onPress={onRemove} style={styles.title}>
            <Text style={styles.titleLabel}>{emoji}</Text>
        </TouchableOpacity>
    );
};

const Items: React.FC<ItemsProps> = ({ items, onRemove }) => {
    return (
        <View style={styles.gridContainer}>
            {items.map((item) => (
                <Animated.View
                    key={item.id}
                    // layout={FadingTransition}
                    // layout={SequencedTransition}
                    // layout={JumpingTransition}
                    // layout={CurvedTransition}
                    layout={EntryExitTransition}
                    exiting={FadeOut.duration(300)}
                    style={[styles.titleContainer, { backgroundColor: item.color }]}
                >
                    <Tile emoji={item.emoji} onRemove={() => onRemove(item.id)} />
                </Animated.View>
            ))}
        </View>
    );
}

const LayoutTransition = () => {
    const [items, setItems] = React.useState<Item[]>(INITIAL_LIST);
    
    const removeItem = (idToRemove: number) => {
        const updatedItems = items.filter(item => item.id !== idToRemove);
        setItems(updatedItems);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Items items={items} onRemove={removeItem} />
        </SafeAreaView>
    );
};

export default LayoutTransition;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        width: '100%',
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 32,
    },
    titleContainer: {
        width: '20%',
        margin: '1%',
        borderRadius: 16,
        minHeight: 80,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    title: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleLabel: {
        color: '#f8f9ff',
        fontSize: 24,
    },
});