import { Stack } from "expo-router"
import { Text, FlatList, View } from "react-native"
import { supabase } from "@/lib/supabase"
import Button from "@/components/Button"

export default function CampaignsScreen() {
    return(
        
        <View>
            <Stack.Screen options={{title: 'Szczegóły profilu'}}/>
            <Text>Jesteś po stronie użytkownika (nie-admina)</Text>



            <Button onPress={() => supabase.auth.signOut()} text="Wyloguj" />
        </View>
    )
}