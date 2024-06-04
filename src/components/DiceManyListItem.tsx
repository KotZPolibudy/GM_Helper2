import { StyleSheet, Text, View, Image, Dimensions, Pressable, Alert } from 'react-native';
import Colors from '@/constants/Colors';
import diceImages from '@assets/diceImages';
import { Die } from '@/types';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

type DiceListItemProps = {
    die: Die,
    quantity: number,
    updateQuantity: (id: number, delta: number) => void,
}

export const defaultDieImage = require('@assets/dice_Images/defaultdice.jpg');
const screenWidth = Dimensions.get('window').width;

const DiceManyListItem = ({ die, quantity, updateQuantity }: DiceListItemProps) => {
    const dieImage = diceImages[die.image as keyof typeof diceImages] || defaultDieImage;

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={dieImage} resizeMode="cover" />
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>{die.name}</Text>
            </View>
            <View style={styles.quantitySelector}>
                <FontAwesome
                    onPress={() => updateQuantity(die.id, -1)}
                    name="minus"
                    color="gray"
                    style={{ padding: 5 }}
                />
                <Text style={styles.quantity}>{quantity}</Text>
                <FontAwesome
                    onPress={() => updateQuantity(die.id, 1)}
                    name="plus"
                    color="gray"
                    style={{ padding: 5 }}
                />
            </View>
        </View>
    );
}

export default DiceManyListItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        marginHorizontal: 10,
        width: screenWidth - 40, // Adjust container width
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    image: {
        width: '100%',
        height: 100, // Fixed height for the images
        borderRadius: 10,
    },
    subtitleContainer: {

    },
    quantitySelector: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {

    },
    quantity: {
        marginHorizontal: 10,
        fontSize: 18,
    },
});