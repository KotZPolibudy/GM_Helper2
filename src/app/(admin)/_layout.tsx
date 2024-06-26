import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Redirect, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { useAuth } from '@/providers/AuthProvider';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const {isAdmin} = useAuth();

  if (!isAdmin) {
    return <Redirect href={'/'}/>
  }

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.light.tint,
        },
        tabBarActiveTintColor: 'gainsboro',
        tabBarInactiveTintColor: Colors.light.background,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>

      <Tabs.Screen name="index" options={{ href: null}} />

      <Tabs.Screen
        name="lista_postaci"
        options={{
          title: 'Lista Postaci',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="users" color={color} />,
        }}
      />
      <Tabs.Screen
        name="kampanie"
        options={{
          title: 'Kampanie',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
        }}
      />

<Tabs.Screen
        name="kostki"
        options={{
          title: 'Kostki',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="diamond" color={color} />,
        }}
      />


<Tabs.Screen
        name="punkty"
        options={{
          title: 'punkty',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="dollar" color={color} />,
        }}
      />


<Tabs.Screen
        name="profile"
        options={{
          title: 'Profil',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
