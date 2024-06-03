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

    const rollMe = () => {
        if (die.name == 'DF') {
            const results = Array.from({ length: 4 }, () => Math.floor(Math.random() * 3) - 1); 
            const sum = results.reduce((acc, val) => acc + val, 0);
            setFudgeResults(results);
            Alert.alert(`Rolled dF: ${results[0]}, ${results[1]}, ${results[2]}, ${results[3]} \n Sum: ${sum}`);
        } else {
            const min = 1;
            const max = die.range;
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            Alert.alert(`Rolled a ${randomNumber}`);
        }
    }
    

    return (
        <Pressable style={styles.container} onPress={rollMe}>
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
        height: 130, // Fixed height for the images
        borderRadius: 10,
    }
});
