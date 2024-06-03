import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList, Platform, Alert } from 'react-native';
import * as Calendar from 'expo-calendar';

export default function App() {
  const [calendars, setCalendars] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === 'granted') {
        const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
        setCalendars(calendars);
      }
    })();
  }, []);

  const createCalendar = async () => {
    const defaultCalendarSource = Platform.OS === 'ios'
      ? await getDefaultCalendarSource()
      : { isLocalAccount: true, name: 'Expo Calendar' };
    const newCalendarID = await Calendar.createCalendarAsync({
      title: 'Expo Calendar',
      color: 'blue',
      entityType: Calendar.EntityTypes.EVENT,
      sourceId: defaultCalendarSource.id,
      source: defaultCalendarSource,
      name: 'internalCalendarName',
      ownerAccount: 'personal',
      accessLevel: Calendar.CalendarAccessLevel.OWNER,
    });
    Alert.alert(`Your new calendar ID is: ${newCalendarID}`);
  };

  async function getDefaultCalendarSource() {
    const defaultCalendar = await Calendar.getDefaultCalendarAsync();
    return defaultCalendar.source;
  }

  const renderItem = ({ item }) => (
    <View style={styles.calendarItem}>
      <Text style={styles.calendarTitle}>{item.title}</Text>
      <Text>{item.source.name}</Text>
      <Text>{item.source.type}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Calendar Module Example</Text>
      <Button title="Create a new calendar" onPress={createCalendar} />
      <FlatList
        data={calendars}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },
  list: {
    marginTop: 20,
  },
  calendarItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    width: '100%',
  },
  calendarTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
