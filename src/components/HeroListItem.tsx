import { StyleSheet, Text, View, Image } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import Colors from '@/constants/Colors';
import heroes from '@assets/data/heroes';
import { Hero } from '@/types';

type HeroListItemProps = {
    hero: Hero,
}

export const defaultHeroImage = require('@assets/heroimages/default.png');

const HeroListItem = ({hero}: HeroListItemProps) => {
    return (
      <View style={styles.container}>
  
        <Image style={styles.image} source={require(`@assets/heroimages/${hero.image}`) || defaultHeroImage} />
  
        <Text style={styles.title}> {hero.name} </Text>
        <Text style={styles.level}>Level: {hero.level} </Text>
      </View>
    );
  }

  export default HeroListItem;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 30,
      //flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    level: {
      fontSize: 16,
      fontWeight: '700',
      color: Colors.light.tint,
    },
    image: {
      height: '55%',
      aspectRatio: 1,
    }
  });