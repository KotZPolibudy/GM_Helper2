import { View, FlatList, Text, Alert, Pressable, StyleSheet } from 'react-native';
import dice from '@assets/data/dice';
import DiceListItem from '@/components/DiceListItem';
import Colors from '@/constants/Colors';

export default function DiceListScreen() {


  const renderFooter = () => (
    <Pressable style={styles.customButton} onPress={() => Alert.alert('Przenieś na ekran rzucania wiaderkiem')}>
      <Text style={styles.customButtonText}>Rzuć wiele</Text>
    </Pressable>
  );


  return (
    <FlatList
    data={dice}
    renderItem={({ item }) => <DiceListItem die={item}/>}
    contentContainerStyle={{ padding: 10 }}
    keyExtractor={(item) => item.id.toString()}
    numColumns={3}
    ListFooterComponent={renderFooter}
    />
    // można dodać wyrównanie, żeby ostatnie elementy nie były nietypowego rozmiaru
  );
  
}

const styles = StyleSheet.create({
  customButton: {
    backgroundColor: Colors.light.tint,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    flex: 1,
  },
  customButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
