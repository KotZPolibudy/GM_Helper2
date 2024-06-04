import { View, Text } from 'react-native';
import React from 'react';
import Button from '@components/Button';
import { Link } from 'expo-router';

const index = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
      <Link href={'/(admin)/profile/info'} asChild>
        <Button text="Info o profilu" />
      </Link>
      <Link href={'/'} asChild>
        <Button text="do domu" />
      </Link>

    </View>
  );
};

export default index;