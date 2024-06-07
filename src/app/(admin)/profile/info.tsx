import { Stack } from "expo-router";
import { Text, FlatList, View, Image, StyleSheet} from "react-native";

export default function CampaignsScreen() {
    console.log(require('@assets/images/giphy.webp'));

    return(
        
        <View>
            <Stack.Screen options={{title: 'Szczegóły profilu'}}/>
            <Text>Jesteś po stronie admina</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '100%',
      backgroundColor: '#0553',
    },
  });