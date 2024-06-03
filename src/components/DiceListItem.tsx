import { StyleSheet, Text, View, Image, Dimensions, Pressable } from 'react-native';
import Colors from '@/constants/Colors';
import dice from '@assets/data/dice';
import { Link, useSegments } from 'expo-router';
import { Die } from '@/types';
import diceImages from '@assets/dice_Images';

type HeroListItemProps = {
    die: Die,
}
 // needs work
export const defaultDieImage = require('@assets/dice_Images/defaultdice.jpg');

const screenWidth = Dimensions.get('window').width;

const HeroListItem = ({ die }: HeroListItemProps) => {
    const heroImage = die.image ? diceImages[die.image] || defaultDieImage : defaultDieImage;
    const segments = useSegments();

    const rollme = () => {

    } 

    return (
        <Pressable style={styles.container} onPress={rollme}>
            <Image style={styles.image} source={heroImage} resizeMode="cover" />
            <Text style={styles.title}> {die.name} </Text>
            <Text style={styles.level}>Level: {die.range} </Text>
        </Pressable>
    );
}

export default HeroListItem;

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
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    level: {
        fontSize: 16,
        fontWeight: '700',
        color: Colors.light.tint,
        marginTop: 5,
    },
    image: {
        width: '100%',
        height: 200, // Fixed height for the images
        borderRadius: 10,
    }
});
