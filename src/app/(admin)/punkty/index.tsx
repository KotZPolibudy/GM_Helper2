import { View, Text } from 'react-native';
import React from 'react';
import Button from '@components/Button';
import { Link } from 'expo-router';

const index = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
      <Link href={'/(admin)/punkty/mapa'} asChild>
        <Button text="Mapa" />
      </Link>
      <Link href={'/(admin)/punkty/kalendarz'} asChild>
        <Button text="Kalendarz" />
      </Link>
      <Link href={'/(admin)/punkty/animacje'} asChild>
        <Button text="Animacje" />
      </Link>
      <Link href={'/(admin)/punkty/sensor_test'} asChild>
        <Button text="Sensor" />
      </Link>

    </View>
  );
};

export default index;