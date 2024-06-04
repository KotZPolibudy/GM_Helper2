import { StyleSheet, Text, View, Image, Dimensions, Pressable, Alert } from 'react-native';
import Colors from '@/constants/Colors';
import diceImages from '@assets/diceImages';
import { Die } from '@/types';
import { useState } from 'react';

type DiceListItemProps = {
    die: Die,
}

export const defaultDieImage = require('@assets/dice_Images/defaultdice.jpg');

const screenWidth = Dimensions.get('window').width;

const DiceListItem = ({ die }: DiceListItemProps) => {
    const dieImage = diceImages[die.image as keyof typeof diceImages] || defaultDieImage;
    const [fudgeResults, setFudgeResults] = useState<number[]>([]);
    

    return (
        <Pressable style={styles.container}>
            <Image style={styles.image} source={dieImage} resizeMode="cover" />
            <Text style={styles.title}>{die.name}</Text>
        </Pressable>
    );
}

export default DiceListItem;

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
    }
});
