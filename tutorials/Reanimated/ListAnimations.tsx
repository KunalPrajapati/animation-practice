import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Animated, { FadeIn, LinearTransition } from 'react-native-reanimated';



interface Item {
    id: string;
    title: string;
}

const ListAnimations: React.FC = () => {
    const [data, setData] = useState<Item[]>([
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' },
        { id: '4', title: 'Item 4' },
        { id: '5', title: 'Item 5' },
    ]);


    const genertateRandomItem = () => {
        const randomNumber = Math.floor(Math.random() * 1000);
        return {
            id: randomNumber.toString(),
            title: `Item ${randomNumber}`,
        };
    };

    const addItem = () => {
        setData(prevData => [...prevData, genertateRandomItem()]);
    };

    const removeItem = (id: string) => {
        setData(prevData => prevData.filter(item => item.id !== id));
    };

    const renderItem = ({ item }: { item: Item }) => {
        return (
            <>
                <Animated.View entering={FadeIn}>
                    <TouchableOpacity
                        onPress={() => removeItem(item.id)}
                        style={styles.item}
                    >
                        <Text>
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                </Animated.View>
            </>
        )
    }



    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={addItem}
                style={{ ...styles.item, backgroundColor: '#4CAF50' }}
            >
                <Text>
                    Add Item
                </Text>
            </TouchableOpacity>
            <Animated.FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                itemLayoutAnimation={LinearTransition}
            />
        </View>
    );

};
export default ListAnimations;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    item: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        marginBottom: 5,
    }
});
