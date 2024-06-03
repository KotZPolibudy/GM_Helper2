import { View, FlatList } from 'react-native';
import heroes from '@assets/data/heroes';
import HeroListItem from '@/components/HeroListItem';

export default function HeroListScreen() {
  return (
    <FlatList
      data={heroes}
      renderItem={({ item }) => <HeroListItem hero={item} />}
      contentContainerStyle={{ padding: 10 }}
      keyExtractor={(item) => item.id.toString()}
      numColumns={1}
    />
  );
}
