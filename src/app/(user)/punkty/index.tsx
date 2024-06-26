import { View, Text } from 'react-native';
import React from 'react';
import Button from '@components/Button';
import { Link } from 'expo-router';

const index = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
      <Link href={'/(user)/punkty/mapa'} asChild>
        <Button text="Mapa" />
      </Link>
      <Link href={'/(user)/punkty/kalendarz'} asChild>
        <Button text="Kalendarz" />
      </Link>
      <Link href={'/'} asChild>
        <Button text="do domu" />
      </Link>

    </View>
  );
};

export default index;