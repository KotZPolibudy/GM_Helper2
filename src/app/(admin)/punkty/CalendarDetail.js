// CalendarDetail.js
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import * as Calendar from 'expo-calendar';

export default function CalendarDetail({ route }) {
  const { calendarId } = route.params;
  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === 'granted') {
        const events = await Calendar.getEventsAsync([calendarId], new Date(), new Date(Date.now() + 365 * 24 * 60 * 60 * 1000));
        setEvents(events);
      }
    })();
  }, [calendarId]);

  const renderItem = ({ item }) => (
    <View style={styles.eventItem}>
      <Text style={styles.eventTitle}>{item.title}</Text>
      <Text>{new Date(item.startDate).toLocaleString()} - {new Date(item.endDate).toLocaleString()}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Events in this Calendar</Text>
      <FlatList
        data={events}
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
    padding: 10,
  },
  list: {
    marginTop: 20,
  },
  eventItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    width: '100%',
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
