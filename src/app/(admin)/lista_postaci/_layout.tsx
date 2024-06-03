import { Stack, Link } from "expo-router";
import { Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "@/constants/Colors";


export default function HeroStack () {
    return( 
    <Stack screenOptions={{  }}>

        <Stack.Screen name="index" options={{ title: 'Lista postaci', headerRight: () => (
            <Link href="/(admin)/lista_postaci/create" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="plus-square-o"
                    size={25}
                    color={Colors.light.tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ), 
        }} />


        


    </Stack>

    )
}