import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Alert } from 'react-native';
import dice from '@assets/data/dice';
import DiceManyListItem from '@/components/DiceManyListItem';
import Button from '@/components/Button';
import { Die } from '@/types';
import { Stack } from 'expo-router';

type Quantities = {
  [key: number]: number;
};

const DiceList = () => {
  const [quantities, setQuantities] = useState<Quantities>(dice.reduce((acc, die) => {
      acc[die.id] = 0;
      return acc;
  }, {} as Quantities));

  const updateQuantity = (id: number, delta: number) => {
      setQuantities(prevQuantities => ({
          ...prevQuantities,
          [id]: Math.max(0, prevQuantities[id] + delta)
      }));
  };

  const rollDie = (die: Die) => {
    if (die.name === 'DF') {
      const rolls = Array.from({ length: quantities[die.id] }, () => Math.floor(Math.random() * 3) - 1);
      return rolls;
    } else {
      const rolls = Array.from({ length: quantities[die.id] }, () => Math.floor(Math.random() * die.range) + 1);
      return rolls;
    }
  };

  const throwAll = () => {
    let totalSum = 0;
    const results = dice.reduce((acc, die) => {
      const quantity = quantities[die.id];
      if (quantity > 0) {
        const rolls = rollDie(die);
        const sum = rolls.reduce((sum, roll) => sum + roll, 0);
        totalSum += sum;
        acc.push(`${die.name}: ${rolls.join(', ')}, suma: ${sum}`);
      }
      return acc;
    }, [] as string[]);

    if (results.length > 0) {
      Alert.alert('Wyniki', `${results.join('\n')}\nRazem: ${totalSum}`);
    } else {
      Alert.alert('Nie wybrano kości', 'Wybierz kości jakimi chcesz rzucać');
    }
  };

  const resetQuantities = () => {
    setQuantities(dice.reduce((acc, die) => {
      acc[die.id] = 0;
      return acc;
    }, {} as Quantities));
  };

  return (
      <View style={styles.container}>
        <Stack.Screen options={{title: 'Rzuć wiaderkiem'}}/>
          <FlatList
              data={dice}
              numColumns={2}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                  <DiceManyListItem
                      die={item}
                      quantity={quantities[item.id]}
                      updateQuantity={updateQuantity}
                  />
              )}
          />
          <Button text="Rzucaj!" onPress={throwAll} />
          <Button text="Wyzeruj wartości" onPress={resetQuantities} />
      </View>
  );
};

export default DiceList;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f5f5f5',
  },
});
