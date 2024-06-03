import { View, FlatList, Text } from 'react-native';
import dice from '@assets/data/dice';

export default function DiceListScreen() {
  return (
    <FlatList
    data={dice}
    renderItem={({ item }) => <Text>Item aaaa</Text>}
    contentContainerStyle={{ padding: 10 }}
    keyExtractor={(item) => item.id.toString()}
    numColumns={4}
    />
    
  );
}
