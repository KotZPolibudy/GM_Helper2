import { StyleSheet, Text, View, Image, Dimensions, Pressable } from 'react-native';
import Colors from '@/constants/Colors';
import { Hero } from '@/types';
import heroImages from '@assets/heroImages';
import { Link, useSegments } from 'expo-router';
import RemoteImage from './RemoteImage';

type HeroListItemProps = {
    hero: Hero,
}

//export const defaultHeroImage = require('@assets/heroimages/default.png');
//export const defaultHeroImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';
export const defaultHeroImage = 'https://naklejamy.com/img-preview/aHR0cHM6Ly9hczEuZnRjZG4ubmV0L3YyL2pwZy8wNi83OS8wOS85Ni8xMDAwX0ZfNjc5MDk5NjQzX0xnSWRCM3laSVZRaVdlclBEMVh4TGVLNE1kUnZINmRVLmpwZw==?&w=315&h=471&e=none&f=none&r=0&m=1'

const screenWidth = Dimensions.get('window').width;

const HeroListItem = ({ hero }: HeroListItemProps) => {
    //const heroImage = hero.image ? heroImages[hero.image] || defaultHeroImage : defaultHeroImage;
    const segments = useSegments();
    return (
        <Link href={`${segments[0]}/lista_postaci/${hero.id}`} asChild>
        <Pressable style={styles.container}>

            <RemoteImage
                path = {hero.image}
                fallback = {defaultHeroImage}
                style={styles.image}
                resizeMode="contain"
                />


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
