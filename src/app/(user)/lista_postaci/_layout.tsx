import { Stack } from "expo-router";

export default function HeroStack () {
    return(
        <Stack>
            <Stack.Screen name='index' options={{title: 'Lista Postaci'}}/>
        </Stack>
    )
}