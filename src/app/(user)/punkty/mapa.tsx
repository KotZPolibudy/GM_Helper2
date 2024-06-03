import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

const locationsOfInterest = [
  {
    title: 'First',
    location: {
      latitude: 10,
      longitude: 10
    },
    description: 'marker 10/10'
  },
  {
    title: 'Second',
    location: {
      latitude: 50,
      longitude: 20
    },
    description: 'marker 50/20'
  },
  {
    title: 'Politechnika CW',
    location: {
      latitude: 52.4042891018028, 
      longitude: 16.949772982976246
    },
    description: 'mogę punkty za mapę?'
  },
  {
    title: 'tajne/poufne',
    location: {
      latitude: 52.0895051851695, 
      longitude: 16.632533954623682
    },
    description: 'Hej, widać stąd mój dom!'
  }
];

export default function Mapp() {
  const showLocationsOfInterest = () => {
    return locationsOfInterest.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
        />
      );
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 52.4015,
          longitude: 16.9495,
          latitudeDelta: 25.55,
          longitudeDelta: 16.23,
        }}
      >
        {showLocationsOfInterest()}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
