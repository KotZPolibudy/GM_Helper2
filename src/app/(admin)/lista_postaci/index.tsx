import { View, FlatList, Text, ActivityIndicator } from 'react-native';
import heroes from '@assets/data/heroes';
import HeroListItem from '@/components/HeroListItem';
import { useHeroesList } from '@/app/api/heroes';

export default function HeroListScreen() {


  const { data: heroes, error, isLoading } = useHeroesList();
  if (isLoading) {
    return <ActivityIndicator/>;
  }
  if (error) {
    return <Text>Failed to fetch heroes</Text>
  }
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
