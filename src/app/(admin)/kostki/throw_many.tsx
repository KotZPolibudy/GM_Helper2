import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FlatList, View, StyleSheet, Alert } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import dice from '@assets/data/dice';
import DiceManyListItem from '@/components/DiceManyListItem';
import Button from '@/components/Button';
import { Die } from '@/types';
import { Stack } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';

type Quantities = {
  [key: number]: number;
};

const DiceList = () => {
  const [quantities, setQuantities] = useState<Quantities>(dice.reduce((acc, die) => {
    acc[die.id] = 0;
    return acc;
  }, {} as Quantities));

  const quantitiesRef = useRef(quantities);
  quantitiesRef.current = quantities;

  const [subscription, setSubscription] = useState(null);

  const updateQuantity = (id: number, delta: number) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: Math.max(0, prevQuantities[id] + delta)
    }));
  };

  const rollDie = (die: Die) => {
    if (die.name === 'DF') {
      const rolls = Array.from({ length: quantitiesRef.current[die.id] }, () => Math.floor(Math.random() * 3) - 1);
      return rolls;
    } else {
      const rolls = Array.from({ length: quantitiesRef.current[die.id] }, () => Math.floor(Math.random() * die.range) + 1);
      return rolls;
    }
  };

  const throwAll = () => {
    let totalSum = 0;
    const results = dice.reduce((acc, die) => {
      const quantity = quantitiesRef.current[die.id];
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

  const handleShake = useCallback((data) => {
    const { x, y, z } = data;
    const shakeThreshold = 1.5;
    if (Math.abs(x) > shakeThreshold || Math.abs(y) > shakeThreshold || Math.abs(z) > shakeThreshold) {
      throwAll();
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      Accelerometer.setUpdateInterval(16); // około 60 aktualizacji na sekundę
      const subscription = Accelerometer.addListener(handleShake);
      setSubscription(() => subscription);

      return () => {
        subscription && subscription.remove();
        setSubscription(null);
      };
    }, [handleShake])
  );

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Rzuć wiaderkiem' }} />
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
