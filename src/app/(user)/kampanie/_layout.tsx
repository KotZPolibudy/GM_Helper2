import { Stack } from "expo-router";

export default function CampMenuStack() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ title: 'Kampanie'}} />
        </Stack>
    )
}
