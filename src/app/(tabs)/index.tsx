import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '@/constants/Colors';
import heroes from '@assets/data/heroes';
import HeroListItem from '@/components/HeroListItem';


export default function HeroListScreen() {
  return (
    <View>
      <HeroListItem hero={heroes[0]}/>
      <HeroListItem hero={heroes[1]}/>
    </View>
  );
}
