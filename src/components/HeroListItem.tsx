import { StyleSheet, Text, View, Image, Dimensions, Pressable } from 'react-native';
import Colors from '@/constants/Colors';
import { Hero } from '@/types';
import heroImages from '@assets/heroImages';
import { Link, useSegments } from 'expo-router';

type HeroListItemProps = {
    hero: Hero,
}

export const defaultHeroImage = require('@assets/heroimages/default.png');

const screenWidth = Dimensions.get('window').width;

const HeroListItem = ({ hero }: HeroListItemProps) => {
    const heroImage = hero.image ? heroImages[hero.image] || defaultHeroImage : defaultHeroImage;
    const segments = useSegments();
    return (
        <Link href={`${segments[0]}/lista_postaci/${hero.id}`} asChild>
        <Pressable style={styles.container}>
            <Image style={styles.image} source={heroImage} resizeMode="cover" />
            <Text style={styles.title}> {hero.name} </Text>
            <Text style={styles.level}>Level: {hero.level} </Text>
        </Pressable>
        </Link>
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
