import { Stack } from "expo-router"
import { Text, FlatList, View } from "react-native"

export default function CampaignsScreen() {
    return(
        
        <View>
            <Stack.Screen options={{title: 'Szczegóły profilu'}}/>
            <Text>Jesteś po stronie admina</Text>
        </View>
    )
}